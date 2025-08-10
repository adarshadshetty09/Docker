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
