import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';


import listGame from './services/ListGame';
import listIdGame from './services/ListIdGame'
import editGame from './services/EditGame'
import deleteGame from './services/DeleteGame';
import createGame from './services/CreateGame';

const app = express();

app.use(express.json());
app.use(cors());

// Use o middleware de roteamento jogosRoutes

app.use('/', createGame) // criar

app.use('/', listGame); // listar todos

app.use('/:id', listIdGame); // listar por id

app.use('/', editGame); // editar 

app.use('/:id', deleteGame); // deletar 



app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        // Se for uma instância do tipo error
        return res.status(400).json({
            error: err.message
        });
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal server error.'
    });
});

app.listen(3000, () => {
    console.log('Servidor online!!!!');
});
