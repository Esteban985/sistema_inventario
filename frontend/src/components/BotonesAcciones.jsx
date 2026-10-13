const BotonesAcciones = ({ onEditar, onEliminar }) => {
    return (
        <>
            <div className="d-flex gap-3">
                <button
                    onClick={onEditar}
                    className="btn btn-primary"
                >Editar</button>
                <button
                    onClick={onEliminar}
                    className="btn btn-danger"
                >Eliminar</button>
            </div>
        </>
    )
}

export { BotonesAcciones }