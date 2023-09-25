import { Router } from 'express';
import { getGames, createGame } from '../Controllers/controller.games.js';
import { validateSchema } from '../Middlewares/vlidateSchema.js';
import { gameSchema } from '../Schemas/gamesSchema.js';
import { customerSchema } from '../Schemas/customerSchema.js';


const boardRouter = Router()


// Rota para criar um novo jogo
boardRouter.post('/games', validateSchema(gameSchema), createGame);

// Rota para obter todos os jogos
boardRouter.get('/games', getGames);

// Rota para criar usuario
boardRouter.post('/customer', validateSchema(customerSchema), createCustomer)

// Rota para obter os clientes
boardRouter.get('/customers', getCustomerById)

// Rota para modificar um usuario
boardRouter.put('/customer', validateSchema(customerSchema), updateCustomer)



export default boardRouter
