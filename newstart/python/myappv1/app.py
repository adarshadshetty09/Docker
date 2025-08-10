import os
import psycopg2

conn = psycopg2.connect(
    host=os.getenv("DB_HOST","localhost"),
    user=os.getenv("DB_USER","user"),
    password=os.getenv("DB_PASS","pass"),
    dbname=os.getenv("DB_NAME","mydb")
)

print("Connected to database successfully!")


'''
docker network create myapp-network
'''

'''
docker run -d \
  --name db \
  --network myapp-network \
  -e POSTGRES_USER=user \
  -e POSTGRES_PASSWORD=pass \
  -e POSTGRES_DB=mydb \
  postgres:15
  
'''

'''
docker run -d \
  --name myapp \
  --network myapp-network \
  -p 5000:5000 \
  -e DB_HOST=db \
  -e DB_USER=user \
  -e DB_PASS=pass \
  -e DB_NAME=mydb \
  mypythonapp:advanced

'''

'''
docker exec -it myapp ping db

'''