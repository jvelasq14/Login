import { Usuarios } from "../models/usuarios.js";
import { response, request } from "express";
import { generarJWT } from "../helpers/generar-Jwt.js";
import pkg from 'bcryptjs'

export const crearUsuarios = async (req = request, res = response) => {

    const fecha_creacion = new Date();
    const { user_name, nombre, correo, contrasena, estado } = req.body;

    const correos = await Usuarios.findOne({ where: { correo } });
    const username = await Usuarios.findOne({ where: { user_name } });

    const usuario = new Usuarios({ user_name, nombre, correo, contrasena, estado, fecha_creacion });

    if (username) {
        res.json({
            msg: "Username ya existe"
        })
    } else {
        if (correos) {
            res.json({
                msg: "Usuario ya existe"
            }) 
        } else {

            // Encriptar la contraseña
            const salt = pkg.genSaltSync(12);
            usuario.contraseña = pkg.hashSync(contrasena, salt);

            // Guardar en BD
            await usuario.save();

            const token = await generarJWT(usuario.id, usuario.nombre);

            res.json({
                typeToken: "Bearer",
                token,
                usuario
            })
        } 

    }



}

