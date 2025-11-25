const express = require("express");
const cors = require("cors");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const { conectarDB } = require("./config/database"); // ← Importar función
const conceptoRoutes = require("./routes/conceptoRoutes");
const cron = require("node-cron");
require("dotenv").config();

const app = express();

// ========== MIDDLEWARES ==========
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// ========== CONFIGURAR EJS ==========
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(expressLayouts);
app.set("layout", "layout");

// ========== RUTAS ==========
app.use("/", conceptoRoutes);

// ========== CRON JOB (Viernes 22:00) ==========
cron.schedule("40 02 * * 1", () => {
    console.log("⏰ Ejecutando tarea programada: exportación de conceptos");
    require("./batch/exportador")();
});

// Exportación manual para pruebas (comentar en producción)
// app.get("/api/export", async (req, res) => {
//     try {
//         await require("./batch/exportador")();
//         res.json({ mensaje: "Exportación completada" });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// ========== MANEJO DE ERRORES GLOBAL ==========
app.use((err, req, res, next) => {
    console.error("❌ Error:", err.message);
    res.status(500).json({ error: "Error interno del servidor" });
});

// ========== INICIAR SERVIDOR ==========
const PORT = process.env.PORT || 3001;

(async () => {
    await conectarDB(); // ← Conectar a la BD antes de iniciar el servidor
    
    app.listen(PORT, () => {
        console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
        console.log(`📅 Próxima exportación: Viernes a las 22:00`);
    });
})();