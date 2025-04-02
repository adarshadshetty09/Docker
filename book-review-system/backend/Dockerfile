# Use the Python 3.9 slim-buster base image
FROM python:3.9-slim-buster

# Set the working directory inside the container to /app
WORKDIR /app

# Copy the requirements.txt file to the /app directory
COPY requirements.txt /app/requirements.txt

# Install Python dependencies from requirements.txt
# --no-cache-dir reduces image size
RUN pip install --no-cache-dir -r requirements.txt

# Copy all files from the current directory to /app
COPY . /app

# Expose port 5000 (the default Flask port)
EXPOSE 5000

# Specify the command to run when the container starts
CMD ["python", "app.py"]