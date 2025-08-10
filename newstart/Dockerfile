# Use a base image
FROM node:18

# Set workdir
WORKDIR /app

# Copy source code
COPY . .

# Install dependencies
RUN npm install

# Start the app
CMD ["npm", "start"]
