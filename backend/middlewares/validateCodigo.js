import { pool } from "../config/database.js"

const validarCodigoDuplicado = async (req, res, next) => {
    try {
        const result = await pool.query('select codigo from productos')
        const codigos = result.rows.map(item => item.codigo)

        if (codigos.includes(req.body.codigo)) {
            return res.status(409).json({ message: 'codigo duplicado por favor cambielo' })
        }
    } catch (error) {
        throw new Error("Error al intentar validar el codigo del producto");
    }

    next()
}

export { validarCodigoDuplicado }