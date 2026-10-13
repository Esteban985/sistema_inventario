import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { sileo, Toaster } from 'sileo'

const ModalCustom = ({ show, onCancel, children, title, size }) => {
    return (
        <>
            <Modal
                show={show}
                onHide={onCancel}
                size={size}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Toaster position='top-center' />
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {children}
                </Modal.Body>
            </Modal>
        </>
    )
}

export { ModalCustom }