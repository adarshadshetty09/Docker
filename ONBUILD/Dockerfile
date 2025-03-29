FROM ubuntu:20.04 AS build

LABEL version="1.0"
LABEL location="New York" type="Data Center" role="Web Server"

RUN apt-get update && apt-get install -y --no-install-recommends apache2 && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

ENV APACHE_RUN_USER www-data
ENV APACHE_RUN_GROUP www-data
ENV APACHE_LOG_DIR=/var/log/apache2

ONBUILD ADD . /var/www/

EXPOSE 80

ENTRYPOINT ["/usr/sbin/apache2", "-D", "FOREGROUND"]


