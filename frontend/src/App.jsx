import { useContext, useEffect } from "react"
import { FormNuevoProducto } from "./components/FormNuevoProducto"
import { TablaProductos } from "./components/tablaProductos"
import { contextSistema } from "./context/contextSistema"
import { ModalCustom } from "./components/Modal"
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

function App() {
  const {
    openModal,
    onOpenModal,
    onCancel,
    eliminar,
    setEliminar,
    eliminarProducto,
    loading,
    traerProductos,
    productos
  } = useContext(contextSistema)

  useEffect(() => {
    traerProductos()
  }, [])

  return (
    <>
      <h1 className="text-center mt-5 mb-5">Sistema de Inventario</h1>

      <div className="container d-flex justify-content-between mt-5 mb-5">
        <h2>Catalogo de productos disponibles</h2>
        <button
          onClick={onOpenModal}
          className="btn btn-primary"
        >Crear nuevo producto</button>
      </div>

      <div className="container mt-5 d-flex justify-content-center">
        {productos.length == 0 ?
          (<h1>No hay productos, Agregue uno!</h1>) :
          (
            loading ?
              (
                <Box sx={{ width: 1050 }}>
                  <Skeleton height={100} />
                  <Skeleton animation="wave" height={300} />
                  <Skeleton animation={false} height={80} />
                  <Skeleton animation={false} height={100} />
                </Box>
              ) :
              (<TablaProductos />)
          )}

      </div>

      {openModal &&
        <ModalCustom
          title={'Por favor ingrese los datos'}
          show={openModal}
          onHide={openModal}
          onCancel={onCancel}
          size={'lg'}
        >
          <FormNuevoProducto btnText={'Enviar datos'} />
        </ModalCustom>}

      {eliminar &&
        <ModalCustom
          title={'Eliminacion'}
          show={true}
          onHide={() => setEliminar(null)}
          onCancel={() => setEliminar(null)}
          size={'ms'}
        >
          <div className=" d-flex flex-column justify-content-center">
            <span className=" text-danger text-center">¿Estas seguro que deseas eliminar el producto?</span>
            <div className="d-flex justify-content-around mt-5">
              <button
                className="btn btn-danger"
                onClick={() => eliminarProducto(eliminar)}
              >Si, eliminar</button>
              <button
                className="btn btn-primary"
                onClick={() => setEliminar(null)}
              >No, Regresar</button>
            </div>
          </div>
        </ModalCustom>
      }

    </>
  )
}

export default App
