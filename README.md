# FILOGIE — Web Application

Website for **FILOGIE** (Fondation Immobilière pour repenser le Logement par l'Innovation et l'Expérimentation), a Swiss foundation dedicated to developing affordable, sustainable, and inclusive housing. The site presents the foundation's three axes of work — prospective research, operational projects, and knowledge diffusion — alongside contact and partnership information.

Built with **Nuxt 3** (SPA mode, SSR disabled), **Vue 3**, and **SCSS**.

---

## Local Development with Docker

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/) installed on your machine.

### Steps

**1. Clone the repository**

```bash
git clone https://github.com/studio-guez/filogie.webapp.git
cd filogie.webapp
```

**2. Start the development container**

```bash
docker compose up
```

This will:
- Build the Docker image using `Dockerfile.dev`
- Install all npm dependencies inside the container
- Start the Nuxt dev server with hot-module replacement

> The `.nuxt` and `.output` directories are automatically wiped on every container start, so you always get a clean build cache.

If you update `package.json` or `Dockerfile.dev`, rebuild the image first:

```bash
docker compose up --build
```

**3. Open the app in your browser**

```
http://localhost:3000
```

The source files are mounted as a volume, so any changes you make locally are reflected immediately in the browser without restarting the container.

### Stopping the container

```bash
docker compose down
```

---

## Other Scripts

Run these inside the Docker container (no local Node/npm required):

| Command | Description |
|---|---|
| `docker compose run --rm web npm run build` | Build for production (Node server) |
| `docker compose run --rm web npm run generate` | Generate a static site |
| `docker compose run --rm -p 3000:3000 web npm run preview` | Preview the production build at `http://localhost:3000` |
| `docker compose run --rm web npm run build.github.page` | Generate and export to `docs/` for GitHub Pages |
