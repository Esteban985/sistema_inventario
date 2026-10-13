import express from 'express'
import { verificarMetodoRuta } from './middlewares/loggerMiddleware.js';
import { pool } from './config/database.js';
import { productosRouter } from './routes/productosRoute.js';
import { errorHandler } from './middlewares/errorHandler.js';
import cors from 'cors'

const app = express();

app.use(cors())

app.use(express.json())

//Para verificar que ruta y metodo se usa
app.use(verificarMetodoRuta)

//Rutas
app.use('/api/productos', productosRouter)

//Manejador de errores global
app.use(errorHandler)

//Prueba de conexion para bd
try {
    await pool.query('Select 1')
    console.log('PostgresSQL conectado')

    app.listen(process.env.PORT, () => {
        console.log('El servidor se esta ejecutando')
    })
} catch (error) {
    console.log('Error al conectar postgres')
    await pool.end()
}