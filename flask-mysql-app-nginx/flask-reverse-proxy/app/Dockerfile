# Use official Python base image
FROM python:3.10-slim

# Set working directory inside container
WORKDIR /app

# Copy project files
COPY . .

# Install dependencies
RUN pip install -r requirements.txt

# Expose port 5000 (Flask default)
EXPOSE 5000

# Run the Flask app
CMD ["python", "app.py"]
