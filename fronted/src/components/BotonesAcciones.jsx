const BotonesAcciones = (onEditar, onEliminar) => {
    return (
        <>
            <div className="d-flex gap-3">
                <button className="btn btn-primary">Editar</button>
                <button className="btn btn-danger">Eliminar</button>
            </div>
        </>
    )
}

export { BotonesAcciones }