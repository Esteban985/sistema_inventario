import { z } from 'zod'

export const validarNuevoSchema = z.object({
    codigo: z
        .string()
        .trim()
        .min(1, 'Por favor ingrese un codigo para el producto')
        .max(20, 'El maximo es de 20 caracteres'),
    nombre: z
        .string()
        .trim()
        .min(3, 'Por favor ingrese el nombre del producto, minimo 3 digitos.')
        .max(100, 'El maximo para un nombre es de 100 caracteres'),
    descripcion: z
        .string()
        .trim(),
    categoria: z
        .string()
        .trim()
        .min(1, 'Por favor ingrese la categoria')
        .max(50, 'El maximo es de 50 caracteres'),
    marca: z
        .string()
        .trim()
        .min(1, 'Por favor ingrese la marca')
        .max(50, 'El maximo es de 50 caracteres'),
    precio: z
        .coerce
        .number()
        .positive('El numero no puede ser 0')
        .nonnegative('El numero no puede ser negativo'),
    stock: z
        .coerce
        .number()
        .nonnegative('El numero no puede ser negativo'),
    estado: z
        .coerce
        .boolean('Solo se recibe Activo o Inactivo.')
})