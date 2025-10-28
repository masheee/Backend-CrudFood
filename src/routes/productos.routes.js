import { Router } from "express";
import {
  borrarProducto,
  crearProducto,
  editarProducto,
  listarProductos,
  obtenerProducto,
  prueba,
} from "../controllers/productos.controllers.js";
import validacionProducto from "../middleware/validacionProducto.js";
/*
GET
POST
PATH O PUT
DELETE
*/

const router = Router();

router.route("/test").get(prueba);
router.route("/").post(validacionProducto,crearProducto).get(listarProductos);
router.route("/:id").get(obtenerProducto).delete(borrarProducto).put(editarProducto)

export default router;