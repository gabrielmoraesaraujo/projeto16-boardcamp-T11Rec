import joi from "joi"

// Esquema para validação dos dados de um jogo
const gameSchema = joi.object({
  name: joi.string().required(),
  image: joi.string().required(),
  stockTotal: joi.number().integer().required(),
  pricePerDay: joi.number().integer().required(),
});

module.exports = gameSchema;
