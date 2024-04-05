import {  useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { handleInputChange, handleSaveAndClose } from '../../services/hooks/useModal';
import { EditModalProps } from '../../services/types/EditModal';

const EditModal = ({ showModal, handleCloseModal, handleSaveEdit, editedGame, setEditedGame }: EditModalProps) => {
    const [isLoading, setIsLoading] = useState(false);

    const reloadPage = () => {
        window.location.reload();
    }

    return (
        <Modal show={showModal} onHide={handleCloseModal} centered>
            <Modal.Header closeButton>
                <Modal.Title>Editar Jogo</Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex flex-column align-items-center">
                <form id="create-game-form">
                    <div className="mb-3">
                        <p>Nome: {editedGame?.nome}</p>
                        {editedGame && (
                            <input type="text" value={editedGame.nome} onChange={(e) => handleInputChange(e, 'nome', editedGame, setEditedGame)} />
                        )}
                    </div>
                    <div className="mb-3">
                        <p>Descrição: {editedGame?.descricao}</p>
                        {editedGame && (
                            <input type="text" value={editedGame.descricao} onChange={(e) => handleInputChange(e, 'descricao', editedGame, setEditedGame)} />
                        )}
                    </div>
                    <div className="mb-3">
                        <p>Produtora: {editedGame?.produtora}</p>
                        {editedGame && (
                            <input type="text" value={editedGame.produtora} onChange={(e) => handleInputChange(e, 'produtora', editedGame, setEditedGame)} />
                        )}
                    </div>
                    <div className="mb-3">
                        <p>Ano: {editedGame?.ano}</p>
                        {editedGame && (
                            <input type="text" value={editedGame.ano} onChange={(e) => handleInputChange(e, 'ano', editedGame, setEditedGame)} />
                        )}
                    </div>
                    <div className="mb-3">
                        <p>Idade Mínima: {editedGame?.idadeMinima}</p>
                        {editedGame && (
                            <input type="text" value={editedGame.idadeMinima} onChange={(e) => handleInputChange(e, 'idadeMinima', editedGame, setEditedGame)} />
                        )}
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>Cancelar</Button>
                {isLoading ? (
                    <Button variant="primary" disabled>Salvando...</Button>
                ) : (
                    <Button variant="primary" onClick={() => 
                        handleSaveAndClose(handleSaveEdit, editedGame, setIsLoading, () => {
                            reloadPage(); 
                            handleCloseModal(); 
                        })}>Salvar Edição</Button>
                )}
            </Modal.Footer>
        </Modal>
    );
}

export default EditModal;