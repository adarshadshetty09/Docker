from flask import Flask
import psycopg2
import os

app = Flask(__name__)

@app.route('/')
def hello():
    return "Hello from Flask!"

@app.route('/db')
def db():
    try:
        conn = psycopg2.connect(
            host=os.environ['POSTGRES_HOST'],
            database=os.environ['POSTGRES_DB'],
            user=os.environ['POSTGRES_USER'],
            password=os.environ['POSTGRES_PASSWORD']
        )
        return "Connected to PostgreSQL!"
    except Exception as e:
        return f"Error: {e}"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
