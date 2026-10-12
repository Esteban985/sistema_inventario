import { actualizarProducto, crearProductoQuery, eliminarProductoID, traerProductoEspecifico, traerProductos } from "../respositories/productosRepository.js"

const getProductos = async (req, res) => {
    const productos = await traerProductos()

    res.status(200).json({
        data: productos
    })
}

const getProductoID = async (req, res) => {
    const producto = await traerProductoEspecifico(req.params.id)

    res.status(200).json({
        data: producto
    })
}

const createProduct = async (req, res) => {
    await crearProductoQuery(req.body)

    res.status(201).json({
        message: 'Producto creado correctamente'
    })
}

const updateProduct = async (req, res) => {
    const result = await actualizarProducto(req.params.id, req.body)

    res.status(200).json({
        message: 'Producto actualizado correctamente'
    })
}

const deleteProduct = async (req, res) => {
    const result = await eliminarProductoID(req.params.id)

    res.status(200).json({
        message: 'Producto eliminado correctamente'
    })
}

export {
    getProductos,
    getProductoID,
    createProduct,
    updateProduct,
    deleteProduct
}