FROM ubuntuL14.04
LABEL NAME:Adarsha D Shetty

ENV REFRESHED_AT 2025-06-01

RUN apt-get update -yqq && apt-get -yqq install ruby ruby-dev build-essential redis-tools

RUN gem install --no-rdoc --no-ri sinatra json redis 

RUN mkdir -p /opt/webapp

EXPOSE 4567 

CMD [ "/opt/webapp/bin/webapp" ]

