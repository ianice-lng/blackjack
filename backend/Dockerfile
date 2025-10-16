# backend/Dockerfile

FROM python:3.12-slim

# Dossier de travail racine
WORKDIR /app

# Copier et installer les dépendances
COPY backend/requirements.txt .
RUN pip install --upgrade pip setuptools wheel
RUN pip install --no-cache-dir -r requirements.txt

# ✅ Copier tout le dossier backend dans /app
COPY backend /app

# Exposer le port
EXPOSE 8000

# ✅ Lancer le serveur depuis manage.py
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
