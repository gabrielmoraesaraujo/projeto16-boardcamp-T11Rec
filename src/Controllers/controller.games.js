import db from '../Database/Database.Conection.js';

//const gameSchema = require('../schemas/gameSchema');

// Criar um novo jogo
export default function createGame (req, res){
  try {
    const { name, image, stockTotal, pricePerDay } = req.body;

    // Validar os dados de entrada usando o schema
    const { error } = gameSchema.validate({ name, image, stockTotal, pricePerDay });
    if (error) {
      return res.status(400).json({ error: 'Dados inválidos' });
    }

    // Inserir o novo jogo no banco de dados
    const query = 'INSERT INTO games (name, image, stockTotal, pricePerDay) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [name, image, stockTotal, pricePerDay];
    const result = await db.query(query, values);

    // Retornar o jogo criado
    const game = result.rows[0];
    res.status(201).json(game);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar o jogo' });
  }
};

// Obter todos os jogos
export async function getGames (req, res)  {

  try {
    // Consultar todos os jogos no banco de dados
    const result = await db.query('SELECT * FROM games');

    // Retornar a lista de jogos
    const games = result.rows;
    res.status(200).json(games);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
