import axios from 'axios';
import { Request, Response, Router } from 'express';

const router = Router();

async function editGame(req: Request, res: Response) {
    try {
        const { id } = req.params; 
        const updatedGameData = req.body; 

        const response = await axios.put(`https://academico.espm.br/testeapi/jogos/${id}`, updatedGameData);
        res.json(response.data); 
    } catch (error) {
        res.status(500).json({ error: 'Erro ao acessar a API' });
    }
}

export { editGame };
