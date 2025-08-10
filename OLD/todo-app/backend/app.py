# backend/app.py
from flask import Flask, jsonify, request
import mysql.connector
import os
import logging

logging.basicConfig(level=logging.INFO) #added logging

app = Flask(__name__)

def get_db_connection():
    try:
        conn = mysql.connector.connect(
            host=os.environ.get('DB_HOST', 'db'),
            user=os.environ.get('DB_USER', 'todo'),
            password=os.environ.get('DB_PASSWORD', 'todo'),
            database=os.environ.get('DB_NAME', 'todo'),
            port=3306
        )
        logging.info("Database connection successful.") #added logging
        return conn
    except mysql.connector.Error as err:
        logging.error(f"Error connecting to database: {err}") #added logging
        return None

def init_db():
    conn = get_db_connection()
    if conn is None:
        logging.error("Database connection failed, init_db aborted.") #added logging
        return
    try:
        cursor = conn.cursor()
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS todos (
                id INT AUTO_INCREMENT PRIMARY KEY,
                task VARCHAR(255) NOT NULL
            )
        ''')
        conn.commit()
        logging.info("Table 'todos' created or already exists.") #added logging
    except mysql.connector.Error as err:
        logging.error(f"Error initializing database: {err}") #added logging
    finally:
        if 'cursor' in locals() and cursor:
            cursor.close()
        if conn:
            conn.close()

@app.route('/todos', methods=['GET', 'POST'])
def todos():
    conn = get_db_connection()
    if conn is None:
        return jsonify({"error": "Database connection failed"}), 500
    cursor = conn.cursor()

    if request.method == 'GET':
        cursor.execute('SELECT id, task FROM todos')
        todos = [{'id': row[0], 'task': row[1]} for row in cursor.fetchall()]
        cursor.close()
        conn.close()
        return jsonify(todos)

    elif request.method == 'POST':
        data = request.get_json()
        task = data['task']
        cursor.execute('INSERT INTO todos (task) VALUES (%s)', (task,))
        conn.commit()
        id = cursor.lastrowid
        cursor.close()
        conn.close()
        return jsonify({'id': id, 'task': task}), 201

if __name__ == '__main__':
    init_db()
    app.run(host='0.0.0.0', port=5000)