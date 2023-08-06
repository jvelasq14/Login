import { login } from "../../controllers/auth/login.js";
import { Router } from "express";

const router = Router();

router.post('/', login);

export default router;