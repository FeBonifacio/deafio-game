import { useState } from 'react';
import { Game } from '../types/Game';

const useEditGameFunctions = (handleEdit: (game: Game) => Promise<void>) => {
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

    return {
        showModal,
        editedGame,
        handleEditClick,
        handleCloseModal,
        handleSaveEdit,
        setEditedGame  
    };
};

export default useEditGameFunctions;
