```
devops:dopadm:~/DOCKER/flaskApp_PostgresSQL$docker-compose up --build -d
Creating network "flaskapp_postgressql_default" with the default driver
Pulling db (postgres:13)...
13: Pulling from library/postgres
6e909acdb790: Pull complete
4ed08e86cc07: Pull complete
dc7dde13ef24: Pull complete
fc50e9452d2f: Pull complete
f3d6bcf10a1a: Pull complete
58393b22fe91: Pull complete
91b896875e50: Pull complete
54beca1bfb3c: Pull complete
26e6aa9f5562: Pull complete
bf3ef462cb81: Pull complete
7608fa93f22a: Pull complete
cfe32c69aa6d: Pull complete
35adbf97abaf: Pull complete
193e2301edc6: Pull complete
Digest: sha256:95b9e8830fffcb9b28673b2c6d66b6972f34baea2bdfbaf92d2087dac3ea8f62
Status: Downloaded newer image for postgres:13
Building web
[+] Building 21.4s (9/9) FINISHED                                                                                                                                                                docker:default
 => [internal] load build definition from Dockerfile                                                                                                                                                       0.0s
 => => transferring dockerfile: 187B                                                                                                                                                                       0.0s
 => [internal] load metadata for docker.io/library/python:3.9-slim-buster                                                                                                                                  2.8s
 => [internal] load .dockerignore                                                                                                                                                                          0.0s
 => => transferring context: 2B                                                                                                                                                                            0.0s
 => [1/4] FROM docker.io/library/python:3.9-slim-buster@sha256:320a7a4250aba4249f458872adecf92eea88dc6abd2d76dc5c0f01cac9b53990                                                                           11.3s
 => => resolve docker.io/library/python:3.9-slim-buster@sha256:320a7a4250aba4249f458872adecf92eea88dc6abd2d76dc5c0f01cac9b53990                                                                            0.0s
 => => sha256:8b91b88d557765cd8c6802668755a3f6dc4337b6ce15a17e4857139e5fc964f3 27.14MB / 27.14MB                                                                                                           8.9s
 => => sha256:824416e234237961c9c5d4f41dfe5b295a3c35a671ee52889bfb08d8e257ec4c 2.78MB / 2.78MB                                                                                                             2.8s
 => => sha256:8d53da26040835f622504d7762fad14d226ac414efeb5363f5febebc89ff224d 11.04MB / 11.04MB                                                                                                           7.1s
 => => sha256:320a7a4250aba4249f458872adecf92eea88dc6abd2d76dc5c0f01cac9b53990 988B / 988B                                                                                                                 0.0s
 => => sha256:d5cca64dca485c37ccf06721e36a93bf4331b0404bfd3ef2c7873867965359b7 1.37kB / 1.37kB                                                                                                             0.0s
 => => sha256:c84dbfe3b8deeb39e17d121220107f8354a9083b468a320a77708cd128f11c87 6.82kB / 6.82kB                                                                                                             0.0s
 => => sha256:84c8c79126f669beec1dcf6f34cd88094471745570c19c29b465dfa7db1fdabd 243B / 243B                                                                                                                 3.4s
 => => sha256:2e1c130fa3ec1777a82123374b4c500623959f903c1dd731ee4a83e1f1b38ff2 3.14MB / 3.14MB                                                                                                             6.1s
 => => extracting sha256:8b91b88d557765cd8c6802668755a3f6dc4337b6ce15a17e4857139e5fc964f3                                                                                                                  1.3s
 => => extracting sha256:824416e234237961c9c5d4f41dfe5b295a3c35a671ee52889bfb08d8e257ec4c                                                                                                                  0.1s
 => => extracting sha256:8d53da26040835f622504d7762fad14d226ac414efeb5363f5febebc89ff224d                                                                                                                  0.4s
 => => extracting sha256:84c8c79126f669beec1dcf6f34cd88094471745570c19c29b465dfa7db1fdabd                                                                                                                  0.0s
 => => extracting sha256:2e1c130fa3ec1777a82123374b4c500623959f903c1dd731ee4a83e1f1b38ff2                                                                                                                  0.2s
 => [internal] load build context                                                                                                                                                                          0.0s
 => => transferring context: 2.99kB                                                                                                                                                                        0.0s
 => [2/4] WORKDIR /app                                                                                                                                                                                     1.6s
 => [3/4] COPY . /app                                                                                                                                                                                      0.0s
 => [4/4] RUN pip install --no-cache-dir -r requirements.txt                                                                                                                                               5.4s
 => exporting to image                                                                                                                                                                                     0.1s
 => => exporting layers                                                                                                                                                                                    0.1s
 => => writing image sha256:a82a259280b27ea2c78b7939445380a2dd068fb2b21ea68533835429876143aa                                                                                                               0.0s
 => => naming to docker.io/library/flaskapp_postgressql_web                                                                                                                                                0.0s
Creating flaskapp_postgressql_db_1 ... done
Creating flaskapp_postgressql_web_1 ... done
devops:dopadm:~/DOCKER/flaskApp_PostgresSQL$docker ps
CONTAINER ID   IMAGE                      COMMAND                  CREATED          STATUS          PORTS                                         NAMES
d3006d671f1e   flaskapp_postgressql_web   "python app.py"          25 seconds ago   Up 24 seconds   0.0.0.0:5000->5000/tcp, [::]:5000->5000/tcp   flaskapp_postgressql_web_1
4e9d622972f8   postgres:13                "docker-entrypoint.s…"   25 seconds ago   Up 24 seconds   5432/tcp                                      flaskapp_postgressql_db_1
devops:dopadm:~/DOCKER/flaskApp_PostgresSQL$docker exec -it flaskapp_postgressql_db_1 psql -U flask_user -d flask_db
psql (13.20 (Debian 13.20-1.pgdg120+1))
Type "help" for help.

flask_db=# select version();

```



```
devops:dopadm:~/DOCKER/flaskApp_PostgresSQL$ls
Dockerfile  NOTE.md  app.py  docker-compose.yaml  docker-flask-postgres.yaml  docker-network.yaml  requirements.txt
devops:dopadm:~/DOCKER/flaskApp_PostgresSQL$docker-compose -f docker-network.yaml up --build -d
Creating network "flaskapp_postgressql_my-custom-network" with driver "bridge"
Pulling db (postgres:13)...
13: Pulling from library/postgres
6e909acdb790: Pull complete
4ed08e86cc07: Pull complete
dc7dde13ef24: Pull complete
fc50e9452d2f: Pull complete
f3d6bcf10a1a: Pull complete
58393b22fe91: Pull complete
91b896875e50: Pull complete
54beca1bfb3c: Pull complete
26e6aa9f5562: Pull complete
bf3ef462cb81: Pull complete
7608fa93f22a: Pull complete
cfe32c69aa6d: Pull complete
35adbf97abaf: Pull complete
193e2301edc6: Pull complete
Digest: sha256:95b9e8830fffcb9b28673b2c6d66b6972f34baea2bdfbaf92d2087dac3ea8f62
Status: Downloaded newer image for postgres:13
Building web
[+] Building 45.1s (9/9) FINISHED                                                                                                                                                                docker:default
 => [internal] load build definition from Dockerfile                                                                                                                                                       0.0s
 => => transferring dockerfile: 187B                                                                                                                                                                       0.0s
 => [internal] load metadata for docker.io/library/python:3.9-slim-buster                                                                                                                                  4.0s
 => [internal] load .dockerignore                                                                                                                                                                          0.0s
 => => transferring context: 2B                                                                                                                                                                            0.0s
 => [1/4] FROM docker.io/library/python:3.9-slim-buster@sha256:320a7a4250aba4249f458872adecf92eea88dc6abd2d76dc5c0f01cac9b53990                                                                           26.2s
 => => resolve docker.io/library/python:3.9-slim-buster@sha256:320a7a4250aba4249f458872adecf92eea88dc6abd2d76dc5c0f01cac9b53990                                                                            0.0s
 => => sha256:8b91b88d557765cd8c6802668755a3f6dc4337b6ce15a17e4857139e5fc964f3 27.14MB / 27.14MB                                                                                                          23.4s
 => => sha256:824416e234237961c9c5d4f41dfe5b295a3c35a671ee52889bfb08d8e257ec4c 2.78MB / 2.78MB                                                                                                             6.7s
 => => sha256:8d53da26040835f622504d7762fad14d226ac414efeb5363f5febebc89ff224d 11.04MB / 11.04MB                                                                                                           9.7s
 => => sha256:320a7a4250aba4249f458872adecf92eea88dc6abd2d76dc5c0f01cac9b53990 988B / 988B                                                                                                                 0.0s
 => => sha256:d5cca64dca485c37ccf06721e36a93bf4331b0404bfd3ef2c7873867965359b7 1.37kB / 1.37kB                                                                                                             0.0s
 => => sha256:c84dbfe3b8deeb39e17d121220107f8354a9083b468a320a77708cd128f11c87 6.82kB / 6.82kB                                                                                                             0.0s
 => => sha256:84c8c79126f669beec1dcf6f34cd88094471745570c19c29b465dfa7db1fdabd 243B / 243B                                                                                                                 7.6s
 => => sha256:2e1c130fa3ec1777a82123374b4c500623959f903c1dd731ee4a83e1f1b38ff2 3.14MB / 3.14MB                                                                                                            14.3s
 => => extracting sha256:8b91b88d557765cd8c6802668755a3f6dc4337b6ce15a17e4857139e5fc964f3                                                                                                                  1.5s
 => => extracting sha256:824416e234237961c9c5d4f41dfe5b295a3c35a671ee52889bfb08d8e257ec4c                                                                                                                  0.2s
 => => extracting sha256:8d53da26040835f622504d7762fad14d226ac414efeb5363f5febebc89ff224d                                                                                                                  0.5s
 => => extracting sha256:84c8c79126f669beec1dcf6f34cd88094471745570c19c29b465dfa7db1fdabd                                                                                                                  0.0s
 => => extracting sha256:2e1c130fa3ec1777a82123374b4c500623959f903c1dd731ee4a83e1f1b38ff2                                                                                                                  0.3s
 => [internal] load build context                                                                                                                                                                          0.0s
 => => transferring context: 12.21kB                                                                                                                                                                       0.0s
 => [2/4] WORKDIR /app                                                                                                                                                                                     1.3s
 => [3/4] COPY . /app                                                                                                                                                                                      0.0s
 => [4/4] RUN pip install --no-cache-dir -r requirements.txt                                                                                                                                              13.3s
 => exporting to image                                                                                                                                                                                     0.1s
 => => exporting layers                                                                                                                                                                                    0.1s
 => => writing image sha256:3306e351dd52594ce57fb152ee0c3f8e058f9ef9e635e90fc9ece25296479fc2                                                                                                               0.0s
 => => naming to docker.io/library/flaskapp_postgressql_web                                                                                                                                                0.0s
Creating flaskapp_postgressql_db_1 ... done
Creating flaskapp_postgressql_web_1 ... done
devops:dopadm:~/DOCKER/flaskApp_PostgresSQL$docker ps
CONTAINER ID   IMAGE                      COMMAND                  CREATED         STATUS         PORTS                                         NAMES
45a0a1eedf07   flaskapp_postgressql_web   "python app.py"          3 minutes ago   Up 3 minutes   0.0.0.0:5000->5000/tcp, [::]:5000->5000/tcp   flaskapp_postgressql_web_1
26e1f877502b   postgres:13                "docker-entrypoint.s…"   3 minutes ago   Up 3 minutes   5432/tcp                                      flaskapp_postgressql_db_1
devops:dopadm:~/DOCKER/flaskApp_PostgresSQL$docker volume list
DRIVER    VOLUME NAME
local     4a5cab1adc43c0e9029303dbc4a13944610d1fff0ea06ace34eb794480df5b56
local     7dcca2ba0610fe4130ac9ed7657c6563d3f331687e4bccb70185f6a0e5cc42b3
local     7fc9b92234bad5527c2b6df086fb970a33f4b66fb36f4f0785c461cd9414e612
local     flaskapp_postgressql_postgres_data
devops:dopadm:~/DOCKER/flaskApp_PostgresSQL$
devops:dopadm:~/DOCKER/flaskApp_PostgresSQL$
devops:dopadm:~/DOCKER/flaskApp_PostgresSQL$
devops:dopadm:~/DOCKER/flaskApp_PostgresSQL$sudo bash
root@DESKTOP-KM01E29:/home/dopadm/DOCKER/flaskApp_PostgresSQL# ls
Dockerfile  NOTE.md  app.py  docker-compose.yaml  docker-flask-postgres.yaml  docker-network.yaml  requirements.txt
root@DESKTOP-KM01E29:/home/dopadm/DOCKER/flaskApp_PostgresSQL# cd /var/snap/docker/common/var-lib-docker/volumes/flaskapp_postgressql_postgres_data/_data
root@DESKTOP-KM01E29:/var/snap/docker/common/var-lib-docker/volumes/flaskapp_postgressql_postgres_data/_data#
root@DESKTOP-KM01E29:/var/snap/docker/common/var-lib-docker/volumes/flaskapp_postgressql_postgres_data/_data#
root@DESKTOP-KM01E29:/var/snap/docker/common/var-lib-docker/volumes/flaskapp_postgressql_postgres_data/_data#
root@DESKTOP-KM01E29:/var/snap/docker/common/var-lib-docker/volumes/flaskapp_postgressql_postgres_data/_data#
root@DESKTOP-KM01E29:/var/snap/docker/common/var-lib-docker/volumes/flaskapp_postgressql_postgres_data/_data# ll
total 132
drwx------ 19  999 systemd-journal  4096 Mar 29 18:18 ./
drwx-----x  3 root root             4096 Mar 29 18:07 ../
-rw-------  1  999 systemd-journal     3 Mar 29 18:08 PG_VERSION
drwx------  6  999 systemd-journal  4096 Mar 29 18:08 base/
drwx------  2  999 systemd-journal  4096 Mar 29 18:18 global/
drwx------  2  999 systemd-journal  4096 Mar 29 18:08 pg_commit_ts/
drwx------  2  999 systemd-journal  4096 Mar 29 18:08 pg_dynshmem/
-rw-------  1  999 systemd-journal  4782 Mar 29 18:08 pg_hba.conf
-rw-------  1  999 systemd-journal  1636 Mar 29 18:08 pg_ident.conf
drwx------  4  999 systemd-journal  4096 Mar 29 18:18 pg_logical/
drwx------  4  999 systemd-journal  4096 Mar 29 18:08 pg_multixact/
drwx------  2  999 systemd-journal  4096 Mar 29 18:08 pg_notify/
drwx------  2  999 systemd-journal  4096 Mar 29 18:08 pg_replslot/
drwx------  2  999 systemd-journal  4096 Mar 29 18:08 pg_serial/
drwx------  2  999 systemd-journal  4096 Mar 29 18:08 pg_snapshots/
drwx------  2  999 systemd-journal  4096 Mar 29 18:08 pg_stat/
drwx------  2  999 systemd-journal  4096 Mar 29 18:24 pg_stat_tmp/
drwx------  2  999 systemd-journal  4096 Mar 29 18:08 pg_subtrans/
drwx------  2  999 systemd-journal  4096 Mar 29 18:08 pg_tblspc/
drwx------  2  999 systemd-journal  4096 Mar 29 18:08 pg_twophase/
drwx------  3  999 systemd-journal  4096 Mar 29 18:08 pg_wal/
drwx------  2  999 systemd-journal  4096 Mar 29 18:08 pg_xact/
-rw-------  1  999 systemd-journal    88 Mar 29 18:08 postgresql.auto.conf
-rw-------  1  999 systemd-journal 28148 Mar 29 18:08 postgresql.conf
-rw-------  1  999 systemd-journal    36 Mar 29 18:18 postmaster.opts
-rw-------  1  999 systemd-journal    94 Mar 29 18:18 postmaster.pid
root@DESKTOP-KM01E29:/var/snap/docker/common/var-lib-docker/volumes/flaskapp_postgressql_postgres_data/_data# sudo -i
Welcome to Ubuntu 24.04.1 LTS (GNU/Linux 5.15.167.4-microsoft-standard-WSL2 x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/pro

 System information as of Sat Mar 29 18:25:17 IST 2025

  System load:  0.02                Processes:             95
  Usage of /:   2.7% of 1006.85GB   Users logged in:       2
  Memory usage: 42%                 IPv4 address for eth0: 172.17.217.73
  Swap usage:   0%

 * Strictly confined Kubernetes makes edge and IoT secure. Learn how MicroK8s
   just raised the bar for easy, resilient and secure K8s cluster deployment.

   https://ubuntu.com/engage/secure-kubernetes-at-the-edge

This message is shown once a day. To disable it please create the
/root/.hushlogin file.
root@DESKTOP-KM01E29:~# exit
logout
root@DESKTOP-KM01E29:/var/snap/docker/common/var-lib-docker/volumes/flaskapp_postgressql_postgres_data/_data# exit
exit
devops:dopadm:~/DOCKER/flaskApp_PostgresSQL$docker network list
NETWORK ID     NAME                                     DRIVER    SCOPE
312ae1f6cbcc   bridge                                   bridge    local
db3098de14e5   flaskapp_postgressql_my-custom-network   bridge    local
47b70be736c7   host                                     host      local
932f3cb4fda6   none                                     null      local
devops:dopadm:~/DOCKER/flaskApp_PostgresSQL$docker network inspect flaskapp_postgressql_my-custom-network
[
    {
        "Name": "flaskapp_postgressql_my-custom-network",
        "Id": "db3098de14e5bd2e39c8aa77d4ef517b54b47c7a68a4e456a53593e0fca45e20",
        "Created": "2025-03-29T18:16:14.394753946+05:30",
        "Scope": "local",
        "Driver": "bridge",
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": null,
            "Config": [
                {
                    "Subnet": "172.18.0.0/16",
                    "Gateway": "172.18.0.1"
                }
            ]
        },
        "Internal": false,
        "Attachable": true,
        "Ingress": false,
        "ConfigFrom": {
            "Network": ""
        },
        "ConfigOnly": false,
        "Containers": {
            "26e1f877502b1725efe68135fde36df50076b67721968fc09f7bd0e87e22ad6e": {
                "Name": "flaskapp_postgressql_db_1",
                "EndpointID": "eabd0669bb018d15d9fa0f953028e8be45da9ef6c653b52c9ce14baffcbedee3",
                "MacAddress": "02:42:ac:12:00:02",
                "IPv4Address": "172.18.0.2/16",
                "IPv6Address": ""
            },
            "45a0a1eedf079afa8122bb75402e38cd7bb5d6e7f0dbb4597111254dc5f03fcb": {
                "Name": "flaskapp_postgressql_web_1",
                "EndpointID": "f15966b08f0c04356457b7c437bded2dc7328ec6a79ad013166aacf78f9d1c46",
                "MacAddress": "02:42:ac:12:00:03",
                "IPv4Address": "172.18.0.3/16",
                "IPv6Address": ""
            }
        },
        "Options": {},
        "Labels": {
            "com.docker.compose.network": "my-custom-network",
            "com.docker.compose.project": "flaskapp_postgressql",
            "com.docker.compose.version": "1.29.2"
        }
    }
]
devops:dopadm:~/DOCKER/flaskApp_PostgresSQL$

```






















flask_db=# select version();
                                                        version
-----------------------------------------------------------------------------------------------------------------------
 PostgreSQL 13.20 (Debian 13.20-1.pgdg120+1) on x86_64-pc-linux-gnu, compiled by gcc (Debian 12.2.0-14) 12.2.0, 64-bit
(1 row)

flask_db=# exit
devops:dopadm:~/DOCKER/flaskApp_PostgresSQL$docker-compose down
Stopping flaskapp_postgressql_web_1 ... done
Stopping flaskapp_postgressql_db_1  ... done
Removing flaskapp_postgressql_web_1 ... done
Removing flaskapp_postgressql_db_1  ... done
Removing network flaskapp_postgressql_default
devops:dopadm:~/DOCKER/flaskApp_PostgresSQL$
```




# DOCKER NETWORK 

```
devops:dopadm:~/DOCKER/flaskApp_PostgresSQL$docker-compose -f docker-network.yaml up --build -d
Creating network "flaskapp_postgressql_my-custom-network" with driver "bridge"
Pulling db (postgres:13)...
13: Pulling from library/postgres
6e909acdb790: Pull complete
4ed08e86cc07: Pull complete
dc7dde13ef24: Pull complete
fc50e9452d2f: Pull complete
f3d6bcf10a1a: Pull complete
58393b22fe91: Pull complete
91b896875e50: Pull complete
54beca1bfb3c: Pull complete
26e6aa9f5562: Pull complete
bf3ef462cb81: Pull complete
7608fa93f22a: Pull complete
cfe32c69aa6d: Pull complete
35adbf97abaf: Pull complete
193e2301edc6: Pull complete
Digest: sha256:95b9e8830fffcb9b28673b2c6d66b6972f34baea2bdfbaf92d2087dac3ea8f62
Status: Downloaded newer image for postgres:13
Building web
[+] Building 62.6s (11/11) FINISHED                                                                                                                        docker:default
 => [internal] load build definition from Dockerfile                                                                                                                 0.0s
 => => transferring dockerfile: 288B                                                                                                                                 0.0s
 => [internal] load metadata for docker.io/library/python:3.9-slim-buster                                                                                            4.6s
 => [internal] load .dockerignore                                                                                                                                    0.1s
 => => transferring context: 2B                                                                                                                                      0.0s
 => [internal] load build context                                                                                                                                    0.1s
 => => transferring context: 26.69kB                                                                                                                                 0.0s
 => [1/6] FROM docker.io/library/python:3.9-slim-buster@sha256:320a7a4250aba4249f458872adecf92eea88dc6abd2d76dc5c0f01cac9b53990                                     32.5s
 => => resolve docker.io/library/python:3.9-slim-buster@sha256:320a7a4250aba4249f458872adecf92eea88dc6abd2d76dc5c0f01cac9b53990                                      0.0s
 => => sha256:8d53da26040835f622504d7762fad14d226ac414efeb5363f5febebc89ff224d 11.04MB / 11.04MB                                                                    19.0s
 => => sha256:320a7a4250aba4249f458872adecf92eea88dc6abd2d76dc5c0f01cac9b53990 988B / 988B                                                                           0.0s
 => => sha256:d5cca64dca485c37ccf06721e36a93bf4331b0404bfd3ef2c7873867965359b7 1.37kB / 1.37kB                                                                       0.0s
 => => sha256:c84dbfe3b8deeb39e17d121220107f8354a9083b468a320a77708cd128f11c87 6.82kB / 6.82kB                                                                       0.0s
 => => sha256:8b91b88d557765cd8c6802668755a3f6dc4337b6ce15a17e4857139e5fc964f3 27.14MB / 27.14MB                                                                    28.5s
 => => sha256:824416e234237961c9c5d4f41dfe5b295a3c35a671ee52889bfb08d8e257ec4c 2.78MB / 2.78MB                                                                      11.0s
 => => sha256:84c8c79126f669beec1dcf6f34cd88094471745570c19c29b465dfa7db1fdabd 243B / 243B                                                                          11.9s
 => => sha256:2e1c130fa3ec1777a82123374b4c500623959f903c1dd731ee4a83e1f1b38ff2 3.14MB / 3.14MB                                                                      18.0s
 => => extracting sha256:8b91b88d557765cd8c6802668755a3f6dc4337b6ce15a17e4857139e5fc964f3                                                                            2.1s
 => => extracting sha256:824416e234237961c9c5d4f41dfe5b295a3c35a671ee52889bfb08d8e257ec4c                                                                            0.2s
 => => extracting sha256:8d53da26040835f622504d7762fad14d226ac414efeb5363f5febebc89ff224d                                                                            0.8s
 => => extracting sha256:84c8c79126f669beec1dcf6f34cd88094471745570c19c29b465dfa7db1fdabd                                                                            0.0s
 => => extracting sha256:2e1c130fa3ec1777a82123374b4c500623959f903c1dd731ee4a83e1f1b38ff2                                                                            0.5s
 => [2/6] WORKDIR /app                                                                                                                                               0.3s
 => [3/6] COPY requirements.txt /app/requirements.txt                                                                                                                0.0s
 => [4/6] RUN pip install --no-cache-dir -r requirements.txt                                                                                                        11.2s
 => [5/6] RUN apt-get update && apt-get install -y curl iputils-ping                                                                                                13.4s
 => [6/6] COPY . /app                                                                                                                                                0.1s
 => exporting to image                                                                                                                                               0.2s
 => => exporting layers                                                                                                                                              0.2s
 => => writing image sha256:06b6df639fe125fb35975ecd61dab889b5f57989ea2275600bd831a5f07661f3                                                                         0.0s
 => => naming to docker.io/library/flaskapp_postgressql_web                                                                                                          0.0s
Creating flaskapp_postgressql_db_1 ... done
Creating flaskapp_postgressql_web_1 ... done
devops:dopadm:~/DOCKER/flaskApp_PostgresSQL$docker ps
CONTAINER ID   IMAGE                      COMMAND                  CREATED          STATUS          PORTS                                         NAMES
a72667d500f0   flaskapp_postgressql_web   "python app.py"          12 minutes ago   Up 11 minutes   0.0.0.0:5000->5000/tcp, [::]:5000->5000/tcp   flaskapp_postgressql_web_1
f03b96e722c9   postgres:13                "docker-entrypoint.s…"   12 minutes ago   Up 12 minutes   5432/tcp                                      flaskapp_postgressql_db_1
devops:dopadm:~/DOCKER/flaskApp_PostgresSQL$docker network list
NETWORK ID     NAME                                     DRIVER    SCOPE
312ae1f6cbcc   bridge                                   bridge    local
315698c122aa   flaskapp_postgressql_my-custom-network   bridge    local
47b70be736c7   host                                     host      local
932f3cb4fda6   none                                     null      local
devops:dopadm:~/DOCKER/flaskApp_PostgresSQL$docker network inspect flaskapp_postgressql_my-custom-network
[
    {
        "Name": "flaskapp_postgressql_my-custom-network",
        "Id": "315698c122aafd787fefe85b331276394be8b1297372e8c2dd775ee2476c99a2",
        "Created": "2025-03-29T18:41:27.351988218+05:30",
        "Scope": "local",
        "Driver": "bridge",
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": null,
            "Config": [
                {
                    "Subnet": "172.18.0.0/16",
                    "Gateway": "172.18.0.1"
                }
            ]
        },
        "Internal": false,
        "Attachable": true,
        "Ingress": false,
        "ConfigFrom": {
            "Network": ""
        },
        "ConfigOnly": false,
        "Containers": {
            "a72667d500f05be8fe8b479480b6953d144f6c60162c598e9ad3d20d4d826f8a": {
                "Name": "flaskapp_postgressql_web_1",
                "EndpointID": "dc261f97a4c626dc02b7ea02e71ccc0634b3f37e3a6e1177f6e4093596da6d16",
                "MacAddress": "02:42:ac:12:00:03",
                "IPv4Address": "172.18.0.3/16",
                "IPv6Address": ""
            },
            "f03b96e722c928d4bce6bcaafea785f3472e0b5a72beaba4c987f7e9d9f23c33": {
                "Name": "flaskapp_postgressql_db_1",
                "EndpointID": "eda33b531971166e446c2fec7837e6291413d3e9fc47c0918178af20fab97bbf",
                "MacAddress": "02:42:ac:12:00:02",
                "IPv4Address": "172.18.0.2/16",
                "IPv6Address": ""
            }
        },
        "Options": {},
        "Labels": {
            "com.docker.compose.network": "my-custom-network",
            "com.docker.compose.project": "flaskapp_postgressql",
            "com.docker.compose.version": "1.29.2"
        }
    }
]
devops:dopadm:~/DOCKER/flaskApp_PostgresSQL$docker exec -it flaskapp_postgressql_web_1 curl db:5432
curl: (52) Empty reply from server
devops:dopadm:~/DOCKER/flaskApp_PostgresSQL$docker exec -it flaskapp_postgressql_web_1 ping db
PING db (172.18.0.2) 56(84) bytes of data.
64 bytes from flaskapp_postgressql_db_1.flaskapp_postgressql_my-custom-network (172.18.0.2): icmp_seq=1 ttl=64 time=0.360 ms
64 bytes from flaskapp_postgressql_db_1.flaskapp_postgressql_my-custom-network (172.18.0.2): icmp_seq=2 ttl=64 time=0.098 ms
64 bytes from flaskapp_postgressql_db_1.flaskapp_postgressql_my-custom-network (172.18.0.2): icmp_seq=3 ttl=64 time=0.108 ms
64 bytes from flaskapp_postgressql_db_1.flaskapp_postgressql_my-custom-network (172.18.0.2): icmp_seq=4 ttl=64 time=0.117 ms
64 bytes from flaskapp_postgressql_db_1.flaskapp_postgressql_my-custom-network (172.18.0.2): icmp_seq=5 ttl=64 time=0.143 ms
64 bytes from flaskapp_postgressql_db_1.flaskapp_postgressql_my-custom-network (172.18.0.2): icmp_seq=6 ttl=64 time=0.123 ms
64 bytes from flaskapp_postgressql_db_1.flaskapp_postgressql_my-custom-network (172.18.0.2): icmp_seq=7 ttl=64 time=0.167 ms
64 bytes from flaskapp_postgressql_db_1.flaskapp_postgressql_my-custom-network (172.18.0.2): icmp_seq=8 ttl=64 time=0.092 ms
64 bytes from flaskapp_postgressql_db_1.flaskapp_postgressql_my-custom-network (172.18.0.2): icmp_seq=9 ttl=64 time=0.111 ms
64 bytes from flaskapp_postgressql_db_1.flaskapp_postgressql_my-custom-network (172.18.0.2): icmp_seq=10 ttl=64 time=0.109 ms
^C
--- db ping statistics ---
10 packets transmitted, 10 received, 0% packet loss, time 313ms
rtt min/avg/max/mdev = 0.092/0.142/0.360/0.076 ms
devops:dopadm:~/DOCKER/flaskApp_PostgresSQL$docker inspect f03b96e722c9
[
    {
        "Id": "f03b96e722c928d4bce6bcaafea785f3472e0b5a72beaba4c987f7e9d9f23c33",
        "Created": "2025-03-29T13:13:47.974320688Z",
        "Path": "docker-entrypoint.sh",
        "Args": [
            "postgres"
        ],
        "State": {
            "Status": "running",
            "Running": true,
            "Paused": false,
            "Restarting": false,
            "OOMKilled": false,
            "Dead": false,
            "Pid": 29652,
            "ExitCode": 0,
            "Error": "",
            "StartedAt": "2025-03-29T13:13:48.113013835Z",
            "FinishedAt": "0001-01-01T00:00:00Z"
        },
        "Image": "sha256:ebcc4a15b2ebee387ace0b310b6e14b23705171700efc61d21300f9081437190",
        "ResolvConfPath": "/var/snap/docker/common/var-lib-docker/containers/f03b96e722c928d4bce6bcaafea785f3472e0b5a72beaba4c987f7e9d9f23c33/resolv.conf",
        "HostnamePath": "/var/snap/docker/common/var-lib-docker/containers/f03b96e722c928d4bce6bcaafea785f3472e0b5a72beaba4c987f7e9d9f23c33/hostname",
        "HostsPath": "/var/snap/docker/common/var-lib-docker/containers/f03b96e722c928d4bce6bcaafea785f3472e0b5a72beaba4c987f7e9d9f23c33/hosts",
        "LogPath": "/var/snap/docker/common/var-lib-docker/containers/f03b96e722c928d4bce6bcaafea785f3472e0b5a72beaba4c987f7e9d9f23c33/f03b96e722c928d4bce6bcaafea785f3472e0b5a72beaba4c987f7e9d9f23c33-json.log",
        "Name": "/flaskapp_postgressql_db_1",
        "RestartCount": 0,
        "Driver": "overlay2",
        "Platform": "linux",
        "MountLabel": "",
        "ProcessLabel": "",
        "AppArmorProfile": "",
        "ExecIDs": null,
        "HostConfig": {
            "Binds": [
                "flaskapp_postgressql_postgres_data:/var/lib/postgresql/data:rw"
            ],
            "ContainerIDFile": "",
            "LogConfig": {
                "Type": "json-file",
                "Config": {}
            },
            "NetworkMode": "flaskapp_postgressql_my-custom-network",
            "PortBindings": {},
            "RestartPolicy": {
                "Name": "no",
                "MaximumRetryCount": 0
            },
            "AutoRemove": false,
            "VolumeDriver": "",
            "VolumesFrom": [],
            "ConsoleSize": [
                0,
                0
            ],
            "CapAdd": null,
            "CapDrop": null,
            "CgroupnsMode": "host",
            "Dns": null,
            "DnsOptions": null,
            "DnsSearch": null,
            "ExtraHosts": null,
            "GroupAdd": null,
            "IpcMode": "private",
            "Cgroup": "",
            "Links": null,
            "OomScoreAdj": 0,
            "PidMode": "",
            "Privileged": false,
            "PublishAllPorts": false,
            "ReadonlyRootfs": false,
            "SecurityOpt": null,
            "UTSMode": "",
            "UsernsMode": "",
            "ShmSize": 67108864,
            "Runtime": "runc",
            "Isolation": "",
            "CpuShares": 0,
            "Memory": 0,
            "NanoCpus": 0,
            "CgroupParent": "",
            "BlkioWeight": 0,
            "BlkioWeightDevice": null,
            "BlkioDeviceReadBps": null,
            "BlkioDeviceWriteBps": null,
            "BlkioDeviceReadIOps": null,
            "BlkioDeviceWriteIOps": null,
            "CpuPeriod": 0,
            "CpuQuota": 0,
            "CpuRealtimePeriod": 0,
            "CpuRealtimeRuntime": 0,
            "CpusetCpus": "",
            "CpusetMems": "",
            "Devices": null,
            "DeviceCgroupRules": null,
            "DeviceRequests": null,
            "MemoryReservation": 0,
            "MemorySwap": 0,
            "MemorySwappiness": null,
            "OomKillDisable": false,
            "PidsLimit": null,
            "Ulimits": null,
            "CpuCount": 0,
            "CpuPercent": 0,
            "IOMaximumIOps": 0,
            "IOMaximumBandwidth": 0,
            "MaskedPaths": [
                "/proc/asound",
                "/proc/acpi",
                "/proc/kcore",
                "/proc/keys",
                "/proc/latency_stats",
                "/proc/timer_list",
                "/proc/timer_stats",
                "/proc/sched_debug",
                "/proc/scsi",
                "/sys/firmware",
                "/sys/devices/virtual/powercap"
            ],
            "ReadonlyPaths": [
                "/proc/bus",
                "/proc/fs",
                "/proc/irq",
                "/proc/sys",
                "/proc/sysrq-trigger"
            ]
        },
        "GraphDriver": {
            "Data": {
                "LowerDir": "/var/snap/docker/common/var-lib-docker/overlay2/ed8e0e7fa4ca08f21a669d8d2c4cc06cd80765fd451be2c1371467a62565002f-init/diff:/var/snap/docker/common/var-lib-docker/overlay2/5c5bdcf29f63fc2f9d61a8638f1d7be50f955c4a8d6f84b1f59672f9bc35774d/diff:/var/snap/docker/common/var-lib-docker/overlay2/7bd974ff11a2b5410bb1765f392dcd33a2f407261dcf894df1f7e0b76bcac18a/diff:/var/snap/docker/common/var-lib-docker/overlay2/c08f6453279af72af666a7c64ccd7b80c1acbbd76f7754d71a47eac8853bee86/diff:/var/snap/docker/common/var-lib-docker/overlay2/df89068eba7b0fbeaeb5bed6f85161f70b4637f2be9a617de6239ab71189f8b1/diff:/var/snap/docker/common/var-lib-docker/overlay2/15e77347950810852ff5926e6d27ce978995d196350f26262e849a6dc3a79c4e/diff:/var/snap/docker/common/var-lib-docker/overlay2/8fec643834d95ada223fadebc34ab262636f4a98a5eb6cc508d2c2940f829156/diff:/var/snap/docker/common/var-lib-docker/overlay2/fd93077712d4461d5340d2b4ee834408a275bc2abf74467e3b16725e49700c1e/diff:/var/snap/docker/common/var-lib-docker/overlay2/b1f77a542e55135bc881c4e0a23ace73a7bd94e3ad085d3aa64ac8723f5afa96/diff:/var/snap/docker/common/var-lib-docker/overlay2/0de99fba71c8d49c43efbfe0987fde47ff29b71a57721e82e93444d6578cc79c/diff:/var/snap/docker/common/var-lib-docker/overlay2/2393d56cc16d7978b48aa9d9e4b65b6677c8e171228d1704d1246e703d23cdc0/diff:/var/snap/docker/common/var-lib-docker/overlay2/ad618540ae0567f39aedabb9cac1c37db3ce02424746556f0167e2fdc84ad091/diff:/var/snap/docker/common/var-lib-docker/overlay2/479aed21b2b8b2cf7cc6173d08fd592049cb920ae957a84c08808f1f1b4c3a7f/diff:/var/snap/docker/common/var-lib-docker/overlay2/ef0bc5e62845d525e52815c91d465022d45b1347e9cafbf42b1b08b092192678/diff:/var/snap/docker/common/var-lib-docker/overlay2/a6a1576b63a205899e549e4f1dd71f498143d0453dd0a5db60dec9d9416a58cf/diff",
                "MergedDir": "/var/snap/docker/common/var-lib-docker/overlay2/ed8e0e7fa4ca08f21a669d8d2c4cc06cd80765fd451be2c1371467a62565002f/merged",
                "UpperDir": "/var/snap/docker/common/var-lib-docker/overlay2/ed8e0e7fa4ca08f21a669d8d2c4cc06cd80765fd451be2c1371467a62565002f/diff",
                "WorkDir": "/var/snap/docker/common/var-lib-docker/overlay2/ed8e0e7fa4ca08f21a669d8d2c4cc06cd80765fd451be2c1371467a62565002f/work"
            },
            "Name": "overlay2"
        },
        "Mounts": [
            {
                "Type": "volume",
                "Name": "flaskapp_postgressql_postgres_data",
                "Source": "/var/snap/docker/common/var-lib-docker/volumes/flaskapp_postgressql_postgres_data/_data",
                "Destination": "/var/lib/postgresql/data",
                "Driver": "local",
                "Mode": "rw",
                "RW": true,
                "Propagation": ""
            }
        ],
        "Config": {
            "Hostname": "f03b96e722c9",
            "Domainname": "",
            "User": "",
            "AttachStdin": false,
            "AttachStdout": false,
            "AttachStderr": false,
            "ExposedPorts": {
                "5432/tcp": {}
            },
            "Tty": false,
            "OpenStdin": false,
            "StdinOnce": false,
            "Env": [
                "POSTGRES_USER=flask_user",
                "POSTGRES_PASSWORD=flask_password",
                "POSTGRES_DB=flask_db",
                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/lib/postgresql/13/bin",
                "GOSU_VERSION=1.17",
                "LANG=en_US.utf8",
                "PG_MAJOR=13",
                "PG_VERSION=13.20-1.pgdg120+1",
                "PGDATA=/var/lib/postgresql/data"
            ],
            "Cmd": [
                "postgres"
            ],
            "Image": "postgres:13",
            "Volumes": {
                "/var/lib/postgresql/data": {}
            },
            "WorkingDir": "",
            "Entrypoint": [
                "docker-entrypoint.sh"
            ],
            "OnBuild": null,
            "Labels": {
                "com.docker.compose.config-hash": "4c4c92ac0350dccad1cdd795ff35ad5c1095bb1d7962ffa05001b6465a906832",
                "com.docker.compose.container-number": "1",
                "com.docker.compose.oneoff": "False",
                "com.docker.compose.project": "flaskapp_postgressql",
                "com.docker.compose.project.config_files": "docker-network.yaml",
                "com.docker.compose.project.working_dir": "/home/dopadm/DOCKER/flaskApp_PostgresSQL",
                "com.docker.compose.service": "db",
                "com.docker.compose.version": "1.29.2"
            },
            "StopSignal": "SIGINT"
        },
        "NetworkSettings": {
            "Bridge": "",
            "SandboxID": "1baecc6f6fecbd5b04d80840c9444be94ba06930e328378715a7a6368f21c345",
            "SandboxKey": "/run/snap.docker/netns/1baecc6f6fec",
            "Ports": {
                "5432/tcp": null
            },
            "HairpinMode": false,
            "LinkLocalIPv6Address": "",
            "LinkLocalIPv6PrefixLen": 0,
            "SecondaryIPAddresses": null,
            "SecondaryIPv6Addresses": null,
            "EndpointID": "",
            "Gateway": "",
            "GlobalIPv6Address": "",
            "GlobalIPv6PrefixLen": 0,
            "IPAddress": "",
            "IPPrefixLen": 0,
            "IPv6Gateway": "",
            "MacAddress": "",
            "Networks": {
                "flaskapp_postgressql_my-custom-network": {
                    "IPAMConfig": null,
                    "Links": null,
                    "Aliases": [
                        "f03b96e722c9",
                        "db"
                    ],
                    "MacAddress": "02:42:ac:12:00:02",
                    "DriverOpts": null,
                    "NetworkID": "315698c122aafd787fefe85b331276394be8b1297372e8c2dd775ee2476c99a2",
                    "EndpointID": "eda33b531971166e446c2fec7837e6291413d3e9fc47c0918178af20fab97bbf",
                    "Gateway": "172.18.0.1",
                    "IPAddress": "172.18.0.2",
                    "IPPrefixLen": 16,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "DNSNames": [
                        "flaskapp_postgressql_db_1",
                        "f03b96e722c9",
                        "db"
                    ]
                }
            }
        }
    }
]
devops:dopadm:~/DOCKER/flaskApp_PostgresSQL$docker exec -it flaskapp_postgressql_web_1 ping 172.18.0.2
PING 172.18.0.2 (172.18.0.2) 56(84) bytes of data.
64 bytes from 172.18.0.2: icmp_seq=1 ttl=64 time=0.205 ms
64 bytes from 172.18.0.2: icmp_seq=2 ttl=64 time=0.101 ms
64 bytes from 172.18.0.2: icmp_seq=3 ttl=64 time=0.105 ms
64 bytes from 172.18.0.2: icmp_seq=4 ttl=64 time=0.147 ms
64 bytes from 172.18.0.2: icmp_seq=5 ttl=64 time=0.105 ms
64 bytes from 172.18.0.2: icmp_seq=6 ttl=64 time=0.106 ms
64 bytes from 172.18.0.2: icmp_seq=7 ttl=64 time=0.164 ms
64 bytes from 172.18.0.2: icmp_seq=8 ttl=64 time=0.108 ms
^C
--- 172.18.0.2 ping statistics ---
8 packets transmitted, 8 received, 0% packet loss, time 261ms
rtt min/avg/max/mdev = 0.101/0.130/0.205/0.036 ms
devops:dopadm:~/DOCKER/flaskApp_PostgresSQL$
```


Ping Tests:

The ping db and ping 172.18.0.2 tests from the flaskapp_postgressql_web_1 container are successful. This conclusively demonstrates that network connectivity between the containers is working correctly.



```
devops:dopadm:~/DOCKER/flaskApp_PostgresSQL$docker ps
CONTAINER ID   IMAGE                      COMMAND                  CREATED          STATUS          PORTS                                         NAMES
a72667d500f0   flaskapp_postgressql_web   "python app.py"          18 minutes ago   Up 18 minutes   0.0.0.0:5000->5000/tcp, [::]:5000->5000/tcp   flaskapp_postgressql_web_1
f03b96e722c9   postgres:13                "docker-entrypoint.s…"   18 minutes ago   Up 18 minutes   5432/tcp                                      flaskapp_postgressql_db_1
devops:dopadm:~/DOCKER/flaskApp_PostgresSQL$docker exec -it flaskapp_postgressql_web_1 ping flaskapp_postgressql_db_1
PING flaskapp_postgressql_db_1 (172.18.0.2) 56(84) bytes of data.
64 bytes from flaskapp_postgressql_db_1.flaskapp_postgressql_my-custom-network (172.18.0.2): icmp_seq=1 ttl=64 time=0.194 ms
64 bytes from flaskapp_postgressql_db_1.flaskapp_postgressql_my-custom-network (172.18.0.2): icmp_seq=2 ttl=64 time=0.108 ms
64 bytes from flaskapp_postgressql_db_1.flaskapp_postgressql_my-custom-network (172.18.0.2): icmp_seq=3 ttl=64 time=0.104 ms
64 bytes from flaskapp_postgressql_db_1.flaskapp_postgressql_my-custom-network (172.18.0.2): icmp_seq=4 ttl=64 time=0.130 ms
64 bytes from flaskapp_postgressql_db_1.flaskapp_postgressql_my-custom-network (172.18.0.2): icmp_seq=5 ttl=64 time=0.127 ms

```

The command docker exec -it flaskapp_postgressql_web_1 ping flaskapp_postgressql_db_1 is performing a network connectivity test. Here's a breakdown of what it's doing:

docker exec -it flaskapp_postgressql_web_1 ...:

This part tells Docker to execute a command inside the running container named flaskapp_postgressql_web_1.
-it means "interactive terminal," which allows you to see the output of the command in your terminal and interact with it.
ping flaskapp_postgressql_db_1:

ping is a network utility that sends ICMP (Internet Control Message Protocol) echo requests to a specified host and listens for echo replies.
flaskapp_postgressql_db_1 is the hostname of the database container. Docker's internal DNS resolution allows containers on the same network to refer to each other by their service names (as defined in your docker-compose.yml file).
What the Output Means:

PING flaskapp_postgressql_db_1 (172.18.0.2) 56(84) bytes of data.:

This line indicates that the ping command is sending packets to the container named flaskapp_postgressql_db_1, which resolves to the IP address 172.18.0.2.
The 56(84) bytes of data refers to the size of the ICMP packets being sent.
64 bytes from flaskapp_postgressql_db_1.flaskapp_postgressql_my-custom-network (172.18.0.2): icmp_seq=1 ttl=64 time=0.194 ms:

This line shows a successful reply from the flaskapp_postgressql_db_1 container.
icmp_seq=1 is the sequence number of the ICMP packet.
ttl=64 is the time-to-live (a measure of how many network hops the packet can take).
time=0.194 ms is the round-trip time (the time it took for the packet to reach the destination and return).
--- flaskapp_postgressql_db_1 ping statistics ---:

This section provides a summary of the ping test.
5 packets transmitted, 5 received, 0% packet loss means that all packets sent were successfully received, indicating a stable network connection.
rtt min/avg/max/mdev = 0.104/0.132/0.194/0.034 ms shows the minimum, average, maximum, and standard deviation of the round-trip times.
In essence, this command is verifying that:

The flaskapp_postgressql_web_1 container can reach the flaskapp_postgressql_db_1 container over the network.
The network connection between the two containers is stable and has low latency.
That docker's internal DNS is working correctly.