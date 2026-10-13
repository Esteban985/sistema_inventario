const errorHandler = (error, req, res, next) => {
    if (error.message == 'Codigo duplicado por favor cambielo') {
        return res.status(409).json({
            message: error.message
        })
    }
    res.status(500).json({
        message: error.message
    })
}

export { errorHandler }