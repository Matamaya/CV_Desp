# CV DevOps Project

## Descripción
Esta aplicación es un Curriculum Vitae interactivo compuesto por un frontend en React y una API backend en PHP. El proyecto cuenta con una arquitectura de despliegue continuo (CI/CD) que permite actualizar la web en producción automáticamente con un simple `git push`, sirviendo el contenido de forma rápida y segura a nivel global.

## Tech Stack
* **Frontend:** React, Vercel
* **Backend:** PHP, Apache
* **CI/CD:** Jenkins (Dockerizado), GitHub Actions
* **Red y Seguridad:** Cloudflare (CDN, HTTPS, Proxy inverso), ngrok
* **Optimización Multimedia:** ImageKit

## Requisitos previos
Para replicar este entorno de desarrollo y producción se requiere:
* Un servidor (ej. Raspberry Pi) con **Apache, PHP, Git y Docker** instalados.
* Cuenta gratuita en **GitHub**, **Cloudflare** e **ImageKit**.
* Un dominio propio para la configuración de DNS y proxy.

## Pipeline CI/CD
El sistema automatizado está dividido en dos infraestructuras según las necesidades del código:

* Backend (Jenkins): Se aloja de forma privada en el servidor local. Ante un git push a main, GitHub notifica a Jenkins vía Webhook. Jenkins extrae el código, valida la sintaxis y transfiere los archivos al servidor Apache de forma automática.

* Frontend (GitHub Actions): Gestionado íntegramente en la nube. Instala dependencias (npm ci), ejecuta los tests y sube la build de producción a Vercel sin necesidad de infraestructura propia.

## Instalación y despliegue
1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/Matamaya/CV_Desp.git](https://github.com/Matamaya/CV_Desp.git)
   cd CV_Desp

## Autor
* **Nombre:** Mateo Amaya

* **GitHub:** @Matamaya

* **Email:** matamagra@campus.monlau.com