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
  const result = await users.newUser(req.body);
  if ('type' in result) {
    res.status(result.type).json({ message: result.message });
  } else {
    res.status(201).json(result);
  }
};

const getAllSellers = async (_req, res) => {
  const sellersList = await users.getAllSellers();
  res.status(200).json(sellersList);
};

module.exports = {
  login,
  newUser,
  getAllSellers,
};