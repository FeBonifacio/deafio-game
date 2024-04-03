import axios from 'axios';
import { Router, Request, Response } from 'express';


async function listGame(req: Request, res: Response) {
    try {
        const newGame = req.body;
        const response = await axios.get('https://academico.espm.br/testeapi/jogos', newGame);
        res.status(201).json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao acessar a API' });
    }
}

export { listGame };