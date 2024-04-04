import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { handleInputChange, handleSaveAndClose } from '../../services/hooks/useModal';
import { Game } from '../../services/types/game';

interface EditModalProps {
    showModal: boolean;
    handleCloseModal: () => void;
    handleSaveEdit: () => Promise<void>;
    editedGame: Game | null;
    setEditedGame: React.Dispatch<React.SetStateAction<Game | null>>;
}

const EditModal = ({ showModal, handleCloseModal, handleSaveEdit, editedGame, setEditedGame }: EditModalProps) => {
    const [isLoading, setIsLoading] = useState(false);

    
    return (
        <Modal show={showModal} onHide={handleCloseModal} centered>
            <Modal.Header closeButton>
                <Modal.Title>Editar Jogo</Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex flex-column align-items-center">
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
                        <input type="text" value={editedGame.ano.toString()} onChange={(e) => handleInputChange(e, 'ano', editedGame, setEditedGame)} />
                    )}
                </div>
                <div className="mb-3">
                    <p>Idade Mínima: {editedGame?.idadeMinima}</p>
                    {editedGame && (
                        <input type="text" value={editedGame.idadeMinima.toString()} onChange={(e) => handleInputChange(e, 'idadeMinima', editedGame, setEditedGame)} />
                    )}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>Cancelar</Button>
                {isLoading ? (
                    <Button variant="primary" disabled>Salvando...</Button>
                ) : (
                    <Button variant="primary" onClick={() => handleSaveAndClose(handleSaveEdit, setIsLoading, handleCloseModal)}>Salvar Edição</Button>
                )}
            </Modal.Footer>
        </Modal>
    );
}

export default EditModal;
