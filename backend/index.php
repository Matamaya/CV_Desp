<?php
// Cabeceras CORS obligatorias para permitir peticiones desde React
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

// Responder de inmediato a las peticiones preflight OPTIONS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit();
}

// Datos personales y profesionales para el Curriculum Vitae
$datosCV = [
    "nombre" => "Mateo Amaya Diaz",
    "profesion" => "Desarrollador Web ,Diseñador UI/UX & Administrador de Sistemas",
    "foto_url" => "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80", // Foto de perfil de prueba de alta calidad (Unsplash)
    "sobre_mi" => "Hola, soy un Desarrollador web con pasión por construir aplicaciones altamente interactivas, limpias y eficientes. Especializado en el desarrollo frontend con React y ecosistemas backend con PHP y bases de datos relacionales.",
    "proyecto_ejemplo" => [
        "titulo" => "Aetheria Portal",
        "descripcion" => "Un panel interactivo con visualización de datos en tiempo real, gestión de microservicios y personalización completa de interfaces de usuario.",
        "tecnologias" => ["React.js", "PHP Moderno", "SQL", "CSS Grid", "REST API"],
        "url_demo" => "https://github.com/mateoamador/aetheria-portal"
    ],
    "contacto" => [
        "email" => "mateo.amador@example.com",
        "github" => "github.com/mateoamador",
        "linkedin" => "linkedin.com/in/mateoamador"
    ]
];

// Devolver el JSON estructurado
echo json_encode($datosCV, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
