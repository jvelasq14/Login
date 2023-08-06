import { DataTypes } from "sequelize";
import sequelize from "../db/conexion.js";

export const Usuarios = sequelize.define("usuarios",
    {
        id: {
            type: DataTypes.INTEGER, 
            primaryKey: true,
            autoIncrement: true,
        },
        user_name: {
            type: DataTypes.STRING
        },
        nombre: {
            type: DataTypes.STRING
        },
        correo: {
            type: DataTypes.STRING
        },
        contrasena: {
            type: DataTypes.STRING
        },
        estado: {
            type: DataTypes.INTEGER
        },
        fecha_creacion: {
            type: DataTypes.DATE
        },

    },
    {
        timestamps: false,
    }
);

