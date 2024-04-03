import axios from 'axios';
import { Router } from 'express';

const router = Router();

router.delete('/jogo/:id', async (req, res) => {
    try {
        const { id } = req.params; 
        const response = await axios.delete(`https://academico.espm.br/testeapi/jogos/${id}`);
        res.json(response.data); 
    } catch (error) {
        res.status(500).json({ error: 'Erro ao acessar a API' });
    }
});

export { router };
