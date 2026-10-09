import z from "zod"

const validateCreation = (schema) => {
    return (req, res, next) => {
        const result = schema.safeParse(req.body)

        if (!result.success) {
            const errores = z.flattenError(result.error)

            return res.status(400).json({
                message: 'Error de validacion',
                errors: errores
            })
        }

        req.body = result.data
        next()
    }
}

export { validateCreation }