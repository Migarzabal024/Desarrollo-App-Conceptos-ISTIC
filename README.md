# Trabajo Práctico N°1 - Gestión de Conceptos

**Materia:** Taller de Programación 2  
**Profesor:** Franco Borsani  
**Fecha de Entrega:** 16/09/2025

## Descripción

Aplicación web para gestionar conceptos vistos en la materia de Taller de Programación 2. Permite agregar, visualizar y eliminar conceptos mediante un servidor Node.js con API REST.

## Tecnologías Utilizadas

- Node.js (servidor HTTP)
- HTML5 (estructura)
- CSS3 (estilos)
- JavaScript Vanilla (manipulación del DOM)
- API REST (comunicación cliente-servidor)

## Estructura del Proyecto
```
tp-programacion2/
├── public/
│   ├── index.html      # Formulario para agregar conceptos
│   ├── view.html       # Vista de lista de conceptos
│   └── styles.css      # Estilos CSS
├── server.js           # Servidor Node.js
├── package.json        # Configuración del proyecto
└── README.md           # Documentación
```

##  Instalación y Ejecución

### 1. Clonar el repositorio
```bash
git clone [URL-DEL-REPOSITORIO]
cd tp-programacion2
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Ejecutar el servidor
```bash
node server.js
```

### 4. Abrir en el navegador
```
http://localhost:3000
```

##  Endpoints de la API REST

### GET /api/conceptos
Obtiene todos los conceptos guardados.

**Respuesta exitosa:**
```json
[
  {
    "id": 1,
    "nombre": "API REST",
    "descripcion": "Interfaz de programación de aplicaciones...",
    "fechaCreacion": "2025-09-10T15:30:00.000Z"
  }
]
```

### GET /api/conceptos/:id
Obtiene un concepto específico por ID.

**Respuesta exitosa:**
```json
{
  "id": 1,
  "nombre": "API REST",
  "descripcion": "Interfaz de programación de aplicaciones...",
  "fechaCreacion": "2025-09-10T15:30:00.000Z"
}
```

### POST /api/conceptos
Crea un nuevo concepto.

**Body de la petición:**
```json
{
  "nombre": "Node.js",
  "descripcion": "Entorno de ejecución para JavaScript"
}
```

### DELETE /api/conceptos
Elimina todos los conceptos.

### DELETE /api/conceptos/:id
Elimina un concepto específico por ID.

##  Casos de Prueba

### Caso 1: Agregar un concepto

**Pasos:**
1. Abrir http://localhost:3000
2. Completar el formulario con:
   - Nombre: "API REST"
   - Descripción: "Interfaz de programación de aplicaciones basada en HTTP"
3. Click en "Guardar Concepto"

**Resultado Esperado:**
- Mensaje de éxito: " Concepto guardado exitosamente"
- Formulario se limpia automáticamente

**Captura de pantalla:**
![Agregar concepto](screenshots/test-agregar.png)

### Caso 2: Visualizar conceptos

**Pasos:**
1. Navegar a "Ver Conceptos"
2. Verificar que se muestren todos los conceptos guardados

**Resultado Esperado:**
- Lista de tarjetas con los conceptos
- Cada tarjeta muestra: nombre, descripción, fecha y botón eliminar

**Captura de pantalla:**
![Ver conceptos](screenshots/test-visualizar.png)

### Caso 3: Eliminar un concepto específico

**Pasos:**
1. En la vista de conceptos, click en el botón 🗑️ de una tarjeta
2. Confirmar la eliminación

**Resultado Esperado:**
- Alerta de confirmación
- Concepto desaparece de la lista
- Mensaje: " Concepto eliminado"
**Captura de pantalla:**
![Eliminar concepto](screenshots/test-eliminar.png)

### Caso 4: Obtener concepto por ID (API)

**Petición:**
```bash
curl http://localhost:3000/api/conceptos/1
```

**Resultado Esperado:**
```json
{
  "id": 1,
  "nombre": "API REST",
  "descripcion": "Interfaz de programación de aplicaciones...",
  "fechaCreacion": "2025-09-10T15:30:00.000Z"
}
```

##  Gestión de Ramas Git

El proyecto utiliza dos ramas:

- **main**: Rama de producción (código estable)
- **test**: Rama de desarrollo y pruebas

### Workflow de trabajo:
```bash
# Trabajar en la rama test
git checkout test
# ... realizar cambios ...
git add .
git commit -m "Descripción de cambios"

# Cuando el código esté listo, fusionar a main
git checkout main
git merge test
git push origin main
```

## Reflexiones

### Reflexión 1: Aprendizaje de Node.js puro
Trabajar con Node.js sin frameworks como Express me permitió comprender a fondo cómo funcionan los servidores HTTP. La creación manual de rutas y el manejo de peticiones me dio una base sólida para entender qué hace Express "por debajo".

**Dificultad encontrada:** El manejo del body de las peticiones POST fue complejo al principio, ya que los datos llegan en chunks y deben ser concatenados.

### Reflexión 2: Manipulación del DOM y Fetch API
La integración entre el frontend y backend mediante JavaScript vanilla me enseñó la importancia de manejar correctamente las promesas y los errores de red.

**Dificultad encontrada:** Problemas con CORS al intentar hacer peticiones desde el navegador al servidor local.

