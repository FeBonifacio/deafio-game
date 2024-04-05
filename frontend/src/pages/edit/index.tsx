import React, { useState } from 'react';
import { useGameFilter } from '../../services/hooks/useSearch';
import useGames from '../../services/rotas/Game';
import SearchCard from '../../components/Search';
import { EditIcon } from '../../utils/icons/edit';
import { TrashIcon } from '../../utils/icons/trash';
import { useGameEdit } from '../../services/rotas/Edit';
import EditModal from '../../components/Modal/editModal';
import { Game } from '../../services/types/Game';
import { Container, ContianerDiv, GameDetailsContainer, SeachInput } from './style';
import ConfirmationModal from '../../components/Modal/confirmModel';
import useHandleDeleteClick from '../../services/hooks/useDelete';
import useEditGameFunctions from '../../services/hooks/useEdit'; // Importe o hook personalizado aqui

const EditGamePage = () => {
    const games: Game[] = useGames();
    const { filteredGames, handleFilter } = useGameFilter(games);
    const { handleEdit } = useGameEdit(); 
    const { showModal, editedGame, handleEditClick, handleCloseModal, handleSaveEdit, setEditedGame } = useEditGameFunctions(handleEdit);

    const { handleDeleteClick, handleConfirmDelete } = useHandleDeleteClick();

    const [gameToDelete, setGameToDelete] = useState<Game | null>(null);

    const handleDelete = (game: Game) => {
        setGameToDelete(game);
        handleDeleteClick(game); 
    };

    return (
        <ContianerDiv>
            <SeachInput>
                <h1 className="text-light">Pesquise Por ID</h1>
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
                                <div className="details-wrapper">
                                    <div>
                                        <h3 className="card-title">{filteredGames[0].nome}</h3>
                                    </div>
                                    <div>
                                        <h5 className="card-title">{filteredGames[0].id}</h5>
                                    </div>
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
                    <h2 className="mb-0 pt-5 text-black">Nenhum jogo encontrado</h2>
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
        </ContianerDiv>
    );
}

export default EditGamePage;