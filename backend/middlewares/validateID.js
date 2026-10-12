import { pool } from "../config/database.js"

const validarID = async (req, res, next) => {
    if (req.params.id <= 0) {
        return res.status(400).json({
            message: 'ID invalido'
        })
    }

    try {
        const resultado = await pool.query(`select * from productos where producto_id = ${req.params.id}`)
        if (resultado.rows.length == 0) {
            return res.status(404).json({ message: 'ID del producto inexistente, por favor ingrese uno existente' })
        }
    } catch (error) {
        throw new Error('Error al validar el ID');
    }

    next()
}

export { validarID }