import React from 'react';
import { Game } from '../types/game'; 

export const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof Game, editedGame: Game | null, setEditedGame: React.Dispatch<React.SetStateAction<Game | null>>) => {
    if (editedGame) {
        setEditedGame({ ...editedGame, [field]: e.target.value });
    }
};

export const handleSaveAndClose = async (handleSaveEdit: () => Promise<void>, setIsLoading: React.Dispatch<React.SetStateAction<boolean>>, handleCloseModal: () => void) => {
    setIsLoading(true); 
    await handleSaveEdit();
    setIsLoading(false); 
    handleCloseModal(); 
    window.location.reload(); 
};


