# Docker


### DOCKER FILE  ( Dockerfile )

## FROM


## LABEL


## MAINTAINER


## ENV


## ADD


## COPY


## ARG

## CMD   , It execute with process id with 1


## RUN


## ENTRYPOINT

[Run Multiple Commands in Docker CMD Directive | Baeldung on Linux](https://www.baeldung.com/linux/docker-cmd-multiple-commands)

## USER


## VOLUME


## WORKDIR


## EXPOSE


## ONBULID

## podman images
## podman ps
## podman ps -a 
## podman pull docker.io/library/nginx
## podman run -d docker.io/library/nginx:latest 
## podman logs 6a6234b965f2
## podman inspect <ContainerID>
## podman inspect <ImagesID>
## podman run -d --name nginx-1 -p 8081:80 nginx
## podman top <ContainerID>


## ATTACH 

#### /usr/share/nginx/html/index.html

```
devops:dopadm:~/DOCKER$podman cp d9d:/usr/share/nginx/html/index.html .
devops:dopadm:~/DOCKER$ls
Docker_Notes.md  LICENSE  README.md  dockerCommands.txt  index.html  python_project_1
devops:dopadm:~/DOCKER$
```
##  podman save -o modifiednginx1.tar localhost/modifiednginx
##  podman load -i modifiednginx1.tar

```
devops:dopadm:~/DOCKER$podman ps
CONTAINER ID  IMAGE                                  COMMAND               CREATED        STATUS        PORTS                 NAMES
7e7e8890ac86  localhost/modifiednginx:latest         nginx -g daemon o...  3 minutes ago  Up 3 minutes  0.0.0.0:7993->80/tcp  nginx-podman4
9324bc7f6110  localhost/modifiednginxdocker1:latest  nginx -g daemon o...  2 minutes ago  Up 2 minutes  0.0.0.0:7994->80/tcp  nginx-podman6
devops:dopadm:~/DOCKER$podman port 7e7e8890ac86
80/tcp -> 0.0.0.0:7993
devops:dopadm:~/DOCKER$
```

## podman pull docker.io/library/httpd:latest



```
Try 'podman --help' for more information
devops:dopadm:~/DOCKER$podman images
REPOSITORY                      TAG         IMAGE ID      CREATED         SIZE
localhost/modifiednginxdocker1  latest      8aa4f88d3466  15 minutes ago  259 MB
localhost/modifiednginx         latest      6b36b4b4005e  30 minutes ago  259 MB
docker.io/library/httpd         latest      0de612e99135  7 weeks ago     152 MB
devops:dopadm:~/DOCKER$podman run -d --name nginx-podman6 -p 7997:80 docker.io/library/httpd
Error: creating container storage: the container name "nginx-podman6" is already in use by 9324bc7f61104a551c19f2d060e5fbca6d5c077bfdf2fd580d28bf2e04a29cb6. You have to remove that container to be able to reuse that name: that name is already in use, or use --replace to instruct Podman to do so.
devops:dopadm:~/DOCKER$podman exec -it 0de612e99135 /bin/bash
Error: no container with name or ID "0de612e99135" found: no such container
devops:dopadm:~/DOCKER$podman stop nginx-podman6
podman rm nginx-podman6
nginx-podman6
nginx-podman6
devops:dopadm:~/DOCKER$podman run -d --name nginx-podman7 -p 7997:80 docker.io/library/httpd
06cbf93e44976bb9366a1cfa134d531dd203cf6d256d6e48be16623408cf202a
devops:dopadm:~/DOCKER$

```

## podman rename <containerID> cow
```
devops:dopadm:~/DOCKER$ls
Docker_Notes.md  LICENSE  README.md  dockerCommands.txt  index.html  index1.html  modifiednginx1.tar  modifiednginxdocker1.tar  python_project_1
devops:dopadm:~/DOCKER$podman ps
CONTAINER ID  IMAGE                           COMMAND               CREATED             STATUS             PORTS                 NAMES
7e7e8890ac86  localhost/modifiednginx:latest  nginx -g daemon o...  10 minutes ago      Up 10 minutes      0.0.0.0:7993->80/tcp  nginx-podman4
06cbf93e4497  docker.io/library/httpd:latest  httpd-foreground      About a minute ago  Up About a minute  0.0.0.0:7997->80/tcp  nginx-podman7
devops:dopadm:~/DOCKER$podman stats 06cbf93e4497
Error: stats is not supported in rootless mode without cgroups v2
devops:dopadm:~/DOCKER$podman rename 7e7 cow
devops:dopadm:~/DOCKER$podman ps
CONTAINER ID  IMAGE                           COMMAND               CREATED         STATUS         PORTS                 NAMES
7e7e8890ac86  localhost/modifiednginx:latest  nginx -g daemon o...  11 minutes ago  Up 11 minutes  0.0.0.0:7993->80/tcp  cow
06cbf93e4497  docker.io/library/httpd:latest  httpd-foreground      2 minutes ago   Up 2 minutes   0.0.0.0:7997->80/tcp  nginx-podman7
devops:dopadm:~/DOCKER$

```

## podman history <imageID>

```
devops:dopadm:~/DOCKER$podman images
REPOSITORY                      TAG         IMAGE ID      CREATED         SIZE
localhost/modifiednginxdocker1  latest      8aa4f88d3466  21 minutes ago  259 MB
localhost/modifiednginx         latest      6b36b4b4005e  36 minutes ago  259 MB
docker.io/library/httpd         latest      0de612e99135  7 weeks ago     152 MB
devops:dopadm:~/DOCKER$podman history 8aa4f88d3466
ID            CREATED         CREATED BY                                     SIZE        COMMENT
8aa4f88d3466  21 minutes ago  /bin/sh                                        24.1kB      FROM localhost/modifiednginx:latest
6b36b4b4005e  36 minutes ago  /bin/sh                                        63MB        FROM docker.io/library/nginx:latest
<missing>     5 weeks ago     CMD ["nginx" "-g" "daemon off;"]               0B          buildkit.dockerfile.v0
<missing>     5 weeks ago     STOPSIGNAL SIGQUIT                             0B          buildkit.dockerfile.v0
<missing>     5 weeks ago     EXPOSE map[80/tcp:{}]                          0B          buildkit.dockerfile.v0
<missing>     5 weeks ago     ENTRYPOINT ["/docker-entrypoint.sh"]           0B          buildkit.dockerfile.v0
<missing>     5 weeks ago     COPY 30-tune-worker-processes.sh /docker-e...  7.17kB      buildkit.dockerfile.v0
<missing>     5 weeks ago     COPY 20-envsubst-on-templates.sh /docker-e...  5.12kB      buildkit.dockerfile.v0
<missing>     5 weeks ago     COPY 15-local-resolvers.envsh /docker-entr...  2.56kB      buildkit.dockerfile.v0
<missing>     5 weeks ago     COPY 10-listen-on-ipv6-by-default.sh /dock...  4.61kB      buildkit.dockerfile.v0
<missing>     5 weeks ago     COPY docker-entrypoint.sh / # buildkit         3.58kB      buildkit.dockerfile.v0
<missing>     5 weeks ago     RUN /bin/sh -c set -x     && groupadd --sy...  118MB       buildkit.dockerfile.v0
<missing>     5 weeks ago     ENV DYNPKG_RELEASE=1~bookworm                  0B          buildkit.dockerfile.v0
<missing>     5 weeks ago     ENV PKG_RELEASE=1~bookworm                     0B          buildkit.dockerfile.v0
<missing>     5 weeks ago     ENV NJS_RELEASE=1~bookworm                     0B          buildkit.dockerfile.v0
<missing>     5 weeks ago     ENV NJS_VERSION=0.8.9                          0B          buildkit.dockerfile.v0
<missing>     5 weeks ago     ENV NGINX_VERSION=1.27.4                       0B          buildkit.dockerfile.v0
<missing>     5 weeks ago     LABEL maintainer=NGINX Docker Maintainers ...  0B          buildkit.dockerfile.v0
<missing>     5 weeks ago     # debian.sh --arch 'amd64' out/ 'bookworm'...  77.8MB      debuerreotype 0.15
devops:dopadm:~/DOCKER$
```

  ## podman create localhost/modifiednginx
  ## podman ps
  ## podman ps -a
  ## podman start 1339ab46f1f9

  # . is the build context 



  ## The Run command is very huge like keep one RUN command and append 


  ## docker run -d -p 27017:27017 --name example-mongo mongo:latest
  ##  docker ps
  ##  docker exec -it example-mongo mongo
  ##  docker exec -it example-mongo mongosh


  sudo apt update
sudo apt install nginx
sudo systemctl start nginx

sudo systemctl enable nginx
sudo systemctl status nginx
sudo ufw allow 'Nginx Full'


podman run -d -entrypoint=nginx docker.io/library/ubuntu -f



<!-- FROM ubuntu:latest

# Install dependencies and Nginx
RUN apt update && \
    apt install -y nginx && \
    apt clean

# Expose port 80 for web traffic
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"] -->


KUBERNETES
 REFER  - : ->  https://minikube.sigs.k8s.io/docs/start/?arch=%2Flinux%2Fx86-64%2Fstable%2Fbinary+download#Service
    


PODS can be created : 
   1. Deployment   - > replicaset 
   2. Statefull set
   3. Job
   4. Daemonset

  
## Controller and Schedular 

SERVICE discovery will happens with core-dns

etcd will maintain the configuration all , like  ip's of pod (store)  kubectl get pods -n kube-system -o wide. It maintain the lotof configuration

Control manager will indentifies , schedular for creating , 




  521  minikube start
  522  kubectl get po -A
  523  sudo snap install kubectl
  524  minikube kubectl -- get po -A
  525  minikube dashboard
  526  alias kubectl="minikube kubectl --"
  527  kubectl get pods
  528  kubectl get pod -A
  529  kubectl dashboard
  530  minikube dashboard -d
  531  minikube dashboard
  532  kubectl --help
  533  minikube dashboard
  534  minikube get nodes;
  535  minikube get nodes
  536  kubectl get nodes
  537  clear
  538  kubectl get nodes;
  539  kubectl get pods;
  540  kubectl get ns;
  541  kubectl get pd
  542  kubectl get po
  543  kubectl get pod
  544  kubectl get pods
  545  kubectl get pods ns default
  546  clear
  547  kubectl get deployments -n kube-system
  548  kubectl get daemonsets -n kube-system
  549  kubectl get cronjob -n kube-system
  550  kubectl get cronjobs -n kube-system
  551  kubectl get statefulset -n kube-system
  552  kubectl get statefulsets -n kube-system
  553  clear
  554  kubectl get deployments -n kube-system
  555  clear
  556  kubectl get deploy -n kube-system
  557  kubectl get rs -n kube-system
  558  kubectl describe deploy coredns-668d6bf9bc
  559  kubectl describe deploy coredns-668d6bf9bc -n kube-system
  560  kubectl describe deploy coredns -n kube-system
  561  clear
  562* kubectl describe pods
  563  kubectl describe rs coredns -n kube-system
  564  kubectl get deployments -n kube-system -o wide
  565  kubectl get pods -n kube-system -o wide
  566  kubectl describe coredns-668d6bf9bc
  567  clear
  568  kubectl get pods -n kube-system -o wide
  569  kubectl describe pod storage-provisioner
  570  clear
  571  kubectl get pods -n kube-system -o wide
  572  kubectl describe pods etcd-minikune -n kube-system
  573  kubectl describe pods etcd-minikunb -n kube-system
  574  kubectl describe pods etcd-minikube -n kube-system
  575  kubectl get pods -n kube-system -o wide
  576  kubectl describe pods kube-apiserver-minikube -n kube-system
  577  kubectl get pods -n kube-system -o wide
  578  kubectl describe pods kube-controller-manager-minikub -n kube-system
  579  kubectl get pods -n kube-system -o wide
  580  kubectl describe pods kube-proxy-7mh7k -n kube-system
  581  kubectl get pods -n kube-system -o wide
  582  kubectl describe pods kube-scheduler-minikube -n kube-system
  583  kubectl get pods -n kube-system -o wide
  584  kubectl describe pods kube-scheduler-minikube -n kube-system
  585  kubectl get pods -n kube-system -o wide
  586  kubectl describe pods storage-provisioner -n kube-system


devops:dopadm:~$kubectl get service -n kube-system -o wide
NAME       TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)                  AGE   SELECTOR
kube-dns   ClusterIP   10.96.0.10   <none>        53/UDP,53/TCP,9153/TCP   67m   k8s-app=kube-dns
devops:dopadm:~$



pods are for executing the, And the service is for the -< ClusterIP , NodePort , Loadbalancer>

Connection from the outside will happens via service to a pods 

Cluster IP = Connection within the same cluster will happens via clusterip which were the pods are running 
NodePort =  in each of the worker node it expose the port , that we mentioned , but where only the pods are running.
LoadBalancer = Internally it is using the nodeport , but it gives the lb URL


dopadm@DESKTOP-KM01E29:~$ cat .my
.my.cnf         .mysql_history
dopadm@DESKTOP-KM01E29:~$ cat .my
.my.cnf         .mysql_history
dopadm@DESKTOP-KM01E29:~$ cat .my.cnf
[mysql]
user=root
password="$dop@123"
database="devops"
dopadm@DESKTOP-KM01E29:~$


***************************************** 24-03-2025 ***************************************************

## docker info
## docker-machine ip default 
## sudo snap install docker 
## whereis curl 
## cd /vars/runs/ && ls -lrt (group owner is docker) , here docker.sock listen the any incoming request from the docker daemon.
## 

## sudo docker daemon -H tcp://0.0.0.0:2375
#### OR
## export DOCKER_HOST="tcp://0.0.0.0:2375"

#### Wecan also specify an alternative Unix socket path with the-H flag; for example,to use unix://home/docker/docker.sock:

```
$ sudo docker daemon -H unix://home/docker/docker.sock
```

#### Or we can specify multiple binding like so:
```
$ sudo docker daemon -H tcp://0.0.0.0:2375 -H unix://home/docker/docker.sock
```

## Sudo docker daemon -D {Not working}
## sudo systemctl status docker

```
ubuntu@ip-172-31-4-247:~$ sudo service docker stop
Stopping 'docker.service', but its triggering units are still active:
docker.socket

ubuntu@ip-172-31-4-247:~$ sudo service docker start

ubuntu@ip-172-31-4-247:~$ sudo systemctl status docker
● docker.service - Docker Application Container Engine
     Loaded: loaded (/usr/lib/systemd/system/docker.service; enabled; pres>
     Active: active (running) since Mon 2025-03-24 06:06:23 UTC; 3s ago
TriggeredBy: ● docker.socket
       Docs: https://docs.docker.com
   Main PID: 12530 (dockerd)
      Tasks: 8
     Memory: 88.4M (peak: 88.4M)
        CPU: 258ms
     CGroup: /system.slice/docker.service
             └─12530 /usr/bin/dockerd -H fd:// --containerd=/run/container>
Mar 24 06:06:22 ip-172-31-4-247 dockerd[12530]: time="2025-03-24T06:06:22.>
Mar 24 06:06:22 ip-172-31-4-247 dockerd[12530]: time="2025-03-24T06:06:22.>
Mar 24 06:06:23 ip-172-31-4-247 dockerd[12530]: time="2025-03-24T06:06:23.>
Mar 24 06:06:23 ip-172-31-4-247 dockerd[12530]: time="2025-03-24T06:06:23.>
Mar 24 06:06:23 ip-172-31-4-247 dockerd[12530]: time="2025-03-24T06:06:23.>
Mar 24 06:06:23 ip-172-31-4-247 dockerd[12530]: time="2025-03-24T06:06:23.>
Mar 24 06:06:23 ip-172-31-4-247 dockerd[12530]: time="2025-03-24T06:06:23.>
Mar 24 06:06:23 ip-172-31-4-247 dockerd[12530]: time="2025-03-24T06:06:23.>
Mar 24 06:06:23 ip-172-31-4-247 dockerd[12530]: time="2025-03-24T06:06:23.>
Mar 24 06:06:23 ip-172-31-4-247 systemd[1]: Started docker.service - Docke>

ubuntu@ip-172-31-4-247:~$
```

# To Update the Docker 

#### sudo apt-get update
#### sudo apt-get install docker-engine  [lxc-docker]


**********************************************************

#### docker run -i -t ubuntu /bin/bash 
```
ubuntu@ip-172-31-4-247:~$ docker run -i -t ubuntu /bin/bash
Unable to find image 'ubuntu:latest' locally
latest: Pulling from library/ubuntu
5a7813e071bf: Pull complete
Digest: sha256:72297848456d5d37d1262630108ab308d3e9ec7ed1c3286a32fe09856619a782
Status: Downloaded newer image for ubuntu:latest
root@c514c9e8bd84:/# ls
bin   dev  home  lib64  mnt  proc  run   srv  tmp  var
boot  etc  lib   media  opt  root  sbin  sys  usr
root@c514c9e8bd84:/#
```

#### Container is running 
```
ubuntu@ip-172-31-4-247:~$ docker ps
CONTAINER ID   IMAGE     COMMAND       CREATED          STATUS          PORTS     NAMES
c514c9e8bd84   ubuntu    "/bin/bash"   46 seconds ago   Up 46 seconds             recursing_herschel
ubuntu@ip-172-31-4-247:~$
```

### -i flags keeps STDIN open from the container, 
### -t flag is the other half and tells Docker to assign a PSEUDO-TTY  to the container we're about to create.

```
 root@f7cbdac22a02:/# hostname
 f7cbdac22a02
 ```

 #### Inside the Docker Container 
 ```
 root@f7cbdac22a02:/# hostname
 f7cbdac22a02
 ```

we see out container hostname is the container ID. 

##### Checking the container's /etc/hosts
```
cat /etc/hosts
```
##### Checking the container's interface
```
ip a
```

##### Check the container's processes
```
ps -aux
```

##### Installing a package in our first container
```
apt-get update && apt-get install vim 
```

## docker ps -a 

## docker ps -l

## docker ps --format 

# Container naming

### sudo docker run --name bob_the_container -i -t ubuntu /bin/bash

#### NAMING RULE :-> [a-zA-z0-9_.-]

# Starting a stopped container 

### docker start <containerName> 

### docker start <containerID>

### docker restart <containerID>

docker create command 

## Attaching to a Container 

```
docker run --name bob_the_container -i -t ubuntu /bin/bash 
```

& now

```
exit 
```
, this, now run this below cmd
### docker attach <container_name>

### docker attach <container_ID>


## Creating Daemonized containers
- creating a long running container 


## docker run --name daemon_dave -d ubuntu /bin/sh -c "while true; do echo hello world; sleep 1; done"

- -d flag to  docker to run in the detach the container to the background.


"while true; echo Hello World; sleep 1; done"

## docker logs <containerID>

## docker logs -f <containerID>

## docker logs --tail 10 <containerNameOrId>  // last 10 lines of logs

## docker top <containerID>

# Docker statistics

### docker stats < containerID1 containerID2 containerID3 > 

```
ubuntu@ip-172-31-4-247:~$ docker ps
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS     NAMES
4b06f8375176   ubuntu    "/bin/sh -c 'while t…"   5 seconds ago    Up 4 seconds              v3
36a4f27bf79c   ubuntu    "/bin/sh -c 'while t…"   18 seconds ago   Up 16 seconds             v2
0d0c761288a1   ubuntu    "/bin/sh -c 'while t…"   14 minutes ago   Up 14 minutes             v1
ubuntu@ip-172-31-4-247:~$ docker stats v1 v2 v3
CONTAINER ID   NAME      CPU %     MEM USAGE / LIMIT   MEM %     NET I/O       BLOCK I/O   PIDS
0d0c761288a1   v1        0.01%     616KiB / 957.4MiB   0.06%     1.23kB / 0B   0B / 0B     2
36a4f27bf79c   v2        0.00%     612KiB / 957.4MiB   0.06%     726B / 0B     0B / 0B     2
4b06f8375176   v3        0.08%     628KiB / 957.4MiB   0.06%     726B / 0B     0B / 0B     2
CONTAINER ID   NAME      CPU %     MEM USAGE / LIMIT   MEM %     NET I/O       BLOCK I/O   PIDS
0d0c761288a1   v1        0.01%     616KiB / 957.4MiB   0.06%     1.23kB / 0B   0B / 0B     2
36a4f27bf79c   v2        0.00%     612KiB / 957.4MiB   0.06%     726B / 0B     0B / 0B     2
4b06f8375176   v3        0.08%     628KiB / 957.4MiB   0.06%     726B / 0B     0B / 0B     2
CONTAINER ID   NAME      CPU %     MEM USAGE / LIMIT   MEM %     NET I/O       BLOCK I/O   PIDS
0d0c761288a1   v1        0.08%     620KiB / 957.4MiB   0.06%     1.23kB / 0B   0B / 0B     2
36a4f27bf79c   v2        0.14%     616KiB / 957.4MiB   0.06%     726B / 0B     0B / 0B     2
4b06f8375176   v3        0.08%     628KiB / 957.4MiB   0.06%     726B / 0B     0B / 0B     2
CONTAINER ID   NAME      CPU %     MEM USAGE / LIMIT   MEM %     NET I/O       BLOCK I/O   PIDS

```

## docker exec -d <containerName> /etc/new_config_file

```
ubuntu@ip-172-31-4-247:~$ docker exec -d v1 touch /etc/new_config_file
ubuntu@ip-172-31-4-247:~$ docker exec -it v1 /bin/bash
root@0d0c761288a1:/# cd /etc/
root@0d0c761288a1:/etc# ls
alternatives            fstab      kernel         new_config_file  rc3.d        subgid
apt                     gai.conf   ld.so.cache    nsswitch.conf    rc4.d        subgid-
bash.bashrc             gnutls     ld.so.conf     opt              rc5.d        subuid
bindresvport.blacklist  group      ld.so.conf.d   os-release       rc6.d        subuid-
cloud                   group-     legal          pam.conf         rcS.d        sysctl.conf
cron.d                  gshadow    libaudit.conf  pam.d            resolv.conf  sysctl.d
cron.daily              gshadow-   login.defs     passwd           rmt          systemd
debconf.conf            host.conf  logrotate.d    passwd-          security     terminfo
debian_version          hostname   lsb-release    profile          selinux      update-motd.d
default                 hosts      machine-id     profile.d        shadow       xattr.conf
dpkg                    init.d     mke2fs.conf    rc0.d            shadow-
e2scrub.conf            issue      mtab           rc1.d            shells
environment             issue.net  networks       rc2.d            skel
root@0d0c761288a1:/etc# client_loop: send disconnect: Connection reset
PS C:\Users\User\Documents\secret>

```


## Automatic container restarts [--restart=always,--restart=on-failure:5] flags

### docker run --restart=always --name v4 -d ubuntu /bin/sh -c "while true; do echo hello world; sleep 1; done"

### docker inspect <containerID>


## --format 

### docker inspect --format='{{ .State.Running }}' v1

```
ubuntu@ip-172-31-4-247:~$ docker inspect --format='{{ .State.Running }}' v1
true
ubuntu@ip-172-31-4-247:~$
```

```
ubuntu@ip-172-31-4-247:~$ docker inspect --format '{{ .NetworkSettings.IPAddress }}' v1
172.17.0.2
ubuntu@ip-172-31-4-247:~$
```

## docker inspect --format '{{.Name}} {{ .State.Running }}' v1 v2 

### docker inspect --format '{{json .NetworkSettings.Networks}}' v1 v2
```
ubuntu@ip-172-31-4-247:~$ docker inspect --format '{{json .NetworkSettings.Networks}}' v1 v2
{"bridge":{"IPAMConfig":null,"Links":null,"Aliases":null,"MacAddress":"02:42:ac:11:00:02","NetworkID":"e0ac6a0614eb9288c5ca89fd590b06c7ead4de7d7ce1349701f5fef6024b4cf1","EndpointID":"9e9bfc389715768edbbf41cfcb843b9698b41a14057f7b31df1ed2caad744d73","Gateway":"172.17.0.1","IPAddress":"172.17.0.2","IPPrefixLen":16,"IPv6Gateway":"","GlobalIPv6Address":"","GlobalIPv6PrefixLen":0,"DriverOpts":null,"DNSNames":null}}
{"bridge":{"IPAMConfig":null,"Links":null,"Aliases":null,"MacAddress":"02:42:ac:11:00:03","NetworkID":"e0ac6a0614eb9288c5ca89fd590b06c7ead4de7d7ce1349701f5fef6024b4cf1","EndpointID":"8c5e0989b3ee8bce643fa524e20eb7de55049f4c4618804561901e46edb249f1","Gateway":"172.17.0.1","IPAddress":"172.17.0.3","IPPrefixLen":16,"IPv6Gateway":"","GlobalIPv6Address":"","GlobalIPv6PrefixLen":0,"DriverOpts":null,"DNSNames":null}}
ubuntu@ip-172-31-4-247:~$
```

# Deleting the container 

### docker rm <containerID>

# Deleting all the container

### docker rm `docker ps -a -q`  ,  removes the stopped container

### docker rm 


```
1. Docker Images and Filesystem Layers
Docker images are made up of layers, and each layer represents a set of filesystem changes. Each time you add or modify something in a Docker image (such as adding files, installing packages, or configuring the system), a new layer is created on top of the previous one.

These layers are stacked, and Docker uses a layered filesystem to manage these changes. When you pull a Docker image from a registry or build one, you're essentially downloading or creating several layers that form the complete image.

2. Boot Filesystem (bootfs)
At the base of a Docker image is something called the boot filesystem, or bootfs. This is a special part of the image that mimics a typical Linux/Unix boot filesystem, but it's not directly used by Docker users in most cases.

Bootfs: Think of bootfs as the starting point for the image's boot process. It contains the essential files required to bring the system up into a running state, like kernel-related files, initial RAM disk images, and other bootloader files.

Not Directly Used by Docker Users: In a Docker container, the boot filesystem is largely abstracted away from the user. You generally don't interact with it unless you're doing something low-level like debugging the boot process or working on the image's initial startup behavior.

3. What Happens After the Container Starts
Once a container starts, it doesn't use the bootfs in the same way that a typical physical or virtual machine would. Here's what happens:

Booting: The container first uses the bootfs layer to initialize its environment.

Transition to Memory: After the container has booted, the boot filesystem is typically unmounted to free up memory. The container's main operating system environment is loaded into memory.

Memory Usage: This is part of why containers are lightweight and fast compared to virtual machines. The boot filesystem (bootfs) doesn't take up memory once it's no longer needed for the running container.

4. The Role of the Boot Filesystem in Containers
For typical users running containers, this whole process is abstracted away, and they don't have to interact with or worry about the boot filesystem. Instead, they only interact with the higher layers of the Docker image, where applications and services are installed and configured.

To summarize:

Docker images are composed of several layers stacked on top of each other.

The bootfs layer is the bottom layer, containing boot-related files.

Once a container starts, it loads into memory and unmounts the bootfs, freeing up system resources.

Docker users generally don't interact with bootfs unless they're working on the lower levels of the container's startup process.
```

# Listing the Images
### docker images 

# You will find your containers in the --> /var/lib/docker/containers

```
ubuntu@ip-172-31-4-247:~$ ls
ubuntu@ip-172-31-4-247:~$ docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
ubuntu@ip-172-31-4-247:~$ docker images
REPOSITORY   TAG       IMAGE ID       CREATED       SIZE
ubuntu       latest    a04dc4851cbc   8 weeks ago   78.1MB
ubuntu@ip-172-31-4-247:~$ docker run --name daemon_dave -d ubuntu /bin/sh -c "while true; do echo hello world; sleep 1; done"
3ce04f8d9b32f301dc4791c1b1e80137b2004c889ddd7bf3aa9936aad6d31100
ubuntu@ip-172-31-4-247:~$ docker ps
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS     NAMES
3ce04f8d9b32   ubuntu    "/bin/sh -c 'while t…"   2 seconds ago   Up 2 seconds             daemon_dave
ubuntu@ip-172-31-4-247:~$ docker ps
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS     NAMES
3ce04f8d9b32   ubuntu    "/bin/sh -c 'while t…"   28 seconds ago   Up 28 seconds             daemon_dave
ubuntu@ip-172-31-4-247:~$ sudo -i
root@ip-172-31-4-247:~# cd
root@ip-172-31-4-247:~# cd /var/lib/docker/containers/
root@ip-172-31-4-247:/var/lib/docker/containers# ls
root@ip-172-31-4-247:/var/lib/docker/containers#
```


## docker pull ubuntu:12.04

## docker images 

```
 Auserrepository takes the form of a usernameandarepository name; forexample,
 jamtur01/puppet.
 • Username: jamtur01
 • Repository name: puppe
 ```

 ## docker search anyimagesname  , like 
```
ubuntu@ip-172-31-4-247:~$ docker search nginx
NAME                                     DESCRIPTION                                     STARS     OFFICIAL
nginx                                    Official build of Nginx.                        20693     [OK]
nginx/nginx-ingress                      NGINX and  NGINX Plus Ingress Controllers fo…   100
nginx/nginx-prometheus-exporter          NGINX Prometheus Exporter for NGINX and NGIN…   48
nginx/unit                               This repository is retired, use the Docker o…   65
nginx/nginx-ingress-operator             NGINX Ingress Operator for NGINX and NGINX P…   2
nginx/nginx-quic-qns                     NGINX QUIC interop                              1
nginx/nginxaas-loadbalancer-kubernetes                                                   0
nginx/unit-preview                       Unit preview features                           0
bitnami/nginx                            Bitnami container image for NGINX               197
ubuntu/nginx                             Nginx, a high-performance reverse proxy & we…   128
bitnamicharts/nginx                      Bitnami Helm chart for NGINX Open Source        0
rancher/nginx                                                                            2
kasmweb/nginx                            An Nginx image based off nginx:alpine and in…   8
linuxserver/nginx                        An Nginx container, brought to you by LinuxS…   229
redash/nginx                             Pre-configured nginx to proxy linked contain…   3
dtagdevsec/nginx                         T-Pot Nginx                                     0
paketobuildpacks/nginx                                                                   0
vmware/nginx                                                                             2
chainguard/nginx                         Build, ship and run secure software with Cha…   4
gluufederation/nginx                      A customized NGINX image containing a consu…   1
droidwiki/nginx                                                                          0
intel/nginx                                                                              0
circleci/nginx                           This image is for internal use                  2
corpusops/nginx                          https://github.com/corpusops/docker-images/     1
antrea/nginx                             Nginx server used for Antrea e2e testing        0
ubuntu@ip-172-31-4-247:~$
ubuntu@ip-172-31-4-247:~$
ubuntu@ip-172-31-4-247:~$
ubuntu@ip-172-31-4-247:~$ docker search mongodb
NAME                                                   DESCRIPTION                                     STARS     OFFICIAL
mongodb/mongodb-atlas-kubernetes-operator-prerelease   This is an internal-use-only build of the Mo…   0
mongodb/atlas                                          Create, manage, and automate MongoDB Atlas r…   9
mongodb/mongodb-community-server                       The Official MongoDB Community Server           141
mongodb/mongo-cxx-driver                               Container image for the C++ driver              2
mongodb/mongodb-atlas-local                            Create, manage, and automate MongoDB Atlas L…   6
mongodb/mongodb-enterprise-server                      The Official MongoDB Enterprise Advanced Ser…   13
mongodb/mongodb-atlas-kubernetes-operator              The MongoDB Atlas Kubernetes Operator - Kube…   5
mongodb/mongodb-atlas-search                           Atlas Search gives you a seamless, scalable …   3
bitnami/mongodb                                        Bitnami container image for MongoDB             258
mongodb/apix_test                                      apix test repo                                  0
mongodb/signatures                                     Signatures for container images                 1
mongodb/search-test-base-images                                                                        0
bitnamicharts/mongodb                                  Bitnami Helm chart for MongoDB                  2
chainguard/mongodb                                     Build, ship and run secure software with Cha…   0
portworx/mongodb                                                                                       0
tutum/mongodb                                          MongoDB Docker image – listens in port 27017…   231
ardoq/mongodb                                                                                          0
webhippie/mongodb                                      Docker image for mongodb                        13
phenompeople/mongodb                                    MongoDB is an open-source, document databas…   0
frodenas/mongodb                                       A Docker Image for MongoDB                      19
cloudron/mongodb                                                                                       0
ryryryan/mongodb                                                                                       0
deprecateddockerfile/mongodb                           Trusted automated MongoDB (http://www.mongod…   101
gebele/mongodb                                         mongodb                                         0
jimmylhm/mongodb                                                                                       0
ubuntu@ip-172-31-4-247:~$

```

## docker commit <containerID> giveanyname 
## docker commit -m "A new custom image" -a "Adarsha D Shetty" <containerID> adadeahdashdbasd/netflix

```
ubuntu@ip-172-31-4-247:~$ docker images
REPOSITORY   TAG       IMAGE ID   CREATED   SIZE
ubuntu@ip-172-31-4-247:~$ docker run --name v2 -d ubuntu /bin/sh -c "while true; do echo Adarsha D Shetty; sleep 1; done"
Unable to find image 'ubuntu:latest' locally
latest: Pulling from library/ubuntu
5a7813e071bf: Pull complete
Digest: sha256:72297848456d5d37d1262630108ab308d3e9ec7ed1c3286a32fe09856619a782
Status: Downloaded newer image for ubuntu:latest
fac10052eb985e6e59db8a84e957cc0dcc4cfc2ebbea30d579495b91b97b62cf
ubuntu@ip-172-31-4-247:~$ docker ps
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS     NAMES
fac10052eb98   ubuntu    "/bin/sh -c 'while t…"   4 seconds ago   Up 3 seconds             v2
ubuntu@ip-172-31-4-247:~$ docker exec -it fac /bin/bash
root@fac10052eb98:/# mkdir adarshadshetty
root@fac10052eb98:/# ls
adarshadshetty  bin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
root@fac10052eb98:/# exit
exit
ubuntu@ip-172-31-4-247:~$ docker commit -m "A new custom image" -a "AdarshaDShetty" fac10052eb98 adarsha/ubuntu:commit
sha256:9ac01bb08c3aedda8ab2283e3ec5566e32a3da208d118e7313b18eab05076417
ubuntu@ip-172-31-4-247:~$ docker images
REPOSITORY       TAG       IMAGE ID       CREATED         SIZE
adarsha/ubuntu   commit    9ac01bb08c3a   4 seconds ago   78.1MB
ubuntu           latest    a04dc4851cbc   8 weeks ago     78.1MB
ubuntu@ip-172-31-4-247:~$ docker run --name v1 -d 9ac01bb08c3a /bin/sh -c "while true; do echo Adarsha D Shetty; sleep 1; done"
009787026a4beed8a6615627fc2102a600e10e66bbb679a7172e1d2757178593
ubuntu@ip-172-31-4-247:~$ docker ps
CONTAINER ID   IMAGE          COMMAND                  CREATED         STATUS         PORTS     NAMES
009787026a4b   9ac01bb08c3a   "/bin/sh -c 'while t…"   3 seconds ago   Up 2 seconds             v1
fac10052eb98   ubuntu         "/bin/sh -c 'while t…"   2 minutes ago   Up 2 minutes             v2
ubuntu@ip-172-31-4-247:~$ docker exec -it 0097 /bin/bash
root@009787026a4b:/# ls
adarshadshetty  bin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
root@009787026a4b:/# exit
exit
ubuntu@ip-172-31-4-247:~$
```

## docker history <imageID>
## docker ps -l 


```
devops:dopadm:~/DOCKER/static_web$docker history 77cb666d21d3
IMAGE          CREATED        CREATED BY                                      SIZE      COMMENT
77cb666d21d3   15 hours ago   CMD ["nginx" "-g" "daemon off;"]                0B        buildkit.dockerfile.v0
<missing>      15 hours ago   EXPOSE map[80/tcp:{}]                           0B        buildkit.dockerfile.v0
<missing>      15 hours ago   RUN /bin/sh -c echo "Hi, I am in your contai…   27B       buildkit.dockerfile.v0
<missing>      15 hours ago   RUN /bin/sh -c apt-get update && apt-get ins…   55.7MB    buildkit.dockerfile.v0
<missing>      15 hours ago   LABEL maintainer=adarshadshetty09@gmail.com …   0B        buildkit.dockerfile.v0
<missing>      8 weeks ago    /bin/sh -c #(nop)  CMD ["/bin/bash"]            0B
<missing>      8 weeks ago    /bin/sh -c #(nop) ADD file:1b6c8c9518be42fa2…   77.9MB
<missing>      8 weeks ago    /bin/sh -c #(nop)  LABEL org.opencontainers.…   0B
<missing>      8 weeks ago    /bin/sh -c #(nop)  LABEL org.opencontainers.…   0B
<missing>      8 weeks ago    /bin/sh -c #(nop)  ARG LAUNCHPAD_BUILD_ARCH     0B
<missing>      8 weeks ago    /bin/sh -c #(nop)  ARG RELEASE                  0B


devops:dopadm:~/DOCKER/static_web$ls
Dockerfile


devops:dopadm:~/DOCKER/static_web$cat Dockerfile
# Version: 0.0.1
FROM ubuntu:22.04

LABEL maintainer="adarshadshetty09@gmail.com" \
      authors="ADARSHA D SHETTY"

# Install Nginx and clean up apt cache to reduce image size
RUN apt-get update && apt-get install -y nginx && \
    rm -rf /var/lib/apt/lists/*

# Add custom content to index.html
RUN echo "Hi, I am in your container" > /usr/share/nginx/html/index.html

# Expose port 80 for the container
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
devops:dopadm:~/DOCKER/static_web$
```

## $docker build --no-cache -t="adarshadshetty/v2" .  [--no-cache] , build with complete new update , it will not use previous history. 

# Dockerfiles and the build cache

## Docker can randomly assign a high port from the ranges [32768] to [61000] on the docker host the  maps to port 80 on the container.

```
devops:dopadm:~/DOCKER/static_web$docker ps
CONTAINER ID   IMAGE          COMMAND                  CREATED        STATUS        PORTS                                       NAMES
d672a4e028d5   77cb666d21d3   "nginx -g 'daemon of…"   16 hours ago   Up 16 hours   0.0.0.0:32770->80/tcp, [::]:32770->80/tcp   cranky_colden
devops:dopadm:~/DOCKER/static_web$docker port d672a4e028d5 80
0.0.0.0:32770
[::]:32770
devops:dopadm:~/DOCKER/static_web$docker port cranky_colden 80
0.0.0.0:32770
[::]:32770
devops:dopadm:~/DOCKER/static_web$
```

## CMD -> instruction specifies the command to run when a container is launched.

## LIKE 

```
 $ sudo docker run-i-t jamtur01/static_web /bin/true

 CMD [ "/bin/true" ]

```


# Docker Volume [VOLUME]

### VOLUME ["/opt/project"]
This would attempt to create a mount point /opt/project to any container created from the image. 

We can specify the multiple VOLUME instruction 

## VOLUME["/opt/project","/data"]


# ADD 
The ADD instruction adds files and directories from our build environment into 

## ADD software.lic /opt/application/software.lic

or 

## ADD http://wordpress.org/latest.zip  /root/wordpress.zip

## ADD latest:tar.gz /var/www/wordpress/

## COPY conf.d/ /etc/apache2/



# LABEL 

## LABEL version="1.0"
## LABEL location="New York" type="Data Center" role="Web Server"

# ARG

## ARG build 
## ARG webapp_user=user

At build time we can pass the variable.

## docker build --build-arg build=1234 -t adarsha/shetty


# Pre-defined ARG variables

```
HTTP_PROXY
http_proxy
HTTPS_PROXY
https_proxy
FTP_PROXY
ftp_proxy
NO_PROXY
no_proxy
```

## --build-arg <variable>=<value> ,[flag_to_the_docker_build]

# ONBUILD

## ONBUILD instruction adds triggers to images. A trigger is executed when the image is used as the basis of another image.

```
ONBUILD ADD . /app/src
ONBUILD RUN cd /app/src && make 
```

```
 $ sudo docker inspect 508efa4e4bf8
 ...
 "OnBuild": [
 "ADD . /app/src",
 "RUN cd /app/src/ && make"
 ]
 ...
```


# Deleting an images

``` 
docker rmi <imagename>
```

```
sudo docker rmi `docker images -a -q`
```

## Running your own Docker registry
```
docker run -d -p 5000:5000 registry:2
```


### For older version of docker 
```
docker run -d -p 5000:5000 registry:2 --insecure-registry
```

### QUAY , private docker registry


**************************************** END ************************

## TESTING WITH DOCKER 


```
devops:dopadm:~/DOCKER/python_project_1$sudo nano /etc/docker/daemon.json
devops:dopadm:~/DOCKER/python_project_1$sudo nano /etc/docker/daemon.json
devops:dopadm:~/DOCKER/python_project_1$sudo systemctl restart docker
devops:dopadm:~/DOCKER/python_project_1$sudo systemctl status docker.service
● docker.service - Docker Application Container Engine
     Loaded: loaded (/usr/lib/systemd/system/docker.service; enabled; preset: ena>
     Active: active (running) since Sat 2025-03-29 13:59:28 IST; 3s ago
TriggeredBy: ● docker.socket
       Docs: https://docs.docker.com
   Main PID: 17658 (dockerd)
      Tasks: 12
     Memory: 46.5M ()
     CGroup: /system.slice/docker.service
             └─17658 /usr/bin/dockerd -H fd:// --containerd=/run/containerd/conta>

Mar 29 13:59:28 DESKTOP-KM01E29 dockerd[17658]: time="2025-03-29T13:59:28.4757461>
Mar 29 13:59:28 DESKTOP-KM01E29 dockerd[17658]: time="2025-03-29T13:59:28.4758062>
Mar 29 13:59:28 DESKTOP-KM01E29 dockerd[17658]: time="2025-03-29T13:59:28.4758138>
Mar 29 13:59:28 DESKTOP-KM01E29 dockerd[17658]: time="2025-03-29T13:59:28.4758193>
Mar 29 13:59:28 DESKTOP-KM01E29 dockerd[17658]: time="2025-03-29T13:59:28.4758422>
Mar 29 13:59:28 DESKTOP-KM01E29 dockerd[17658]: time="2025-03-29T13:59:28.4766337>
Mar 29 13:59:28 DESKTOP-KM01E29 dockerd[17658]: time="2025-03-29T13:59:28.6666864>
Mar 29 13:59:28 DESKTOP-KM01E29 dockerd[17658]: time="2025-03-29T13:59:28.6784654>
Mar 29 13:59:28 DESKTOP-KM01E29 dockerd[17658]: time="2025-03-29T13:59:28.6786056>
Mar 29 13:59:28 DESKTOP-KM01E29 systemd[1]: Started docker.service - Docker Appli>

devops:dopadm:~/DOCKER/python_project_1$sudo nano /etc/docker/daemon.json
devops:dopadm:~/DOCKER/python_project_1$sudo catr /etc/docker/daemon.json
sudo: catr: command not found
devops:dopadm:~/DOCKER/python_project_1$sudo cat /etc/docker/daemon.json
{
  "dns": ["8.8.8.8", "8.8.4.4"],
  "insecure-registries": ["your-private-registry:5000"]
}

devops:dopadm:~/DOCKER/python_project_1$
```

