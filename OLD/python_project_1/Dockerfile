# Use the official Python Image
FROM python:3.9-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the app code into the container
COPY app/ /app/
# This will copy everything inside the ./app directory into /app in the container

# Install dependencies
RUN pip install --no-cache-dir -r /app/requirements.txt

# Expose port 5000 to the outside world
EXPOSE 5000

# Run the Flask app
CMD ["python3", "/app/app.py"]
