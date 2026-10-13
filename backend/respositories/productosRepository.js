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
    try {
        const result = await pool.query(`insert into productos (codigo, nombre, descripcion, categoria, marca, precio, stock, estado) values ('${producto.codigo}','${producto.nombre}', '${producto.descripcion}','${producto.categoria}','${producto.marca}',${producto.precio},${producto.stock},${producto.estado ? true : false})`)

        return result.rows
    } catch (error) {
        if (error.code == 23505) {
            throw new Error('Codigo duplicado por favor cambielo')
        } else {
            throw new Error('Error al crear un nuevo producto')
        }
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