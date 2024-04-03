import { Router } from 'express';
import { CreateGameController } from './controllers/Game/CreateGameController';

const router = Router();


router.get('/', (req, res) => {
    res.json({ result: 'ok'})
})

router.post('/jogo', new CreateGameController().handle)

export { router };
