import { Router } from "express"
import { prueba, crearProducto, listarProductos, obtenerProducto, borrarProducto } from "../controllers/productos.controllers.js";

/*
GET
POST
PATH O PUT 
DELETE
*/

const router = Router()

router.route('/test').get(prueba)
router.route('/').post(crearProducto).get(listarProductos)
router.route('/:id').get(obtenerProducto).delete(borrarProducto)


export default router;