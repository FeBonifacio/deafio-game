import { useState } from 'react';
import axios from 'axios';
import { Game } from '../types/Game';

const useGameEdit = () => {
    const [showModal, setShowModal] = useState(false);
    const [editedGame, setEditedGame] = useState<Game | null>(null);

    const handleEdit = async (game: Game) => {
        try {
            const response = await axios.put(`http://localhost:3000/`, game);
            if (response.data === true) {
                console.log('Jogo editado com sucesso!');
            } else {
                console.error('Falhou em editar o jogo');
            }
        } catch (error) {
            console.error('Erro ao editar o jogo:', error);
        }
    };

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

    return {
        showModal,
        editedGame,
        handleEditClick,
        handleCloseModal,
        handleSaveEdit,
        setEditedGame  
    };
};

export default useGameEdit;