import { useEffect, useState } from "react"
import { apiClient } from "../api/api"
import { BotonesAcciones } from "./BotonesAcciones"

const TablaProductos = () => {
    const [productos, setProductos] = useState([])

    const traerProductos = async () => {
        const { data } = await apiClient.get('/')

        setProductos(data.data)
    }
    useEffect(() => {
        traerProductos()
    }, [])

    return (
        <>
            <table className="table table-bordered table-responsive-lg">
                <thead>
                    <tr>
                        <th>Código del producto</th>
                        <th>Nombre</th>
                        <th>Categoría</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos?.map(item => (
                        <tr key={item.producto_id}>
                            <th>{item.codigo}</th>
                            <th>{item.nombre}</th>
                            <th>{item.categoria}</th>
                            <th>{item.precio}</th>
                            <th>{item.stock}</th>
                            <th>{item.estado ? 'Activo' : 'Inactivo'}</th>
                            <th>{<BotonesAcciones />}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export { TablaProductos }