import axios from 'axios';
import { Request, Response } from 'express';



async function listIdGame(req: Request, res: Response) {
    try {
        const { id } = req.params; 
        const response = await axios.get(`https://academico.espm.br/testeapi/jogos/${id}`);
        res.json(response.data); 
    } catch (error) {
        res.status(500).json({ error: 'Erro ao acessar a API' });
    }
}

export { listIdGame };
