import os 
from flask import Flask

app = Flask(__name__)
app_name = os.getenv("APP_NAME" , "DefaultApp")
# We’ll make the Flask app read a variable called APP_NAME.
@app.route("/")

def home():
    return f"Hello from {app_name} !"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
    
    