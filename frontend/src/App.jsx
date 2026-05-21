import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [cvData, setCvData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // URL del servidor local de PHP (ajústalo si usas otro puerto o dirección)
  const API_URL = 'http://localhost:8000/index.php';

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error en la petición: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setCvData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al obtener los datos del backend:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <p>Cargando perfil profesional...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-card">
          <h2>⚠️ Error de Conexión</h2>
          <p>No se pudo conectar con el servidor PHP en <code>{API_URL}</code>.</p>
          <p className="error-detail">{error}</p>
          <div className="tips">
            <strong>Consejos para resolverlo:</strong>
            <ul>
              <li>Asegúrate de haber iniciado el servidor PHP local (ej: <code>php -S localhost:8000</code> dentro de la carpeta <code>backend</code>).</li>
              <li>Verifica que la URL configurada en React coincide exactamente con la de tu servidor backend.</li>
              <li>Revisa la consola del desarrollador (F12) para más detalles.</li>
            </ul>
          </div>
          <button onClick={() => window.location.reload()} className="retry-button">
            Reintentar Conexión
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      {/* Fondo decorativo con luces difusas */}
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>

      <header className="header">
        <div className="header-badge">Disponible para nuevos proyectos</div>
      </header>

      <main className="cv-card">
        {/* Sección de perfil principal */}
        <section className="profile-section">
          <div className="avatar-wrapper">
            <img 
              src={cvData.foto_url} 
              alt={`Foto de perfil de ${cvData.nombre}`} 
              className="profile-img"
              loading="lazy"
            />
            <div className="avatar-ring"></div>
          </div>
          
          <h1 className="name">{cvData.nombre}</h1>
          <h2 className="title">{cvData.profesion}</h2>
          <p className="about-text">{cvData.sobre_mi}</p>
        </section>

        {/* Sección de Proyecto Destacado */}
        <section className="section project-section">
          <h3 className="section-title">🚀 Proyecto Destacado</h3>
          <div className="project-card">
            <h4>{cvData.proyecto_ejemplo.titulo}</h4>
            <p>{cvData.proyecto_ejemplo.descripcion}</p>
            
            <div className="tech-tags">
              {cvData.proyecto_ejemplo.tecnologias.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>

            <a 
              href={cvData.proyecto_ejemplo.url_demo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link"
            >
              Ver Repositorio
              <svg className="link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </section>

        {/* Sección de Contacto / Footer de la tarjeta */}
        <section className="section contact-section">
          <h3 className="section-title">📬 Contacto</h3>
          <div className="contact-grid">
            <a href={`mailto:${cvData.contacto.email}`} className="contact-item">
              <span className="contact-icon">📧</span>
              <span className="contact-text">{cvData.contacto.email}</span>
            </a>
            <a href={`https://${cvData.contacto.github}`} target="_blank" rel="noopener noreferrer" className="contact-item">
              <span className="contact-icon">💻</span>
              <span className="contact-text">GitHub</span>
            </a>
            <a href={`https://${cvData.contacto.linkedin}`} target="_blank" rel="noopener noreferrer" className="contact-item">
              <span className="contact-icon">👔</span>
              <span className="contact-text">LinkedIn</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer-credits">
        Desarrollado con ❤️ combinando <strong>PHP 8 API</strong> &amp; <strong>React SPA</strong>
      </footer>
    </div>
  );
}

export default App;
