# CV DevOps Project

Aplicación web tipo CV online desarrollada con React y PHP, desplegada mediante una arquitectura CI/CD moderna usando Jenkins, GitHub Actions, Cloudflare e ImageKit.

El proyecto separa frontend y backend:

- Frontend en React desplegado automáticamente en Vercel.
- Backend PHP alojado en una Raspberry Pi con Apache.
- Pipeline automatizado con Jenkins y GitHub Actions.

---

# Tech Stack

## Frontend

- React
- JavaScript
- HTML5
- CSS3
- Vercel

## Backend

- PHP
- Apache2
- Raspberry Pi

## DevOps / Infraestructura

- Jenkins
- Docker
- Docker Compose
- GitHub Actions
- Cloudflare CDN
- ImageKit CDN
- Git & GitHub

---

# Arquitectura

```text
git push
   │
   ├── GitHub Actions ─────► Vercel (Frontend React)
   │
   └── Webhook ───────────► Jenkins (Docker)
                                 │
                                 └── Apache + PHP (Raspberry Pi)

Cloudflare CDN ───────────► HTTPS + Caché + Protección DDoS
```
