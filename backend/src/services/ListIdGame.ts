import { Router, Request, Response, NextFunction } from 'express';
import axios from 'axios';

const router = Router();

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const response = await axios.get(`https://academico.espm.br/testeapi/jogo/${id}`);
        res.json(response.data);
    } catch (error) {
        console.error('Erro ao acessar a API externa:', error);
        res.status(500).json({ error: 'Erro ao acessar a API externa' });
    }
});


export default router;