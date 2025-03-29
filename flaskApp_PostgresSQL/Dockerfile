FROM python:3.9-slim-buster

WORKDIR /app

COPY requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

RUN apt-get update && apt-get install -y curl iputils-ping

COPY . /app

EXPOSE 5000

CMD ["python", "app.py"]