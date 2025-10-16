# frontend/Dockerfile

FROM node:20-alpine

WORKDIR /app

# Installer les dépendances avant de copier le reste du code
COPY frontend/package*.json ./
RUN npm install

# Copier le reste du projet
COPY frontend/ .

EXPOSE 5173

# Lancer le serveur Vite
CMD ["npm", "run", "dev", "--", "--host"]
