# BootCamp Project

This project uses **Docker** to run a Django backend and a frontend (Vite/React).  

## Prerequisites

- [Docker](https://www.docker.com/get-started) installed  
- [Docker Compose](https://docs.docker.com/compose/install/) installed  

## Setup & Run

1. Clone the repo:

```bash
git clone https://github.com/Gabriel-Penteadoo/blackjack.git
cd blackjack
```

2. Build and start containers:

```bash
docker-compose up --build
```

3. Access the services:

- Backend: [http://localhost:8000](http://localhost:8000)  
- Frontend: [http://localhost:5173](http://localhost:5173)

## Notes

- Static and media files are persisted in Docker volumes.  
- The frontend and backend are live-reloaded while developing.  
- Merci [Gabriel](https://github.com/Gabriel-Penteadoo) pour le readme 