import express from "express";
const router = express.Router()

import {registrar, autenticar, confirmar, olvidePassword,comprobarToken, nuevoPassword,perfil } from "../controllers/usuarioControllers.js"
import checkAuth from "../middleware/checkAuth.js"

//Creacion, Registro y confirmacion de usuarios

router.post("/", registrar) // crear usuario
router.post("/login", autenticar) // crear usuario
router.get("/confirmar/:token", confirmar) // confirmar usuario
router.post("/olvide-password", olvidePassword) // recuperar password

/* router.get("/olvide-password/:token", comprobarToken) // recuperar password
router.post("/olvide-password/:token", nuevoPassword) // nueva contraseña password */

router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword) // mismo codigo que el anterior mas compacto

router.get("/perfil", checkAuth, perfil)





export default router;