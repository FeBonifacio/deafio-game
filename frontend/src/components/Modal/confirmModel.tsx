import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ConfirmationModalProps } from '../../services/types/QuestModal';

const ConfirmationModal = ({ show, handleClose, handleConfirm, message }: ConfirmationModalProps) => {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Confirmação</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{message}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
                <Button variant="primary" onClick={handleConfirm}>Sim</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ConfirmationModal;
