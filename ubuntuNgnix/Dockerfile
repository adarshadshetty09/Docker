FROM docker.io/library/ubuntu:latest

RUN apt update && \ 
    apt install nginx -y && \
    apt clean

COPY index.html /usr/share/nginx/html/

EXPOSE 80 
# Start Nginx in the foreground
ENTRYPOINT ["nginx", "-g", "daemon off;"]


    

    