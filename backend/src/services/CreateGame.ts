import axios from 'axios';
import { Request, Response } from 'express';



async function createNewGame(req: Request, res: Response) {
    try {
        const newGame = req.body;
        const response = await axios.post('https://academico.espm.br/testeapi/jogos', newGame);
        res.status(201).json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao acessar a API' });
    }
}

export { createNewGame };
