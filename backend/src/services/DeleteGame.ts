import { Router, Request, Response, NextFunction } from 'express';
import axios from 'axios';

const router = Router();

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const response = await axios.delete(`https://academico.espm.br/testeapi/jogo/${id}`);
        res.json(response.data);
    } catch (error) {
        console.error('Erro ao acessar a API externa:', error);
        res.status(500).json({ error: 'Erro ao acessar a API externa' });
    }
});


export default router;