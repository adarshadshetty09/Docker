FROM ubuntu:14.04
LABEL Name: Adarsha D Shetty 

ENV REFRESHED_AT 29-03-2025

RUN apt-get -yyq update && apt-get -yqq install redis-server redis-tools

EXPOSE 6379 

ENTRYPOINT [ "/usr/bin/redis-server" ]
CMD []


