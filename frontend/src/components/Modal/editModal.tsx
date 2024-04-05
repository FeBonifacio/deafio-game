import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { handleInputChange, handleSaveAndClose } from '../../services/hooks/useModal';
import { EditModalProps } from '../../services/types/EditModal';
import styled from 'styled-components';

const StyledModal = styled(Modal)`
    .modal-dialog {
        max-width: 400px;
        margin: auto;
    }

    @media (max-width: 576px) {
        .modal-dialog {
            max-width: 90%; 
            margin: 20px auto; 
    }
        .modal-content {
            border-radius: 0;
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
                <form id="create-game-form">
                    <div className="mb-3">
                        <p style={{ width: '150px' }}>Nome: {editedGame?.nome}</p>
                        {editedGame && (
                            <input type="text" id="nome" name="nome" value={editedGame.nome} onChange={(e) => handleInputChange(e, 'nome', editedGame, setEditedGame)} />
                        )}
                    </div>
                    <div className="mb-3">
                        <p style={{ width: '150px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Descrição: {editedGame?.descricao}</p>
                        {/* A entrada abaixo permite que a descrição seja editada */}
                        {editedGame && (
                            <input type="text" id="descricao" name="descricao" value={editedGame.descricao} onChange={(e) => handleInputChange(e, 'descricao', editedGame, setEditedGame)} />
                        )}
                    </div>
                    <div className="mb-3">
                        <p style={{ width: '150px' }}>Produtora: {editedGame?.produtora}</p>
                        {editedGame && (
                            <input type="text" id="produtora" name="produtora" value={editedGame.produtora} onChange={(e) => handleInputChange(e, 'produtora', editedGame, setEditedGame)} />
                        )}
                    </div>
                    <div className="mb-3">
                        <p style={{ width: '150px' }}>Ano: {editedGame?.ano}</p>
                        {editedGame && (
                            <input type="number" id="ano" name="ano" value={editedGame.ano} onChange={(e) => handleInputChange(e, 'ano', editedGame, setEditedGame)} />
                        )}
                    </div>
                    <div className="mb-3">
                        <p style={{ width: '150px' }}>Idade Mínima: {editedGame?.idadeMinima}</p>
                        {editedGame && (
                            <input type="number" id="idadeMinima" name="idadeMinima" value={editedGame.idadeMinima} onChange={(e) => handleInputChange(e, 'idadeMinima', editedGame, setEditedGame)} />
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
