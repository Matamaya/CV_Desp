# Preguntas de Reflexión Técnica

Responde a estas preguntas con profundidad técnica, demostrando comprensión real de los conceptos. Cada respuesta debe tener entre 150–300 palabras e incluir ejemplos concretos.

---

## Reflexión 1 — Seguridad y Cifrado

### Enunciado
Explica cómo HTTPS protege tu API de ataques man-in-the-middle. ¿Qué datos podría interceptar un atacante si tu API usara HTTP sin cifrar? Proporciona un ejemplo concreto con tu microservicio de reconocimiento facial: ¿qué información sensible viaja en las peticiones/respuestas?

### Aspectos a cubrir
- [ ] Proceso de handshake TLS y establecimiento de claves de sesión
- [ ] Diferencia entre cifrado en tránsito vs en reposo
- [ ] Qué datos concretos de tu API serían vulnerables sin HTTPS (imágenes faciales, tokens, etc.)
- [ ] Cómo afecta esto al cumplimiento de RGPD/protección de datos

### Respuesta
HTTPS usa el handshake TLS para establecer claves de sesión únicas entre cliente y servidor, protegiendo los datos en tránsito mediante cifrado simétrico una vez negociadas las claves. Esto contrasta con el cifrado en reposo, que protege datos almacenados en discos o bases de datos. Sin TLS, un atacante en posición de Man-in-the-Middle podría interceptar peticiones y respuestas en texto plano: imágenes faciales subidas, tokens de autenticación, identificadores de usuario y resultados biométricos.

Ejemplo: en un microservicio de reconocimiento facial, las peticiones contienen fotografías (o vectores biométricos) y metadatos (user_id, timestamp). Las respuestas pueden incluir probabilidades de coincidencia y decisiones de autenticación. Si circulan por HTTP, cualquier nodo intermedio o red Wi‑Fi comprometida podría capturar esas imágenes y reconstruir identidades, lo que supone una violación severa del RGPD por tratarse de datos biométricos.

---

## Reflexión 2 — Automatización de Certificados

### Enunciado
¿Por qué es importante que Caddy renueve automáticamente el certificado sin intervención manual? Describe qué ocurriría si el certificado expirara. ¿Qué pasaría con los usuarios que intentaran acceder a tu API? Explica el proceso ACME HTTP-01 que usa Let's Encrypt.

### Aspectos a cubrir
- [ ] Consecuencias de un certificado expirado (errores en navegador, APIs que dejan de funcionar)
- [ ] Validación ACME HTTP-01 paso a paso
- [ ] Por qué los certificados Let's Encrypt duran solo 90 días
- [ ] Ventajas de la renovación automática vs manual (operaciones, errores humanos)

### Respuesta
Si un certificado expira, clientes y navegadores mostrarán advertencias de conexión insegura; muchos clientes automatizados rechazarán la conexión, lo que puede dejar inaccesible la API. Let's Encrypt usa el protocolo ACME; en la validación HTTP-01 el servidor demuestra control del dominio publicando un token en una URL HTTP accesible desde Internet. El CA solicita esa URL y verifica el token para emitir el certificado.

La duración de 90 días reduce la ventana de exposición si una clave privada se ve comprometida, y fomenta la automatización de renovaciones. Automatizar con Caddy evita errores humanos y ventanas de downtime por olvidos, y facilita la rotación frecuente de claves.

---

## Reflexión 3 — Observabilidad vs Disponibilidad

### Enunciado
¿Cuál es la diferencia entre "mi API está corriendo en el servidor" y "mi API es accesible desde Internet"? ¿Por qué Uptime Kuma es importante incluso si `docker ps` muestra que el contenedor está UP? Explica escenarios reales donde el contenedor funciona pero el servicio no es accesible.

### Aspectos a cubrir
- [ ] Diferencia entre liveness (contenedor vivo) y readiness (servicio listo)
- [ ] Problemas de red, firewall, DNS que impedirían el acceso aunque el contenedor esté corriendo
- [ ] Importancia de monitorizar desde fuera (perspectiva del usuario real)
- [ ] Métricas clave: uptime, latencia, tasa de error

### Respuesta
Que un contenedor aparezca en `docker ps` indica liveness: el proceso no ha muerto. Readiness es otra cosa: la aplicación interna puede no haber inicializado, la IA puede fallar al cargar modelos, la ruta `/health` puede devolver 5xx, o la red y reglas de firewall/NAT pueden bloquear el tráfico entrante. DNS mal configurado o reglas NAT/port‑forwarding faltantes hacen que el servicio no sea accesible desde Internet aunque el contenedor esté "UP".

Uptime Kuma realiza comprobaciones externas reales (HTTP/S, PING) desde la perspectiva del usuario, por eso es valiosa para medir disponibilidad, latencia y tasa de error.

---

## Reflexión 4 — Costes y Decisiones Empresariales

### Enunciado
¿Cuánto costaría usar certificados SSL/TLS comerciales (como DigiCert o Sectigo) en lugar de Let's Encrypt? Investiga precios reales. ¿Por qué muchas empresas, incluyendo grandes corporaciones, usan Let's Encrypt? ¿Hay casos donde un certificado comercial sería necesario?

### Aspectos a cubrir
- [ ] Comparativa de costes anuales (Let's Encrypt gratis vs certificados comerciales de 50–500€/año)
- [ ] Ventajas de certificados comerciales: soporte, garantía, validación extendida (EV)
- [ ] Casos de uso para cada tipo (startups vs banca, e-commerce vs APIs internas)
- [ ] Wildcard certificates y certificados multi-dominio

### Respuesta 
Let's Encrypt ofrece certificados gratuitos y automatizables, incluidos ciertos wildcards mediante DNS-01, lo que la hace ideal para startups y servicios públicos. Proveedores comerciales cobran típicamente entre 50€ y varios cientos de euros al año por certificado, ofreciendo a cambio soporte, garantías y opciones de validación (OV/EV) que algunas organizaciones reguladas prefieren por razones de auditoría y pólizas de seguros.

La elección depende del riesgo y las necesidades de soporte: para APIs internas y servicios públicos automatizados Let's Encrypt es suficiente; para entidades que requieren EV o contratos de servicio con garantías económicas, puede justificarse un certificado comercial.
