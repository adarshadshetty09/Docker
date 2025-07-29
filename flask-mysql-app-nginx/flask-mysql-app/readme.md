flask-mysql-app/
├── app.py
├── requirements.txt
├── Dockerfile
├── docker-compose.yml
├── templates/
│   └── index.html
└── nginx/
    └── default.conf





User --> NGINX (Port 80)
               ↓
           Flask (Port 5000)
               ↓
            MySQL
