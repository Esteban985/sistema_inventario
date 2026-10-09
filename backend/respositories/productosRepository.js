import { pool } from "../config/database.js"

const traerProductos = async () => {
    try {
        const result = await pool.query('Select * from productos')

        return result.rows
    } catch (error) {
        throw new Error('Error al intentar seleccionar los productos')
    }
}

const traerProductoEspecifico = async (id) => {
    try {
        const result = await pool.query(`Select * from productos where producto_id = ${id}`)

        return result.rows
    } catch (error) {
        throw new Error('Error al intentar seleccionar el producto')
    }
}

const crearProductoQuery = async (producto) => {
    const result = await pool.query(`select codigo from productos`)

    const codigosExistentes = result.rows.map(item => item.codigo)

    if (codigosExistentes.includes(producto.codigo)) {
        throw new Error('El codigo ingresado ya existe por favor cambialo')
    }

    try {
        const result = await pool.query(`insert into productos (codigo, nombre, descripcion, categoria, marca, precio, stock) values ('${producto.codigo}','${producto.nombre}', '${producto.descripcion}','${producto.categoria}','${producto.marca}',${producto.precio},${producto.stock})`)

        return result.rows
    } catch (error) {
        throw new Error('Error al intentar crear el producto')
    }
}

const actualizarProducto = async (id, producto) => {
    try {
        await pool.query(`update productos set codigo = '${producto.codigo}', nombre='${producto.nombre}', descripcion='${producto.descripcion}', categoria='${producto.categoria}', marca='${producto.marca}', precio=${producto.precio}, stock=${producto.stock}, estado=${producto.estado} where producto_id = ${id}`)
    } catch (error) {
        throw new Error('Error al intentar actualizar el producto')
    }
}

const eliminarProductoID = async (id) => {
    try {
        await pool.query(`delete from productos where producto_id = ${id}`)
    } catch (error) {
        throw new Error('Error al intentar eliminar el producto')
    }
}

export {
    traerProductos,
    traerProductoEspecifico,
    crearProductoQuery,
    actualizarProducto,
    eliminarProductoID
}