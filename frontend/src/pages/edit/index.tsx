import React, { useState } from 'react';
import { useGameFilter } from '../../services/hooks/useSearch';
import useGames from '../../services/rotas/Game';
import SearchCard from '../../components/Search';
import { EditIcon } from '../../utils/icons/edit';
import { TrashIcon } from '../../utils/icons/trash';
import { useGameEdit } from '../../services/rotas/Edit';
import EditModal from '../../components/Modal';
import { Game } from '../../services/types/game';
import { Container, GameDetailsContainer, SeachInput } from './style';
import ConfirmationModal from '../../components/Modal/confirmModel';
import useHandleDeleteClick from '../../services/hooks/useDelete'; // Importe a função aqui

const EditGamePage = () => {
    const games: Game[] = useGames();
    const { filteredGames, handleFilter } = useGameFilter(games);
    const { handleEdit } = useGameEdit(); 
    const [showModal, setShowModal] = useState(false);
    const [editedGame, setEditedGame] = useState<Game | null>(null);
    const { handleDeleteClick, handleConfirmDelete, showConfirmation } = useHandleDeleteClick();

    const [gameToDelete, setGameToDelete] = useState<Game | null>(null);

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

    const handleDelete = (game: Game) => {
        setGameToDelete(game);
        handleDeleteClick(game); 
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
                                    <button className="btn btn-light" onClick={() => handleDelete(filteredGames[0])}><TrashIcon /></button>
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

            <ConfirmationModal
                show={!!gameToDelete}
                handleClose={() => setGameToDelete(null)}
                handleConfirm={handleConfirmDelete}
                message="Tem certeza que deseja deletar este jogo?"
                />
        </div>
    );
}

export default EditGamePage;
