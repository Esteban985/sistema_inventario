import { string, z } from 'zod'

const updateProductValidate = z.object({
    codigo:
        z.string('Este campo permite unicamente strings')
            .trim('Este campo es obligatorio')
            .max(20, 'Limite de digitos de 20 en el codigo del producto'),
    nombre:
        z.string('Este campo permite unicamente strings')
            .trim('Este campo es obligatorio')
            .min(3, 'El minimo es de 3 caracteres')
            .max(100, 'El maximo es de 100 caracteres'),
    categoria:
        z.string('Este campo permite unicamente strings')
            .trim('Este campo es obligatorio')
            .max(50, 'El maximo de caracteres es de 50'),
    marca:
        z.string('Este campo permite unicamente strings')
            .trim('Este campo es obligatorio')
            .max(50, 'El maximo de caracteres es de 50'),
    descripcion:
        z.string('Este campo permite unicamente strings si no desea mandar nada mande vacio'),
    precio:
        z.number()
            .nonnegative('El numero no puede ser negativo'),
    stock:
        z.int('Si desea enviar stock vacio mande 0'),
    estado:
        z.boolean('Solo se recibe TRUE O FALSE')
})

export { updateProductValidate }