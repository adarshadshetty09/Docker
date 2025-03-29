FROM docker.io/library/nginx

WORKDIR /root

COPY requirement.txt .

ADD archive_name.tar /root/


RUN apt update && \
    apt upgrade -y 

EXPOSE 80

  