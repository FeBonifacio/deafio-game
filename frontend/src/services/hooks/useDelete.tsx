import { useCallback, useState } from 'react';
import useGameDelete from '../rotas/Delete';
import { Game } from '../../services/types/game';

const useHandleDeleteClick = () => {
    const [gameToDelete, setGameToDelete] = useState<Game | null>(null);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const { handleDelete } = useGameDelete();

    const handleDeleteClick = useCallback((game: Game) => {
        setGameToDelete(game);
        setShowConfirmation(true); 
    }, []);

    const handleConfirmDelete = useCallback(async () => {
        if (gameToDelete) {
            try {
                await handleDelete(gameToDelete.id);
                console.log("Exclusão concluída com sucesso.");
                setGameToDelete(null);
                setShowConfirmation(false); 
                window.location.reload(); 
            } catch (error) {
                console.error('Erro ao excluir o jogo:', error);
            }
        }
    }, [gameToDelete, handleDelete]);

    const handleCancelDelete = useCallback(() => {
        setGameToDelete(null);
        setShowConfirmation(false);
    }, []);

    return { handleDeleteClick, handleConfirmDelete, handleCancelDelete, showConfirmation };
};

export default useHandleDeleteClick;
