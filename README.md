# Traffic Sign Service

Ein Full‑Stack‑Projekt zur Verwaltung und Analyse von Verkehrszeichen‑Beobachtungen.  
Bestehend aus einem **Spring Boot Backend**, einem **React Frontend** und einem **Node.js Uploader**, vollständig containerisiert mit **Docker Compose**.

---

## Technologien

| Ebene             | Stack                                           |
| ----------------- | ----------------------------------------------- |
| **Backend**       | Java 17 · Spring Boot · H2 DB · Spring Security |
| **Frontend**      | React · JavaScript · Leaflet (OpenStreetMap)    |
| **Uploader**      | Node.js · CSV‑Parser · Fetch API                |
| **Infrastruktur** | Docker · Docker Compose                         |

---

## Funktionen

- REST‑API für Verkehrszeichen (`/api/signs`)
- Clustering von Beobachtungen innerhalb 20 m Radius
- Anzeige in Tabelle + Karte (Leaflet)
- CSV‑Upload per Node‑Script
- Einfache Authentifizierung (Basic Auth)
- Komplett lauffähig in Docker

---

## Projektstruktur

```
TrafficSignService/
├── Dockerfile              # Backend
├── frontend/               # React‑App
├── scripts/                # Uploader‑Script
├── docker-compose.yml
└── README.md
```

---

## Start mit Docker

### Voraussetzungen

- [Docker Desktop](https://www.docker.com/products/docker-desktop)

### Starten

```bash
docker compose up
```

Danach sind die Dienste erreichbar unter:

| Dienst     | URL                              |
| ---------- | -------------------------------- |
| Frontend   | http://localhost:3000            |
| Backend    | http://localhost:8080/api/signs  |
| H2‑Konsole | http://localhost:8080/h2-console |

---

## Datenfluss

```text
Uploader (Node)  →  Backend (Spring Boot)  →  H2‑DB
                             ↓
                        Frontend (React)
```

---

## Autor

**Mohamad Sijaja**  
Backend Developer · Java · Spring Boot
Linz, Österreich
