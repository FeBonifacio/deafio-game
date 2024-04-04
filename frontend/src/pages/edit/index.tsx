import React, { useState } from 'react';
import { useGameFilter } from '../../services/hooks/useSearch';
import useGames from '../../services/hooks/useGame';
import SearchCard from '../../components/Search';
import { EditIcon } from '../../utils/icons/edit';
import { TrashIcon } from '../../utils/icons/trash';
import { useGameEdit } from '../../services/hooks/useEdit';
import EditModal from '../../components/Modal';
import { Game } from '../../services/types/game';
import useGameDelete from '../../services/hooks/useDelete';
import { Container, GameDetailsContainer, SeachInput } from './style';


const EditGamePage = () => {
    const games: Game[] = useGames();
    const { filteredGames, handleFilter } = useGameFilter(games);
    const { handleEdit } = useGameEdit(); 
    const { handleDelete } = useGameDelete();
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

    const handleDeleteClick = async (id: number) => {
        try {
            await handleDelete(id);
            console.log("Exclusão concluída com sucesso.");
        } catch (error) {
            console.error('Erro ao excluir o jogo:', error);
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
                                    <button className="btn btn-light" onClick={() => handleDeleteClick(filteredGames[0].id)}><TrashIcon /></button>
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
