FROM ubuntu:14.04
LABEL name:Adarsha email:adarshadshetty09@gmail.com
ENV REFRESHED_AT 2014-06-01
RUN apt-get -yqq update && apt-get -yqq install nginx
RUN mkdir -p /var/www/htnl/website
ADD nginx/global.conf /etc/nginx/conf.d
ADD nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80 
