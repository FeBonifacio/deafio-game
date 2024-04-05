import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { handleInputChange, handleSaveAndClose } from '../../services/hooks/useModal';
import { EditModalProps } from '../../services/types/EditModal';
import styled from 'styled-components';
import { useFormValidation } from '../../utils/useFormValidation';


const StyledModal = styled(Modal)`
    @media (max-width: 800px) {
        .modal-dialog {
            max-width: 80%;
            margin: auto;
        }
    }
`;

const EditModal = ({ showModal, handleCloseModal, handleSaveEdit, editedGame, setEditedGame }: EditModalProps) => {
    const [isLoading, setIsLoading] = useState(false);

    const reloadPage = () => {
        window.location.reload();
    }

    return (
        <StyledModal show={showModal} onHide={handleCloseModal} centered>
            <Modal.Header closeButton>
                <Modal.Title>Editar Jogo</Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex flex-column align-items-center">
                <form id="create-game-form" >
                    <div className="mb-3">
                        <p>Nome: {editedGame?.nome}</p>
                        {editedGame && (
                            <input type="text" id="nome" name="nome" value={editedGame.nome} onChange={(e) => handleInputChange(e, 'nome', editedGame, setEditedGame)} />
                        )}
                    </div>
                    <div className="mb-3">
                        <p>Descrição: {editedGame?.descricao}</p>
                        {editedGame && (
                            <input type="text" id="descricao" name="descricao" value={editedGame.descricao} onChange={(e) => handleInputChange(e, 'descricao', editedGame, setEditedGame)} />
                        )}
                    </div>
                    <div className="mb-3">
                        <p>Produtora: {editedGame?.produtora}</p>
                        {editedGame && (
                            <input type="text" id="produtora" name="produtora" value={editedGame.produtora} onChange={(e) => handleInputChange(e, 'produtora', editedGame, setEditedGame)} />
                        )}
                    </div>
                    <div className="mb-3">
                        <p>Ano: {editedGame?.ano}</p>
                        {editedGame && (
                            <input type="text" id="ano" name="ano" value={editedGame.ano} onChange={(e) => handleInputChange(e, 'ano', editedGame, setEditedGame)} />
                        )}
                    </div>
                    <div className="mb-3">
                        <p>Idade Mínima: {editedGame?.idadeMinima}</p>
                        {editedGame && (
                            <input type="text" id="idadeMinima" name="idadeMinima" value={editedGame.idadeMinima} onChange={(e) => handleInputChange(e, 'idadeMinima', editedGame, setEditedGame)} />
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
        </StyledModal>
    );
}

export default EditModal;
