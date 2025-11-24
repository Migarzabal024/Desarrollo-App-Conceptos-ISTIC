# 📚 App Conceptos ISTIC - Sistema de Gestión de Conceptos

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)

**Materia:** Taller de Programación 2  
**Profesor:** Franco Borsani  
**Fecha de Entrega:** 16/09/2025

[Características](#-características-principales) •
[Instalación](#-instalación) •
[Uso](#-uso) •
[API](#-api-rest) •
[Pruebas](#-casos-de-prueba) •
[Contribuir](#-contribución)

</div>

---

## 📖 Descripción

Sistema web full-stack para la gestión integral de conceptos de programación vistos en la materia Taller de Programación 2. Implementa una arquitectura cliente-servidor con API REST, permitiendo operaciones CRUD completas y exportación automatizada de datos.

### 🎯 Objetivos del Proyecto

- Aplicar conceptos de desarrollo web full-stack
- Implementar patrones de diseño MVC (Model-View-Controller)
- Crear una API REST siguiendo estándares de la industria
- Integrar frontend React con backend Node.js/Express
- Gestionar persistencia de datos con Sequelize ORM y MySQL

---

## ✨ Características Principales

### Backend
- ✅ **API RESTful** con Express.js
- ✅ **ORM Sequelize** para gestión de base de datos
- ✅ **Arquitectura MVC** bien estructurada
- ✅ **Validaciones de datos** a nivel de modelo
- ✅ **Vistas EJS** para renderizado del lado del servidor
- ✅ **Exportación automatizada** con cron jobs (viernes 22:00)
- ✅ **Manejo de errores** centralizado
- ✅ **CORS** configurado para desarrollo

### Frontend
- ✅ **React 19** con Hooks modernos
- ✅ **Componentes reutilizables** y modulares
- ✅ **Axios** para peticiones HTTP
- ✅ **Formularios con validación** en tiempo real
- ✅ **Estados de carga** y manejo de errores
- ✅ **Diseño responsive** con CSS moderno
- ✅ **Interfaz intuitiva** con feedback visual

---

## 🛠️ Tecnologías Utilizadas

### Backend
| Tecnología |
|-----------|
| Node.js |
| Express |
| Sequelize |
| MySQL2 |
| EJS |
| node-cron |
| dotenv |
| cors |

### Frontend
| Tecnología | Propósito |
|-----------|-----------|
| React | Librería UI |
| React DOM| Renderizado |
| Axios | Cliente HTTP |
| React Scripts | Build tools |

---

## 📁 Estructura del Proyecto

```
proyecto/
│
├── backend/                          # Servidor Node.js + Express
│   ├── config/
│   │   └── database.js              # Configuración Sequelize
│   │
│   ├── models/
│   │   └── Concepto.js              # Modelo de datos
│   │
│   ├── services/
│   │   └── conceptoService.js       # Lógica de negocio
│   │
│   ├── controllers/
│   │   └── conceptoController.js    # Controladores
│   │
│   ├── routes/
│   │   └── conceptoRoutes.js        # Definición de rutas
│   │
│   ├── views/                       # Vistas EJS
│   │   ├── layout.ejs
│   │   ├── conceptos.ejs
│   │   ├── crear.ejs
│   │   ├── editar.ejs
│   │   └── partials/
│   │       ├── header.ejs
│   │       └── footer.ejs
│   │
│   ├── batch/
│   │   └── exportador.js            # Exportación programada
│   │
│   ├── exports/                     # Archivos JSON exportados
│   ├── public/                      # Archivos estáticos
│   ├── scripts/
│   │   └── seedConceptos.js         # Datos de prueba
│   │
│   ├── .env                         # Variables de entorno
│   ├── app.js                       # Punto de entrada
│   └── package.json
│
└── frontend/                         # Cliente React
    ├── public/
    │   ├── index.html
    │   ├── favicon.ico
    │   ├── logo192.png
    │   ├── logo512.png
    │   ├── manifest.json
    │   └── robots.txt
    │
    ├── src/
    │   ├── components/
    │   │   ├── ConceptoCard.jsx
    │   │   ├── ConceptoCard.css
    │   │   ├── FormularioConcepto.jsx
    │   │   └── FormularioConcepto.css
    │   │
    │   ├── pages/
    │   │   ├── ListaConceptos.jsx
    │   │   └── ListaConceptos.css
    │   │
    │   ├── services/
    │   │   ├── conceptoService.js   # Servicios API
    │   │   └── api.js               # Configuración Axios
    │   │
    │   ├── App.js
    │   ├── App.css
    │   ├── index.js
    │   └── index.css
    │
    ├── .env
    ├── package.json
    └── README.md
```

---

## 🚀 Instalación

### Prerrequisitos

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0
- **MySQL** >= 8.0 (a través de XAMPP o instalación independiente)
- **Git** (opcional)

### Paso 1: Clonar el Repositorio

```bash
git clone https://github.com/Migarzabal024/Desarrollo-App-Conceptos-ISTIC.git
cd Desarrollo-App-Conceptos-ISTIC
```

### Paso 2: Configurar la Base de Datos

1. Iniciar **XAMPP** y activar **MySQL**
2. Abrir **phpMyAdmin** en `http://localhost/phpmyadmin`
3. Crear la base de datos:

```sql
CREATE DATABASE AppConcepto CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

### Paso 3: Configurar el Backend

```bash
cd backend
npm install
```

Crear archivo `.env`:

```env
# Base de datos
DB_HOST=localhost
DB_NAME=AppConcepto
DB_USER=root
DB_PASS=

# Servidor
PORT=3001
NODE_ENV=development
```

### Paso 4: Configurar el Frontend

```bash
cd ../frontend
npm install
```

Crear archivo `.env`:

```env
REACT_APP_API_URL=http://localhost:3001/api
```

### Paso 5: Insertar Datos de Prueba (Opcional)

```bash
cd ../backend
npm run seed
```

---

## 💻 Uso

### Iniciar el Servidor Backend

```bash
cd backend
npm run dev
```

El servidor estará disponible en: `http://localhost:3001`

### Iniciar el Cliente Frontend

En una **nueva terminal**:

```bash
cd frontend
npm start
```

La aplicación se abrirá automáticamente en: `http://localhost:3000`

#### Backend
```bash
npm start          # Modo producción
npm run dev        # Modo desarrollo (con nodemon)
npm run export     # Exportar conceptos manualmente
```

#### Frontend
```bash
npm start          # Servidor de desarrollo
npm run build      # Build de producción
```
---

## 🔌 API REST

### Base URL
```
http://localhost:3001/api
```

### Endpoints Disponibles

#### 📄 Obtener Todos los Conceptos

```http
GET /api/conceptos
```

**Respuesta Exitosa (200):**
```json
[
  {
    "id": 1,
    "nombre": "Variables",
    "descripcion": "Espacios de memoria que almacenan datos temporales...",
    "createdAt": "2025-01-15T10:30:00.000Z",
    "updatedAt": "2025-01-15T10:30:00.000Z"
  }
]
```

---

#### 📄 Obtener Concepto por ID

```http
GET /api/conceptos/:id
```

**Parámetros:**
- `id` (number): ID del concepto

**Respuesta Exitosa (200):**
```json
{
  "id": 1,
  "nombre": "Variables",
  "descripcion": "Espacios de memoria que almacenan datos temporales..."
}
```

**Respuesta Error (404):**
```json
{
  "error": "Concepto no encontrado"
}
```

---

#### ➕ Crear Concepto

```http
POST /api/conceptos
```

**Body (JSON):**
```json
{
  "nombre": "API REST",
  "descripcion": "Arquitectura para crear servicios web..."
}
```

**Validaciones:**
- `nombre`: requerido, 3-100 caracteres
- `descripcion`: requerido, 5-500 caracteres

**Respuesta Exitosa (201):**
```json
{
  "id": 11,
  "nombre": "API REST",
  "descripcion": "Arquitectura para crear servicios web...",
  "createdAt": "2025-01-15T12:00:00.000Z",
  "updatedAt": "2025-01-15T12:00:00.000Z"
}
```

**Respuesta Error (400):**
```json
{
  "error": "Faltan campos obligatorios"
}
```

---

#### ✏️ Actualizar Concepto

```http
PUT /api/conceptos/:id
```

**Parámetros:**
- `id` (number): ID del concepto

**Body (JSON):**
```json
{
  "nombre": "API REST (Actualizado)",
  "descripcion": "Nueva descripción..."
}
```

**Respuesta Exitosa (200):**
```json
{
  "mensaje": "Actualizado correctamente"
}
```

**Respuesta Error (404):**
```json
{
  "error": "Concepto no encontrado"
}
```

---

#### 🗑️ Eliminar Concepto

```http
DELETE /api/conceptos/:id
```

**Parámetros:**
- `id` (number): ID del concepto

**Respuesta Exitosa (200):**
```json
{
  "mensaje": "Eliminado correctamente"
}
```

---

#### 🗑️ Eliminar Todos los Conceptos

```http
DELETE /api/conceptos
```

**Respuesta Exitosa (200):**
```json
{
  "mensaje": "Todos los conceptos eliminados"
}
```

---

## 🧪 Casos de Prueba

### Caso 1: Crear un Concepto Exitosamente

**Objetivo:** Verificar que se puede crear un concepto con datos válidos.

**Precondiciones:**
- Backend y frontend en ejecución
- Base de datos conectada

**Pasos:**
1. Abrir `http://localhost:3000`
2. Click en el botón "➕ Crear Concepto"
3. Completar el formulario:
   - **Nombre:** "Asincronía"
   - **Descripción:** "Modelo de ejecución que permite realizar operaciones sin bloquear el flujo principal del programa"
4. Click en "Guardar"

**Resultado Esperado:**
- ✅ Alerta: "Concepto creado correctamente"
- ✅ El modal se cierra automáticamente
- ✅ El nuevo concepto aparece en la lista
- ✅ Los campos del formulario se limpian

**Captura:**
![Crear Concepto](docs/screenshots/test-01-crear-concepto.png)

---

### Caso 2: Validación de Formulario

**Objetivo:** Verificar que las validaciones frontend funcionan correctamente.

**Pasos:**
1. Click en "➕ Crear Concepto"
2. Dejar el campo "Nombre" vacío
3. Escribir solo "abc" en "Descripción"
4. Click en "Guardar"

**Resultado Esperado:**
- ❌ Error en campo "Nombre": "El nombre es obligatorio"
- ❌ Error en campo "Descripción": "La descripción debe tener al menos 5 caracteres"
- ❌ El formulario NO se envía
- ❌ Los bordes de los campos con error se muestran en rojo

**Captura:**
![Validación Frontend](docs/screenshots/test-02-validacion-formulario.png)

---

### Caso 3: Listar Conceptos

**Objetivo:** Verificar que se muestran todos los conceptos almacenados.

**Precondiciones:**
- Al menos 3 conceptos en la base de datos

**Pasos:**
1. Abrir `http://localhost:3000`
2. Observar la lista de conceptos

**Resultado Esperado:**
- ✅ Se muestran todas las tarjetas de conceptos
- ✅ Cada tarjeta contiene:
  - ID del concepto
  - Nombre
  - Descripción
  - Botones "Editar" y "Eliminar"
- ✅ Las tarjetas tienen efecto hover
- ✅ El diseño es responsive

**Captura:**
![Listar Conceptos](docs/screenshots/test-03-listar-conceptos.png)

---

### Caso 4: Editar un Concepto

**Objetivo:** Verificar que se puede modificar un concepto existente.

**Pasos:**
1. Click en el botón "✏️ Editar" de cualquier concepto
2. Modificar el nombre a "Variables Globales"
3. Modificar la descripción
4. Click en "Actualizar"

**Resultado Esperado:**
- ✅ El modal se abre con los datos actuales
- ✅ Los cambios se guardan correctamente
- ✅ Alerta: "Concepto actualizado correctamente"
- ✅ La tarjeta se actualiza en la lista
- ✅ El modal se cierra

**Captura:**
![Editar Concepto](docs/screenshots/test-04-editar-concepto.png)

---

### Caso 5: Eliminar un Concepto

**Objetivo:** Verificar que se puede eliminar un concepto específico.

**Pasos:**
1. Click en el botón "🗑️ Eliminar" de un concepto
2. Confirmar la eliminación en el diálogo

**Resultado Esperado:**
- ✅ Aparece confirmación: "¿Eliminar este concepto?"
- ✅ Al confirmar, se elimina de la base de datos
- ✅ Alerta: "Concepto eliminado"
- ✅ La tarjeta desaparece de la lista
- ✅ La lista se actualiza automáticamente

**Captura:**
![Eliminar Concepto](docs/screenshots/test-05-eliminar-concepto.png)

---

### Caso 6: Estado de Carga

**Objetivo:** Verificar que se muestra feedback visual durante las peticiones.

**Pasos:**
1. Limpiar la caché del navegador
2. Recargar la página
3. Observar el spinner de carga

**Resultado Esperado:**
- ✅ Se muestra un spinner animado
- ✅ Mensaje: "Cargando conceptos..."
- ✅ La interfaz no se bloquea
- ✅ Al finalizar, el spinner desaparece

**Captura:**
![Estado de Carga](docs/screenshots/test-06-loading-state.png)

---

### Caso 7: Manejo de Errores de Conexión

**Objetivo:** Verificar el comportamiento cuando el backend no está disponible.

**Pasos:**
1. Detener el servidor backend (Ctrl+C)
2. Recargar la página frontend
3. Observar el mensaje de error

**Resultado Esperado:**
- ❌ Mensaje: "Error al cargar los conceptos. Por favor, intente nuevamente."
- ❌ Se muestra botón "Reintentar"
- ❌ No se rompe la aplicación

**Captura:**
![Error de Conexión](docs/screenshots/test-07-error-conexion.png)

---

### Caso 8: Responsive Design - Mobile

**Objetivo:** Verificar que la interfaz es responsive en dispositivos móviles.

**Pasos:**
1. Abrir DevTools (F12)
2. Activar modo responsive
3. Cambiar a resolución 375x667 (iPhone SE)
4. Navegar por la aplicación

**Resultado Esperado:**
- ✅ Las tarjetas se apilan verticalmente
- ✅ Los botones son fáciles de tocar
- ✅ El formulario modal ocupa toda la pantalla
- ✅ No hay scroll horizontal
- ✅ El texto es legible

**Captura:**
![Responsive Mobile](docs/screenshots/test-08-responsive-mobile.png)

---

### Caso 9: Obtener Concepto por ID (API)

**Objetivo:** Probar el endpoint GET por ID directamente.

**Método:** cURL

```bash
curl -X GET http://localhost:3001/api/conceptos/1
```

**Resultado Esperado:**
```json
{
  "id": 1,
  "nombre": "Variables",
  "descripcion": "Espacios de memoria que almacenan datos temporales durante la ejecución de un programa. Pueden contener diferentes tipos de datos como números, texto o booleanos."
}
```

**Captura:**
![API Test cURL](docs/screenshots/test-09-api-curl.png)

---

### Caso 10: Exportación Automática (Cron Job)

**Objetivo:** Verificar que la exportación automatizada funciona.

**Pasos:**
1. Ejecutar manualmente: `npm run export`
2. Verificar la carpeta `backend/exports/`
3. Abrir el archivo JSON generado

**Resultado Esperado:**
- ✅ Se crea archivo `conceptos_YYYY-MM-DD.json`
- ✅ El archivo contiene todos los conceptos en formato JSON
- ✅ La estructura del JSON es válida
- ✅ Mensaje en consola: "✅ Exportación exitosa"

**Captura:**
![Exportación JSON](docs/screenshots/test-10-exportacion.png)

---

### Caso 11: Estado Vacío (Empty State)

**Objetivo:** Verificar el comportamiento cuando no hay conceptos.

**Pasos:**
1. Eliminar todos los conceptos
2. Recargar la página

**Resultado Esperado:**
- ✅ Mensaje: "No hay conceptos registrados"
- ✅ Botón: "Crear el primero"
- ✅ Diseño centrado y amigable
- ✅ No se muestran errores

**Captura:**
![Estado Vacío](docs/screenshots/test-11-empty-state.png)

---

### Caso 12: Prueba de Integración Completa

**Objetivo:** Verificar el flujo completo de la aplicación.

**Pasos:**
1. Crear 3 conceptos nuevos
2. Editar el segundo concepto
3. Eliminar el primer concepto
4. Exportar datos manualmente
5. Verificar el archivo JSON

**Resultado Esperado:**
- ✅ Todas las operaciones se completan sin errores
- ✅ Los datos persisten correctamente en la BD
- ✅ El archivo JSON refleja el estado actual
- ✅ La interfaz se actualiza en tiempo real

**Captura:**
![Flujo Completo](docs/screenshots/test-12-flujo-completo.png)

---

## 🎨 Capturas de Pantalla

### Interfaz Principal
![Dashboard](docs/screenshots/main-dashboard.png)

### Formulario de Creación
![Crear](docs/screenshots/form-create.png)

---

## 🔧 Configuración Avanzada

### Variables de Entorno

#### Backend (.env)
```env
# Base de datos
DB_HOST=localhost
DB_NAME=AppConcepto
DB_USER=root
DB_PASS=

# Servidor
PORT=3001
NODE_ENV=development

# Exportación
EXPORT_ENABLED=true
```

#### Frontend (.env)
```env
REACT_APP_API_URL=http://localhost:3001/api
```

### Configuración de CORS

En `backend/app.js`:

```javascript
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
```

---

## 🐛 Solución de Problemas

### Error: "Cannot connect to database"

**Solución:**
1. Verificar que MySQL esté corriendo en XAMPP
2. Revisar las credenciales en `.env`
3. Crear la base de datos manualmente

### Error: "CORS policy"

**Solución:**
- Verificar que `cors` esté instalado en el backend
- Comprobar que el frontend use el puerto correcto

---

## 📚 Aprendizajes y Reflexiones



## 🤝 Contribución



## 👥 Autor

**Martin Igarzabal**

- GitHub: [@Migarzabal024](https://github.com/Migarzabal024)
- Email: migarzabal024@gmail.com

<div>
</div>