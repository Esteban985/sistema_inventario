import { createContext, useState } from "react";
import { apiClient } from "../api/api";

const contextSistema = createContext();

const SistemaProvider = ({ children }) => {
    const initialFormState = {
        codigo: '',
        nombre: '',
        descripcion: '',
        categoria: '',
        marca: '',
        precio: 0,
        stock: 0
    }

    const [openModal, setOpenModal] = useState(true)

    return (
        <contextSistema.Provider value={{
            initialFormState,
            openModal,
            setOpenModal
        }}>
        </contextSistema.Provider>
    )
}

export { SistemaProvider, contextSistema }