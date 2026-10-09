import { Router } from "express";
import { createProduct, deleteProduct, getProductoID, getProductos, updateProduct } from "../controllers/productosController.js";
import { validateCreation } from "../middlewares/validateCreationMiddleware.js";
import { createProductValidate } from "../schemas/crearProductoEschema.js";
import { updateProductValidate } from "../schemas/updateProductEschema.js";

const productosRouter = Router();

productosRouter.get('/', getProductos)
productosRouter.get('/:id/producto', getProductoID)
productosRouter.post('/', validateCreation(createProductValidate), createProduct)
productosRouter.put('/:id/producto', validateCreation(updateProductValidate), updateProduct)
productosRouter.delete('/:id/producto', deleteProduct)

export { productosRouter }