import { useContext } from "react"
import { FormNuevoProducto } from "./components/FormNuevoProducto"
import { TablaProductos } from "./components/tablaProductos"
import { contextSistema } from "./context/contextSistema"
import { ModalCustom } from "./components/Modal"


function App() {
  const {
    openModal,
    onOpenModal,
    onCancel
  } = useContext(contextSistema)

  return (
    <>
      <h1 className="text-center">Sistema de Inventario</h1>

      <div className="container mt-4 d-flex justify-content-between">
        <h2>Catalogo de productos disponibles</h2>
        <button
          onClick={onOpenModal}
          className="btn btn-primary"
        >Crear nuevo producto</button>
      </div>

      <div className="container mt-5">
        <TablaProductos />
      </div>

      {openModal &&
        <ModalCustom
          title={'Por favor ingrese los datos'}
          show={openModal}
          onHide={openModal}
          onCancel={onCancel}>
          <FormNuevoProducto btnText={'Enviar datos'} />
        </ModalCustom>}

    </>
  )
}

export default App
