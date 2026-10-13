import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalCustom = ({ show, onHide, children, title }) => {
    return (
        <Modal
            show={true}
            onHide={true}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            </Modal.Body>
            <Modal.Footer>
                <Button>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export { ModalCustom }