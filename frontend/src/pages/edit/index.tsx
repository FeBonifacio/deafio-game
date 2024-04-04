import React, { useState } from 'react';
import { useGameFilter } from '../../services/hooks/useSearch';
import useGames from '../../services/hooks/useGame';
import SearchCard from '../../components/Search';
import styled from 'styled-components';
import { EditIcon } from '../../utils/icons/edit';
import { TrashIcon } from '../../utils/icons/trash';
import { useGameEdit } from '../../services/hooks/useEdit';
import EditModal from '../../components/Modal'; // Importação corrigida
import { Game } from '../../services/types/game';

const SeachInput = styled.div`
    width: 50%;
    margin: 10px;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
`;

const GameDetailsContainer = styled.div`
    width: 450px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
    
    .buttons-container {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .buttons-container button {
        margin-right: 5px; 
    }

    &:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
`;

const EditGamePage = () => {
    const games: Game[] = useGames();
    const { filteredGames, handleFilter } = useGameFilter(games);
    const { handleEdit } = useGameEdit(); 
    const [showModal, setShowModal] = useState(false);
    const [editedGame, setEditedGame] = useState<Game | null>(null);

    const handleEditClick = (game: Game) => {
        setEditedGame(game);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSaveEdit = async () => {
        if (editedGame) {
            await handleEdit(editedGame);
            setShowModal(false);
        }
    };

    return (
        <div>
            <SeachInput>
                <h1>Pesquise Por ID para editar ou excluir</h1>
                <SearchCard handleFilter={handleFilter} /> 
            </SeachInput>
            <Container>
                {filteredGames.length > 0 ? (
                    <GameDetailsContainer key={filteredGames[0].id}>
                        <div className="card">
                            <div className="card-body">
                                <div className="buttons-container">
                                    <button className="btn btn-light" onClick={() => handleEditClick(filteredGames[0])}><EditIcon /></button>
                                    <button className="btn btn-light"><TrashIcon /></button>
                                </div>
                                <div>
                                    <h3 className="card-title">{filteredGames[0].nome}</h3>
                                    <h5 className="card-title">{filteredGames[0].id}</h5>
                                </div>
                                <p className="card-text">{filteredGames[0].descricao}</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Produtora: {filteredGames[0].produtora}</li>
                                    <li className="list-group-item">Ano: {filteredGames[0].ano}</li>
                                    <li className="list-group-item">Idade Mínima: {filteredGames[0].idadeMinima}</li>
                                </ul>
                            </div>
                        </div>
                    </GameDetailsContainer>
                ) : (
                    <p>Nenhum jogo encontrado.</p>
                )}
            </Container>

            <EditModal 
                showModal={showModal} 
                handleCloseModal={handleCloseModal} 
                handleSaveEdit={handleSaveEdit} 
                editedGame={editedGame} 
                setEditedGame={setEditedGame} 
            />
        </div>
    );
}

export default EditGamePage;
