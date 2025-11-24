// backend/controllers/conceptoController.js

const servicio = require("../services/conceptoService");

module.exports = {
    // ========== VISTAS EJS ==========
    async vistaListado(req, res) {
        try {
            const conceptos = await servicio.obtenerTodos();
            res.render("conceptos", { 
                title: "Listado de Conceptos", 
                conceptos
            });
        } catch (error) {
            console.error("Error en vistaListado:", error.message);
            res.status(500).send("Error al cargar los conceptos");
        }
    },

    vistaCrear(req, res) {
        try {
            res.render("crear", { 
                title: "Crear Concepto"
            });
        } catch (error) {
            console.error("Error en vistaCrear:", error.message);
            res.status(500).send("Error al cargar el formulario");
        }
    },

    async vistaEditar(req, res) {
        try {
            const concepto = await servicio.obtenerPorId(req.params.id);
            if (!concepto) {
                return res.status(404).send("Concepto no encontrado");
            }
            res.render("editar", { 
                title: "Editar Concepto", 
                concepto
            });
        } catch (error) {
            console.error("Error en vistaEditar:", error.message);
            res.status(500).send("Error al cargar el concepto");
        }
    },

    async vistaEliminar(req, res) {
        try {
            const concepto = await servicio.obtenerPorId(req.params.id);
            if (!concepto) {
                return res.status(404).send("Concepto no encontrado");
            }
            res.render("eliminar", { 
                title: "Eliminar Concepto", 
                concepto
            });
        } catch (error) {
            console.error("Error en vistaEliminar:", error.message);
            res.status(500).send("Error al cargar el concepto");
        }
    },

    // ========== FORMULARIOS EJS (POST tradicional) ==========
    async postCrear(req, res) {
        try {
            await servicio.crear(req.body);
            res.redirect("/conceptos");
        } catch (error) {
            console.error("Error en postCrear:", error.message);
            res.status(500).send("Error al crear el concepto");
        }
    },

    async postEditar(req, res) {
        try {
            await servicio.actualizar(req.params.id, req.body);
            res.redirect("/conceptos");
        } catch (error) {
            console.error("Error en postEditar:", error.message);
            res.status(500).send("Error al actualizar el concepto");
        }
    },

    async postEliminarForm(req, res) {
        try {
            const eliminado = await servicio.eliminar(req.params.id);
            if (eliminado === 0) {
                return res.status(404).send("Concepto no encontrado");
            }
            res.redirect("/conceptos");
        } catch (error) {
            console.error("Error en postEliminarForm:", error.message);
            res.status(500).send("Error al eliminar el concepto");
        }
    },

    // ========== API REST (JSON) ==========
    async apiListar(req, res) {
        try {
            const conceptos = await servicio.obtenerTodos();
            res.json(conceptos);
        } catch (error) {
            console.error("Error en apiListar:", error.message);
            res.status(500).json({ error: "Error al obtener conceptos" });
        }
    },

    async apiObtenerPorId(req, res) {
        try {
            const concepto = await servicio.obtenerPorId(req.params.id);
            if (!concepto) {
                return res.status(404).json({ error: "Concepto no encontrado" });
            }
            res.json(concepto);
        } catch (error) {
            console.error("Error en apiObtenerPorId:", error.message);
            res.status(500).json({ error: "Error al obtener el concepto" });
        }
    },

    async apiCrear(req, res) {
        try {
            const { nombre, descripcion } = req.body;
            if (!nombre || !descripcion) {
                return res.status(400).json({ error: "Faltan campos obligatorios" });
            }
            const nuevo = await servicio.crear(req.body);
            res.status(201).json(nuevo);
        } catch (error) {
            if (error.name === 'SequelizeUniqueConstraintError') {
                return res.status(409).json({ 
                    error: "Ya existe un concepto con ese nombre" 
                });
            }
            console.error("Error en apiCrear:", error.message);
            res.status(500).json({ error: "Error al crear el concepto" });
        }
    },

    async apiActualizar(req, res) {
        try {
            const [actualizado] = await servicio.actualizar(req.params.id, req.body);
            if (actualizado === 0) {
                return res.status(404).json({ error: "Concepto no encontrado" });
            }
            res.json({ mensaje: "Actualizado correctamente" });
        } catch (error) {
            console.error("Error en apiActualizar:", error.message);
            res.status(500).json({ error: "Error al actualizar el concepto" });
        }
    },

    async apiEliminar(req, res) {
        try {
            const eliminado = await servicio.eliminar(req.params.id);
            if (eliminado === 0) {
                return res.status(404).json({ error: "Concepto no encontrado" });
            }
            res.json({ mensaje: "Eliminado correctamente" });
        } catch (error) {
            console.error("Error en apiEliminar:", error.message);
            res.status(500).json({ error: "Error al eliminar el concepto" });
        }
    },

    async apiEliminarTodos(req, res) {
        try {
            await servicio.eliminarTodos();
            res.json({ mensaje: "Todos los conceptos eliminados" });
        } catch (error) {
            console.error("Error en apiEliminarTodos:", error.message);
            res.status(500).json({ error: "Error al eliminar conceptos" });
        }
    }
};