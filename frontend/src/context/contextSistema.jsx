import { createContext, useState } from "react";
import { apiClient } from "../api/api";
import { sileo } from 'sileo'

const contextSistema = createContext();

const SistemaProvider = ({ children }) => {
    const [initialFormState, setInitialFormState] = useState({
        codigo: '',
        nombre: '',
        descripcion: '',
        categoria: '',
        marca: '',
        precio: 0,
        stock: 0,
        estado: true,
    })

    const [productos, setProductos] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [editando, setEditando] = useState(null)
    const [eliminar, setEliminar] = useState(null)
    const [loading, setLoading] = useState(false)

    const onCancel = () => {
        setOpenModal(false)
        setInitialFormState({
            codigo: '',
            nombre: '',
            descripcion: '',
            categoria: '',
            marca: '',
            precio: 0,
            stock: 0,
            estado: true
        })
        setEditando(null)
    }

    const onOpenModal = () => {
        setOpenModal(true)
    }

    const crearNuevoProducto = async (form) => {
        try {
            const result = await apiClient.post('/productos', form)

            await traerProductos()

            onCancel()

            sileo.success({
                title: result.data.message
            })
        } catch (error) {
            sileo.error({
                title: "Error de codigo",
                description: error.response.data.message,
            });
        }
    }

    const eliminarProducto = async (id) => {
        try {
            const result = await apiClient.delete(`productos/${id}/producto`)

            await traerProductos()

            sileo.success({
                title: result.data.message
            })

            setEliminar(null)
        } catch (error) {
            sileo.error({
                title: 'Error',
                description: error.response.data.message
            })
        }
    }

    const traerProductos = async () => {
        try {
            setLoading(true)

            const { data } = await apiClient.get('/productos')

            setProductos(data.data)
        } catch (error) {
            sileo.error({
                title: 'Error Inesperado',
                description: error.response.data.message
            })
        } finally {
            setLoading(false)
        }

    }

    const llenarFormulario = async (id) => {
        try {
            const { data } = await apiClient.get(`/productos/${id}/producto`)
            const datos = data.data[0]
            const formularioDatos = {
                codigo: datos.codigo,
                nombre: datos.nombre,
                descripcion: datos.descripcion,
                categoria: datos.categoria,
                marca: datos.marca,
                precio: datos.precio,
                stock: datos.stock,
                estado: datos.estado ? true : '',
            }

            setInitialFormState(formularioDatos)

            onOpenModal()

            setEditando(datos.producto_id)
        } catch (error) {
            sileo.error({
                title: 'Error Inesperado',
                description: error.response.data.message
            })
        }
    }

    const editarProducto = async (id, form) => {
        try {
            const result = await apiClient.put(`/productos/${id}/producto`, form)

            setEditando(null)

            traerProductos()

            onCancel()

            sileo.success({ title: result.data.message })
        } catch (error) {
            sileo.error({
                title: 'Error Inesperado',
                description: error.response.data.message
            })
        }

    }

    return (
        <contextSistema.Provider value={{
            productos,
            setProductos,
            initialFormState,
            openModal,
            onCancel,
            onOpenModal,
            crearNuevoProducto,
            eliminarProducto,
            traerProductos,
            llenarFormulario,
            editando,
            setEditando,
            editarProducto,
            eliminar,
            setEliminar,
            loading
        }}>
            {children}
        </contextSistema.Provider>
    )
}

export { SistemaProvider, contextSistema }