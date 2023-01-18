import  express  from "express"
import {
    obtenerProyectos,
    obtenerProyecto,
    nuevoProyecto,
    eliminarColaborador,  
    eliminarProyectos,
    editarProyectos,
    agregarColaborador,
    buscarColaborador
} from "../controllers/proyectoController.js"

import checkAuth from "../middleware/checkAuth.js"

const router = express.Router()

router
    .route("/")
    .get(checkAuth, obtenerProyectos)
    .post(checkAuth, nuevoProyecto);

router
    .route("/:id")
    .get(checkAuth, obtenerProyecto)
    .put(checkAuth, editarProyectos)
    .delete(checkAuth, eliminarProyectos);

router.post("/colaboradores", checkAuth, buscarColaborador);
router.post("/colaboradores/:id", checkAuth, agregarColaborador);
router.post("/eliminar-colaborador/:id", checkAuth, eliminarColaborador)


export default router;



