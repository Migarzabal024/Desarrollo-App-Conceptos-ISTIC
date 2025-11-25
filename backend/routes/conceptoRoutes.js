// backend/routes/conceptoRoutes.js
const express = require("express");
const router = express.Router();
const controller = require("../controllers/conceptoController");

// ========== VISTAS EJS (solo GET) ==========
router.get("/", controller.vistaListado);
router.get("/conceptos", controller.vistaListado);
router.get("/conceptos/crear", controller.vistaCrear);
router.get("/conceptos/editar/:id", controller.vistaEditar);
router.get("/conceptos/eliminar/:id", controller.vistaEliminar);

// ========== API REST (todos los formularios usan estas rutas) ==========
router.get("/api/conceptos", controller.apiListar);
router.get("/api/conceptos/:id", controller.apiObtenerPorId);
router.post("/api/conceptos", controller.apiCrear);
router.put("/api/conceptos/:id", controller.apiActualizar);
router.delete("/api/conceptos/:id", controller.apiEliminar);
router.delete("/api/conceptos", controller.apiEliminarTodos);

module.exports = router;