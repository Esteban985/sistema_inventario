import { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form'
import { contextSistema } from '../context/contextSistema';
import { zodResolver } from '@hookform/resolvers/zod'
import { validarNuevoSchema } from '../schemas/crearNuevoProductoSchema'

const FormNuevoProducto = () => {
    const {
        initialFormState,
        onCancel,
        crearNuevoProducto,
        editando,
        editarProducto
    } = useContext(contextSistema)

    const {
        handleSubmit,
        control,
        reset,
        formState: { errors }
    } = useForm({
        defaultValues: initialFormState,
        resolver: zodResolver(validarNuevoSchema)
    })

    const onSubmit = async (data) => {
        if (editando == null) {
            await crearNuevoProducto(data)
        } else {
            await editarProducto(editando, data)
        }
    }
    

    return (
        <>
            <form
                className='form-control d-flex flex-column'
                onSubmit={handleSubmit(onSubmit)}
            >
                <Controller
                    name='codigo'
                    control={control}
                    render={({ field }) => (
                        <>
                            <label htmlFor="codigo">Codigo del producto</label>
                            <input
                                type="text"
                                placeholder='Ingrese el codigo del producto'
                                className={`form-control ${errors.codigo ? 'is-invalid' : ''}`}
                                {...field}
                            />

                            {errors.codigo && (
                                <div className='invalid-feedback'>
                                    {errors.codigo.message}
                                </div>
                            )}
                        </>
                    )}
                />

                <Controller
                    name='nombre'
                    control={control}
                    render={({ field }) => (
                        <>
                            <label htmlFor="">Nombre del producto</label>
                            <input
                                type="text"
                                placeholder='Ingrese el nombre del producto'
                                {...field}
                                className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
                            />

                            {errors.nombre && (
                                <div className='invalid-feedback'>
                                    {errors.nombre.message}
                                </div>
                            )}
                        </>
                    )}
                />

                <Controller
                    name='descripcion'
                    control={control}
                    render={({ field }) => (
                        <>
                            <label htmlFor="">Descripcion del producto</label>
                            <input
                                type="text"
                                placeholder='Ingrese la descripcion del producto'
                                {...field}
                                className={`form-control ${errors.descripcion ? 'is-invalid' : ''}`}
                            />

                            {errors.descripcion && (
                                <div className='invalid-feedback'>
                                    {errors.descripcion.message}
                                </div>
                            )}
                        </>
                    )}
                />

                <Controller
                    name='categoria'
                    control={control}
                    render={({ field }) => (
                        <>
                            <label htmlFor="">Categoria del producto</label>
                            <input
                                type="text"
                                placeholder='Ingrese la categoria del producto'
                                {...field}
                                className={`form-control ${errors.categoria ? 'is-invalid' : ''}`}
                            />

                            {errors.categoria && (
                                <div className='invalid-feedback'>
                                    {errors.categoria.message}
                                </div>
                            )}
                        </>
                    )}
                />

                <Controller
                    name='marca'
                    control={control}
                    render={({ field }) => (
                        <>
                            <label htmlFor="">Marca del producto</label>
                            <input
                                type="text"
                                placeholder='Ingrese la marca del producto'
                                {...field}
                                className={`form-control ${errors.marca ? 'is-invalid' : ''}`}
                            />

                            {errors.marca && (
                                <div className='invalid-feedback'>
                                    {errors.marca.message}
                                </div>
                            )}
                        </>
                    )}
                />

                <Controller
                    name='precio'
                    control={control}
                    render={({ field }) => (
                        <>
                            <label htmlFor="">Precio del producto</label>
                            <input
                                type="number"
                                placeholder='Ingrese el precio del producto'
                                {...field}
                                className={`form-control ${errors.precio ? 'is-invalid' : ''}`}
                            />

                            {errors.precio && (
                                <div className='invalid-feedback'>
                                    {errors.precio.message}
                                </div>
                            )}
                        </>
                    )}
                />

                <Controller
                    name='stock'
                    control={control}
                    render={({ field }) => (
                        <>
                            <label htmlFor="">Stock del producto</label>
                            <input
                                type="number"
                                placeholder='Ingrese el stock del producto'
                                {...field}
                                className={`form-control ${errors.stock ? 'is-invalid' : ''}`}
                            />

                            {errors.stock && (
                                <div className='invalid-feedback'>
                                    {errors.stock.message}
                                </div>
                            )}
                        </>
                    )}
                />

                <Controller
                    name='estado'
                    control={control}
                    render={({ field }) => (
                        <>
                            <label htmlFor="estado">Seleccione el estado del producto</label>

                            <select
                                name="estado"
                                id="estado"
                                className={`form-select ${errors.estado ? 'is-invalid' : ''}`}
                                {...field}
                                onChange={(event) => {
                                    const valorSeleccionado = event.target.value
                                    console.log(valorSeleccionado)
                                    field.onChange(valorSeleccionado)
                                }}
                            >
                                <option value="true">Activo</option>
                                <option value="">Inactivo</option>
                            </select>

                            {errors.estado && (
                                <div className='invalid-feedback'>
                                    {errors.estado.message}
                                </div>
                            )}
                        </>
                    )}
                />

                <div className='d-flex justify-content-around mt-2'>
                    <button
                        type='submit'
                        className='btn btn-info'
                    >Enviar Datos</button>
                    <button
                        className='btn btn-danger'
                        onClick={onCancel}
                    >Cancelar</button>
                </div>
            </form>
        </>
    );
}

export { FormNuevoProducto };