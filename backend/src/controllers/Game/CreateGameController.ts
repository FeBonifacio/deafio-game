import { Request, Response } from 'express';
import { CreateGameService } from '../../services/Game/CreateGameService';

class CreateGameController {
    async handle(req: Request, res: Response) {
        try {
            const { nome, descricao, produtora, ano, idadeMinima } = req.body;

            const createGameService = new CreateGameService();

            const game = await createGameService.execute({
                nome,
                descricao,
                produtora,
                ano,
                idadeMinima
            });

            return res.status(201).json(game); 
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao criar jogo' });
        }
    }
}

export { CreateGameController };
