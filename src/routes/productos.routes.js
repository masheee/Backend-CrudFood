import { Router } from "express"
import { prueba, crearProducto, listarProductos, obtenerProducto, borrarProducto, editarProducto } from "../controllers/productos.controllers.js";

/*
GET
POST
PATH O PUT 
DELETE
*/

const router = Router()

router.route('/test').get(prueba)
router.route('/').post(crearProducto).get(listarProductos)
router.route('/:id').get(obtenerProducto).delete(borrarProducto).put(editarProducto)


export default router;