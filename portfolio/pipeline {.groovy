pipeline {
    agent any

    options {
        buildDiscarder(logRotator(numToKeepStr: '10'))   // Keep only the last 10 builds to save disk space
        timestamps()                                     // Add timestamps to console logs for easier debugging
    }

    parameters {
        string(name: 'DEPLOY_ENV', defaultValue: 'dev', description: 'Deployment environment: dev/stage/prod')
        string(name: 'BRANCH_NAME', defaultValue: 'main', description: 'Git branch to build')
        string(name: 'DOCKER_PORT', defaultValue: '8080', description: 'Port to expose the app (non-prod)')
    }

    environment {
        REGISTRY    = "artifactory.company.com/docker-local"   // Private Docker registry URL
        IMAGE_NAME  = "portfolio-app"                          // Docker image name
        APP_PORT    = "80"                                     // Container internal app port
        LB_PORT     = "8080"                                   // Load balancer (NGINX) port
        BLUE        = "portfolio_blue"                         // Blue container name
        GREEN       = "portfolio_green"                        // Green container name
        NGINX       = "portfolio_nginx"                        // NGINX reverse proxy container name
    }

    stages {
        // Stage: Checkout source code from Git
        stage('Checkout') {
            steps {
                git branch: "${params.BRANCH_NAME}",
                    url: 'https://github.com/your-username/portfolio.git'
            }
        }

        // Stage: Get current commit hash to tag Docker image
        stage('Get Commit Hash') {
            steps {
                script {
                    env.COMMIT_HASH = sh(script: "git rev-parse --short HEAD", returnStdout: true).trim()
                }
            }
        }

        // Stage: Run unit tests
        stage('Run Tests') {
            steps {
                script {
                    echo "Running unit tests..."
                    sh 'echo "✅ Tests passed (placeholder)."'
                }
            }
            post {
                always {
                    junit '**/test-results/*.xml' // Archive test results
                }
            }
        }

        // Stage: Lint Dockerfile, Build Docker image, and Security scan in parallel
        stage('Lint & Security Scan') {
            parallel {
                // Lint Dockerfile for best practices
                stage('Lint Dockerfile') {
                    steps {
                        script {
                            echo "Running Hadolint..."
                            sh 'hadolint Dockerfile || true'
                        }
                    }
                }

                // Build Docker image with multiple tags: BUILD_NUMBER, COMMIT_HASH, latest
                stage('Build Docker Image') {
                    steps {
                        script {
                            echo "Building Docker image..."
                            sh """
                                docker build -t $REGISTRY/$IMAGE_NAME:${BUILD_NUMBER} .
                                docker tag $REGISTRY/$IMAGE_NAME:${BUILD_NUMBER} $REGISTRY/$IMAGE_NAME:${COMMIT_HASH}
                                docker tag $REGISTRY/$IMAGE_NAME:${BUILD_NUMBER} $REGISTRY/$IMAGE_NAME:latest
                            """
                        }
                    }
                }

                // Scan Docker image for vulnerabilities using Trivy
                stage('Security Scan') {
                    steps {
                        script {
                            echo "Scanning Docker image for vulnerabilities..."
                            sh """
                                trivy image --exit-code 0 --severity HIGH,CRITICAL $REGISTRY/$IMAGE_NAME:${BUILD_NUMBER} || true
                            """
                        }
                    }
                }
            }
        }

        // Stage: Push Docker image to private Artifactory registry
        stage('Push to Artifactory') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'artifactory-docker-creds',
                                                  usernameVariable: 'DOCKER_USER',
                                                  passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo $DOCKER_PASS | docker login $REGISTRY -u $DOCKER_USER --password-stdin'

                    sh """
                        docker push $REGISTRY/$IMAGE_NAME:${BUILD_NUMBER}
                        docker push $REGISTRY/$IMAGE_NAME:${COMMIT_HASH}
                        docker push $REGISTRY/$IMAGE_NAME:latest
                    """
                }
            }
        }

        // Stage: Blue-Green Deployment for production environment
        stage('Blue-Green Deploy (Prod Only)') {
            when {
                expression { return params.DEPLOY_ENV == "prod" }
            }
            steps {
                script {
                    echo "Performing Blue-Green Deployment behind NGINX..."

                    // Determine which container is active and which one to deploy
                    def active = sh(script: "docker ps --format '{{.Names}}' | grep -E '$BLUE|$GREEN' || true", returnStdout: true).trim()
                    def target = (active == BLUE) ? GREEN : BLUE

                    echo "Active container: ${active}, Target container: ${target}"

                    // Start the target container with new image
                    sh """
                        docker rm -f ${target} || true
                        docker run -d --name ${target} --network app_net $REGISTRY/$IMAGE_NAME:latest
                    """

                    // Generate NGINX config pointing to the target container
                    sh """
                        mkdir -p nginx_conf
                        cat > nginx_conf/nginx.conf <<EOF
                        events {}
                        http {
                            upstream portfolio {
                                server ${target}:${APP_PORT};
                            }

                            server {
                                listen ${LB_PORT};
                                location / {
                                    proxy_pass http://portfolio;
                                }
                            }
                        }
                        EOF
                    """

                    // Run or update NGINX container as reverse proxy
                    sh """
                        docker rm -f $NGINX || true
                        docker run -d --name $NGINX -p ${LB_PORT}:${LB_PORT} \\
                            --network app_net \\
                            -v \$(pwd)/nginx_conf/nginx.conf:/etc/nginx/nginx.conf \\
                            nginx:latest
                    """
                }
            }
        }

        // Stage: Deploy to non-production environments (dev/stage)
        stage('Deploy (Non-Prod)') {
            when {
                expression { return params.DEPLOY_ENV != "prod" }
            }
            steps {
                script {
                    echo "Deploying to ${params.DEPLOY_ENV} environment..."
                    sh """
                        docker rm -f portfolio || true
                        docker run -d --name portfolio -p ${params.DOCKER_PORT}:80 $REGISTRY/$IMAGE_NAME:latest || exit 1
                    """
                }
            }
        }

        // Stage: Cleanup unused Docker images
        stage('Cleanup Old Images') {
            steps {
                script {
                    echo "Cleaning up unused Docker images..."
                    sh "docker image prune -af || true"
                }
            }
        }

        // Stage: Clean Jenkins workspace
        stage('Workspace Cleanup') {
            steps {
                cleanWs()
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: '**/logs/*.log', allowEmptyArchive: true  // Archive logs even if empty
        }
        success {
            echo "✅ Deployment successful! Portfolio is live in ${params.DEPLOY_ENV}."
            slackSend(channel: '#devops', message: "✅ Success: ${env.JOB_NAME} #${env.BUILD_NUMBER} deployed to ${params.DEPLOY_ENV}")
        }
        failure {
            echo "❌ Build/Deploy failed!"
            slackSend(channel: '#devops', message: "❌ Failed: ${env.JOB_NAME} #${env.BUILD_NUMBER}")
        }
    }
}
