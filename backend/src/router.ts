import axios from 'axios';
import { Router } from 'express';
import { listGame } from './services/ListGame';
import { createNewGame } from './services/CreateGame';
import { listIdGame } from './services/ListIdGame';
import { editGame } from './services/EditGame';

const router = Router();

// Definindo as rotas corretamente no router

router.get('/jogo', listGame); // Listar todos os jogos

router.get('/jogo/:id', listIdGame); // Listar jogo por ID

router.post('/jogo', createNewGame); // Criar um novo jogo

router.put('/jogo/:id', editGame); // Editar um jogo existente

export { router };
