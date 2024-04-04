import { useState } from 'react';
import axios from 'axios';
import { Game } from '../types/game';



export const useGameEdit = () => {
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

    return {
        editedGame,
        setEditedGame,
        handleEdit
    };
};
