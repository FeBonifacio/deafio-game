import React from 'react';
import { Game } from '../types/game';

export const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof Game, editedGame: Game | null, setEditedGame: React.Dispatch<React.SetStateAction<Game | null>>) => {
    if (editedGame) {
        setEditedGame({ ...editedGame, [field]: e.target.value });
    }
};

export const handleSaveAndClose = (handleSaveEdit: Function, editedGame: Game | null, setIsLoading: React.Dispatch<React.SetStateAction<boolean>>, handleCloseModal: Function) => {
    // Função para salvar as edições e fechar o modal
    setIsLoading(true);
    handleSaveEdit(editedGame);
    setIsLoading(false);
    handleCloseModal();
};
