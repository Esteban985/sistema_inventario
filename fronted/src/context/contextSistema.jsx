import { createContext, useState } from "react";
import { apiClient } from "../api/api";

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
    // let initialFormState = {
    //     codigo: '',
    //     nombre: '',
    //     descripcion: '',
    //     categoria: '',
    //     marca: '',
    //     precio: 0,
    //     stock: 0
    // }

    const [productos, setProductos] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [editando, setEditando] = useState(null)

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
    }

    const onOpenModal = () => {
        setOpenModal(true)
    }

    const crearNuevoProducto = async (form) => {
        console.log(form)
        try {
            await apiClient.post('/productos', form)

            await traerProductos()

            onCancel()
        } catch (error) {
            console.log(error.message)
        }
    }

    const eliminarProducto = async (id) => {
        try {
            await apiClient.delete(`productos/${id}/producto`)

            await traerProductos()
        } catch (error) {
            console.log(error.message)
        }
    }

    const traerProductos = async () => {
        const { data } = await apiClient.get('/productos')

        setProductos(data.data)
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
                estado: datos.estado,
            }

            setInitialFormState(formularioDatos)

            onOpenModal()

            setEditando(datos.producto_id)
        } catch (error) {
            console.log(error.message)
        }
    }

    const editarProducto = async (id, form) => {
        console.log(form)
        try {
            const result = await apiClient.put(`/productos/${id}/producto`, form)

            console.log(result.data.message)
            setEditando(null)

            traerProductos()

            onCancel()
        } catch (error) {
            console.log(error.response.data.message)
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
            editarProducto
        }}>
            {children}
        </contextSistema.Provider>
    )
}

export { SistemaProvider, contextSistema }