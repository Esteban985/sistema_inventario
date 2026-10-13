import { useContext, useEffect, useState } from "react"
import { apiClient } from "../api/api"
import { BotonesAcciones } from "./BotonesAcciones"
import { contextSistema } from "../context/contextSistema"

const TablaProductos = () => {
    const {
        productos,
        llenarFormulario,
        setEliminar
    } = useContext(contextSistema)

    return (
        <>
            <table className="table table-bordered table-responsive-lg">
                <thead>
                    <tr>
                        <th>Código del producto</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Categoría</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map(item => (
                        <tr key={item.producto_id}>
                            <th>{item.codigo}</th>
                            <th>{item.nombre}</th>
                            <th>{item.descripcion}</th>
                            <th>{item.categoria}</th>
                            <th>{item.precio}</th>
                            <th>{item.stock}</th>
                            <th>
                                <div className={`badge ${item.estado ? 'bg-success' : 'bg-danger'}`}>
                                    {item.estado ? 'Activo' : 'Inactivo'}
                                </div>
                            </th>
                            <th>{<BotonesAcciones
                                onEliminar={() => setEliminar(item.producto_id)}
                                onEditar={() => { llenarFormulario(item.producto_id) }}
                            />}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export { TablaProductos }