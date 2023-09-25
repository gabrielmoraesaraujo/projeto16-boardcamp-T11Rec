import { Router } from 'express';
import { getGames, createGame } from '../Controllers/controller.games.js';


const boardRouter = Router()


// Rota para criar um novo jogo
boardRouter.post('/games', createGame);

// Rota para obter todos os jogos
boardRouter.get('/games', getGames);

export default boardRouter
