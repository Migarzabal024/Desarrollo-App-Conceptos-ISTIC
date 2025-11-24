const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Concepto = sequelize.define("Concepto", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: {
            msg: 'Ya existe un concepto con ese nombre'
        },
        validate: {
            notEmpty: {
                msg: "El nombre no puede estar vacío"
            },
            len: {
                args: [3, 100],
                msg: "El nombre debe tener entre 3 y 100 caracteres"
            }
        }
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "La descripción no puede estar vacía"
            },
            len: {
                args: [5, 500],
                msg: "La descripción debe tener entre 5 y 500 caracteres"
            }
        }
    }
}, {
    tableName: 'conceptos',
    timestamps: false,
    updatedAt: false  // ← Solo desactiva updatedAt
});

module.exports = Concepto;
