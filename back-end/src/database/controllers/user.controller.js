const { users } = require('../services');

const login = async (req, res) => {
  const { email, password } = req.body;
  const result = await users.login(email, password);
  if ('type' in result) {
    res.status(result.type).json({ hasToken: false });
  } else {
    res.status(200).json(result);
  }
};

const newUser = async (req, res) => {
  const { name, email, password, image } = req.body;
  const result = await users.newUser(name, email, password, image);
  if ('type' in result) {
    res.status(result.type).json({ message: result.message });
  } else {
    res.status(201).json(result);
  }
};

const getUserById = async (_req, res) => {
  const userId = res.locals.id;
  const result = await users.getUserById(userId);
  if ('type' in result) {
    return res.status(result.type).json({ hasToken: result.hasToken });
  }
  res.status(200).json(result);
};

module.exports = {
  login,
  newUser,
  getUserById,
};