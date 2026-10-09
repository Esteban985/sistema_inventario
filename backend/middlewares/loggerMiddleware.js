const verificarMetodoRuta = (req, res, next) => {
    console.log(`Metodo ${req.method}`)
    console.log(`Ruta ${req.url}`)

    next()
}

export { verificarMetodoRuta }