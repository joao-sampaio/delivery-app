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

const getAll = async (_req, res) => {
  const usersList = await users.getAll();
  res.status(200).json(usersList);
}

const deleteByEmail = async (req, res) => {
  const delet = await users.deleteByEmail(req.body.email);
  res.status(200).json(delet);
}

module.exports = {
  login,
  newUser,
  getAllSellers,
  getAll,
  deleteByEmail,
};