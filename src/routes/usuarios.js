import { crearUsuarios } from "../controllers/usuarios.js";
import { Router } from "express";
const router = Router();

router.post('/', crearUsuarios);

export default router;