from flask import Flask, request, jsonify, render_template, redirect, url_for
import mysql.connector
import os

app = Flask(__name__)

def get_db_connection():
    return mysql.connector.connect(
        host=os.environ['DB_HOST'],
        user=os.environ['DB_USER'],
        password=os.environ['DB_PASSWORD'],
        database=os.environ['DB_NAME']
    )

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/create-table')
def create_table():
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(100),
                email VARCHAR(100)
            )
        ''')
        conn.commit()
        return "✅ users table created!"
    except Exception as e:
        return f"Error: {e}"

@app.route('/add', methods=['POST'])
def add_user():
    name = request.form['name']
    email = request.form['email']

    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("INSERT INTO users (name, email) VALUES (%s, %s)", (name, email))
        conn.commit()
        return redirect(url_for('home'))
    except Exception as e:
        return f"Error: {e}"

@app.route('/users')
def list_users():
    try:
        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM users")
        users = cursor.fetchall()
        return jsonify(users)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)



'''

🔀 Step 12: Add Nginx as a Reverse Proxy to Your Dockerized App
💡 Why Use NGINX?
Acts as a reverse proxy in front of Flask

Routes requests to Flask (port 5000 → 80)

Adds better performance, security, and scalability
'''


'''
💡 What is NGINX?
NGINX (pronounced "Engine-X") is a high-performance web server that can also act as a:

Reverse Proxy

Load Balancer

HTTP Cache

Media Streaming Server

🚀 Why Use NGINX as a Reverse Proxy?
🔁 1. Routes Traffic to Flask (Reverse Proxy)
When a user visits your website:

They hit port 80 (HTTP) or 443 (HTTPS)

NGINX receives the request and forwards it to Flask running on port 5000

This hides the internal port (5000) and keeps it clean to users.



🔐 2. Security
Flask’s built-in server (app.run()) is not safe for production

NGINX is more battle-tested, hardened, and can:

Block bad IPs

Rate-limit requests

Redirect to HTTPS

Hide internal architecture

⚡ 3. Performance Boost
NGINX handles static files (CSS, JS, images) way faster than Flask

Reduces load on Flask app → Better response time and scalability


🎯 4. Port Redirection (5000 → 80)
Instead of asking users to visit:

arduino
Copy
Edit
http://example.com:5000
You let them just visit:

arduino
Copy
Edit
http://example.com
NGINX listens on port 80 and routes internally to 5000.

🧩 5. Scalability & Load Balancing
You can run multiple Flask containers and have NGINX load balance between them

Future-proof: Add multiple backend services (Flask, Node, etc.) under one domain

✅ Summary: Why NGINX?
Benefit	Description
Reverse Proxy	Routes external requests to Flask
Port Mapping	Maps 80 → 5000
Security	Protects against direct exposure of Flask
Performance	Fast static file serving
Scalability	Easily add more backend services later


'''