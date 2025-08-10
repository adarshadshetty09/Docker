FROM ubuntu:latest
LABEL maintainer="Adarsha Shetty <adarshadshetty09@gmail.com>"
ENV REFRESHED_AT=2025-03-29

# Update the package lists and install the necessary packages
RUN apt-get -yqq update && apt-get -yqq install ruby ruby-dev make nodejs build-essential

# Install Jekyll version 2.5.3
RUN gem install jekyll -v 2.5.3

# Define volume for data and HTML
VOLUME [ "/data", "/var/www/html"]

# Set the working directory to /data
WORKDIR /data

# Define the entrypoint for the container
ENTRYPOINT [ "jekyll", "build", "--destination=/var/www/html" ]

