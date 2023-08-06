import { Usuarios } from "../../models/usuarios.js";
import { response, request } from "express";
import { generarJWT } from "../../helpers/generar-Jwt.js";
import pkg from 'bcryptjs'

export const login = async (req = request, res = response) => {
    
    const { correo, contrasena } = req.body;

    try {

        const usuario = await  Usuarios.findOne({ where: { correo } });

        if (!usuario) {
            return res.status(400).json({
                msg: 'Usuario / contraseña no son correctos '
            });
        }


        // SI el usuario está activo
        if (!usuario.estado) {
            return res.status(400).json({
                msg: 'Usuario / contraseña no son correctos  '
            });
        }

        // Verificar la contraseña
        const validPassword = pkg.compareSync(contrasena, usuario.contrasena)


        if (!validPassword) {
            return res.status(400).json({
                msg: 'Usuario / contraseña no son correctos '
            });
        }

        const token = await generarJWT(usuario.id, usuario.nombre);

        res.json({
            typeToken: "Bearer",
            token
        })

    } catch (error) {
        res.status(500).json({
            msg: "comunicate con el administrador"
        })
    }

}