from flask import Flask  # Imports the Flask web framework.
import os  # Imports the operating system module for interacting with the OS (e.g., environment variables).
import psycopg2  # Imports the psycopg2 library for interacting with PostgreSQL databases.

app = Flask(__name__)  # Creates a Flask application instance. __name__ refers to the name of the current module.

def get_db_connection():
    """
    Establishes a connection to the PostgreSQL database using environment variables.
    Returns:
        psycopg2.extensions.connection: A database connection object.
    """
    conn = psycopg2.connect(os.environ['DATABASE_URL']) # Connects to the database using the DATABASE_URL environment variable.
    return conn #returns the connection object.

@app.route('/') # Defines a route for the root URL ('/'). When a user accesses this URL, the 'hello' function is executed.
def hello():
    """
    Handles the root URL request.
    Connects to the database, retrieves the PostgreSQL version, and returns it in the response.
    Returns:
        str: A string containing a greeting and the database version.
    """
    conn = get_db_connection() # Gets a database connection.
    cur = conn.cursor() # Creates a cursor object, which allows you to execute SQL commands.
    cur.execute('SELECT version()') # Executes a SQL query to retrieve the PostgreSQL version.
    db_version = cur.fetchone() # Fetches the result of the query (a tuple containing the version).
    cur.close() # Closes the cursor.
    conn.close() # Closes the database connection.
    return f'Hello, Docker! Database version: {db_version}' # Returns a formatted string containing the greeting and the database version.

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0') # Starts the Flask development server.
    # debug=True enables debug mode, which provides detailed error messages.
    # host='0.0.0.0' makes the server accessible from any IP address (important for Docker).