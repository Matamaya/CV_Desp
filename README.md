# 💼 Proyecto Curriculum Vitae (CV) - PHP + React

¡Bienvenido! Este proyecto base está dividido en dos partes principales:
1. **Backend (PHP)**: Una simulación de API REST muy ligera que sirve tus datos en formato JSON, con el soporte de cabeceras CORS preconfigurado.
2. **Frontend (React)**: Una aplicación interactiva y premium que consume la API del backend y muestra tu información profesional con un diseño moderno de alta calidad visual.

---

## 📂 Estructura del Proyecto

Te recomiendo organizar tus carpetas de la siguiente manera:

```text
CV_Desp/
├── backend/
│   └── index.php            # API simulada en PHP con cabeceras CORS
└── frontend/
    ├── public/              # Archivos públicos de React
    ├── src/
    │   ├── App.jsx          # Componente principal interactivo con Fetch
    │   ├── App.css          # Estilos premium (Glassmorphism, animaciones y responsive)
    │   └── main.jsx         # Punto de entrada de React (o index.js)
    ├── package.json         # Dependencias del proyecto React
    └── vite.config.js       # Configuración de compilación rápida (opcional/recomendado)
```

> 💡 **Nota:** Los archivos clave `backend/index.php`, `frontend/src/App.jsx` y `frontend/src/App.css` ya han sido generados en este espacio de trabajo para que comiences de inmediato.

---

## 🚀 Guía de Puesta en Marcha

Sigue estos sencillos pasos para tener todo funcionando en menos de 2 minutos:

### Paso 1: Iniciar el Backend (PHP)

Abre tu terminal en la carpeta `backend` y ejecuta el servidor local integrado de PHP en el puerto `8000`:

```bash
cd backend
php -S localhost:8000
```

> **Verificación:** Abre tu navegador e ingresa a `http://localhost:8000/index.php`. Deberías ver tus datos en formato JSON de inmediato.

---

### Paso 2: Crear e Iniciar el Frontend (React)

Si ya tienes un proyecto React configurado en la carpeta `frontend`, solo asegúrate de mover los archivos `App.jsx` y `App.css` dentro de su carpeta `src`. 

Si vas a inicializarlo desde cero, te recomendamos usar **Vite** por su velocidad extrema. Ejecuta en la terminal de la raíz (`CV_Desp`):

1. **Crear el proyecto Vite:**
   ```bash
   npm create vite@latest frontend -- --template react
   ```
2. **Instalar dependencias:**
   ```bash
   cd frontend
   npm install
   ```
3. **Colocar los archivos generados:**
   Copia o reemplaza el archivo `App.jsx` y `App.css` generados en la carpeta `frontend/src/`.
4. **Ejecutar el servidor de desarrollo de React:**
   ```bash
   npm run dev
   ```

---

## 🛠️ Detalles Técnicos Incluidos

* **Soporte CORS Avanzado**: El backend incluye cabeceras de respuesta dinámicas para peticiones `GET`, `POST` y `OPTIONS` para prevenir cualquier conflicto con el puerto diferente de React.
* **Manejo de Errores y Carga**: El frontend de React muestra una animación de carga y proporciona una pantalla interactiva con sugerencias detalladas en caso de que el backend PHP no esté en línea.
* **Diseño Premium**: El estilo CSS utiliza variables de diseño centralizadas, tipografías importadas de Google Fonts, efectos de cristal translúcido (Glassmorphism), orbes luminosos flotantes y es 100% adaptable a teléfonos móviles.
