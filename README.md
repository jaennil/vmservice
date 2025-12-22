# vmservice

Website for VM Auto Service - a car repair shop located in Bekhteevo, Moscow region.

## Location

[Yandex Maps](https://yandex.ru/maps/-/CLvZRKnY)

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS
- Docker + Nginx
- Kubernetes (k3s)

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview  # preview production build
```

## Docker

```bash
docker build -t vmservice:latest .
```

## Deployment

Kubernetes manifests are in `k8s/` directory:

```bash
kubectl apply -f k8s/
```

## Project Structure

```
src/
├── App.tsx         # main page component
├── main.tsx        # entry point
├── index.css       # tailwind styles
└── assets/         # images
k8s/                # kubernetes manifests
nginx/              # nginx config with ssl
```
