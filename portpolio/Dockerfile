# Use the official Nginx Image as base

FROM nginx:alpine 

# Remove the default nginx index page 

RUN rm -rf /usr/share/nginx/html/* 

# COPY website files into the nginx web directory 

COPY . /usr/share/nginx/html 

# EXPOSE the port 80 
# This makes port 80 (default HTTP port) accessible to the outside when the container runs.

EXPOSE 80 

# Start Nginx 
# Don't run it in the background (this is important because Docker containers shut down if their main process exits — keeping it in the foreground keeps the container alive).

CMD ["nginx" , "-g", "daemon off;"]
