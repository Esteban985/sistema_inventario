import { Router } from "express";
import { createProduct, deleteProduct, getProductoID, getProductos, updateProduct } from "../controllers/productosController.js";
import { validateCreation } from "../middlewares/validateCreationMiddleware.js";
import { createProductValidate } from "../schemas/crearProductoEschema.js";
import { updateProductValidate } from "../schemas/updateProductEschema.js";
import { validarID } from "../middlewares/validateID.js";

const productosRouter = Router();

productosRouter.get('/', getProductos)
productosRouter.get('/:id/producto', validarID, getProductoID)
productosRouter.post('/', [validateCreation(createProductValidate)], createProduct)
productosRouter.put('/:id/producto', [validarID, validateCreation(updateProductValidate)], updateProduct)
productosRouter.delete('/:id/producto', validarID, deleteProduct)

export { productosRouter }