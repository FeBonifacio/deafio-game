import { Router, Request, Response, NextFunction } from 'express';
import axios from 'axios';

const router = Router();

router.put('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.body; // Corrigido para obter o ID do corpo da requisição
        const updatedGameData = req.body; 


        if (!id) {
            return res.status(400).json({ error: 'O campo ID é obrigatório.' });
        }

        const response = await axios.put(`https://academico.espm.br/testeapi/jogo`, updatedGameData);


        if (response.data === true) {
            res.json(response.data); 
        } else {
            
            res.status(400).json({ error: 'Erro ao editar o jogo.' });
        }
    } catch (error) {
        console.error('Erro ao editar o jogo:', error);
        res.status(500).json({ error: 'Erro interno ao editar o jogo.' });
    }
});

export default router;
