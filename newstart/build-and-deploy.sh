#!/bin/bash

# CONFIGURATION
IMAGE_NAME="your-dockerhub-username/your-image-name"
TAG="latest"
FULL_IMAGE_NAME="$IMAGE_NAME:$TAG"

# Step 1: Build Docker image
echo "🔨 Building Docker image..."
docker build -t $FULL_IMAGE_NAME .

# Step 2: Scan the image (requires Docker Scout or Docker CLI with scan plugin)
echo "Scanning Docker image for vulnerabilities..."
docker scan $FULL_IMAGE_NAME

# Step 3: Push to Docker Hub
echo "Pushing image to Docker Hub..."
docker push $FULL_IMAGE_NAME

# Step 4: Pull the image back from Docker Hub
echo "Pulling image from Docker Hub..."
docker pull $FULL_IMAGE_NAME

# Step 5: Run the Docker image
echo "Running Docker image..."
docker run --rm $FULL_IMAGE_NAME
