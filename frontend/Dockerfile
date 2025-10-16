FROM node:20-alpine

WORKDIR /app

# Copy package.json and install dependencies
COPY frontend/package*.json ./
RUN npm install

# Copy frontend code
COPY frontend/ .

# Expose port
EXPOSE 5173

# Default command
CMD ["npm", "start"]