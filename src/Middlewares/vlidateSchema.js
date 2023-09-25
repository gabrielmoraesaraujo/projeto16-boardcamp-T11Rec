export function validateGame (req, res, next) {

    const { error } = gameSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: 'Dados inválidos' });
    }
    next();
  };
