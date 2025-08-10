# Stage 1: Build Stage - Prepare static content (optional)
# This stage can be used to build or prepare your static content if needed.
FROM ubuntu:20.04 AS build

# Install dependencies for building content (if needed, like node.js, etc.)
RUN apt-get update && \
    apt-get install -y curl wget

# Create a directory for static content and add index.html file
WORKDIR /static-website
COPY ./web/index.html .

# Stage 2: Nginx on Ubuntu to serve the static webpage
FROM ubuntu:20.04

# Install Nginx
RUN apt-get update && \
    apt-get install -y nginx && \
    rm -rf /var/lib/apt/lists/*

# Copy the static content from the build stage
COPY --from=build /static-website /var/www/html

# Expose port 80 to allow access to the web server
EXPOSE 80

# Start Nginx in the foreground (non-daemon mode)
CMD ["nginx", "-g", "daemon off;"]



