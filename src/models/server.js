import express from "express";
import cors from "cors";
import conection from "../db/conexion.js"

import { PORT } from "../../config.js";

import RoutesUsuarios  from "../routes/usuarios.js";
import RoutesLogin  from "../routes/auth/login.js";

class Server{
    constructor() {
        this.apiPaths = {
            usuarios: '/api/usuarios',
            login: '/api/login'
        };

        this.app = express();
        this.port = PORT

        // Métodos iniciales
        this.dbConnection();
        this.middlewares(); 
        this.routes();
    }
    async dbConnection() {

        try {
            await conection.authenticate();
            console.log('Database online');
        }
        catch (error) {
            console.log(error);
        }
    }
    middlewares() {
        // CORS
        this.app.use(cors());
        // Lectura del body
        this.app.use(express.json());
    }
    routes() {
         this.app.use(this.apiPaths.usuarios, RoutesUsuarios);
         this.app.use(this.apiPaths.login, RoutesLogin);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        });
    }
}

export default Server;