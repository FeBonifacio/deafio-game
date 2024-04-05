import React from 'react';
import { Game } from '../types/Game';

export const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, field: keyof Game, editedGame: Game | null, setEditedGame: React.Dispatch<React.SetStateAction<Game | null>>) => {
    if (editedGame) {
        setEditedGame({ ...editedGame, [field]: event.target.value });
    }
};

export const handleSaveAndClose = (handleSaveEdit: Function, editedGame: Game | null, setIsLoading: React.Dispatch<React.SetStateAction<boolean>>, handleCloseModal: Function) => {
    setIsLoading(true);
    handleSaveEdit(editedGame);
    setIsLoading(false);
    handleCloseModal();
};
