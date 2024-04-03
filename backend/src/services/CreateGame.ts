import { Router, Request, Response, NextFunction } from 'express';
import axios from 'axios';

const router = Router();

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        const { nome, descricao, produtora, ano, idadeMinima} = req.body;
        if (!nome || !descricao || !produtora || !ano || !idadeMinima) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios, exceto o ID.' });
        }

        const response = await axios.post('https://academico.espm.br/testeapi/jogo', req.body);

        
        if (response.status === 200) {
            res.json({ id: response.data });
        } else {
            res.status(500).json({ error: 'Erro ao criar o jogo.' });
        }
    } catch (error) {
        console.error('Erro ao acessar a API externa:', error);
        res.status(500).json({ error: 'Erro ao acessar a API externa' });
    }
});

export default router;
