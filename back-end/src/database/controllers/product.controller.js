const { product } = require('../services');

const findAll = async (_req, res) => {
  const result = await product.findAll();
  res.status(200).json(result);
}

const create = async (req, res) => {
  const result = await product.create(req.body);
  res.status(201).json(result);
}

const findById = async (req, res) => {
  const { id } = req.params;
  const result = await product.findById(id);
  res.status(200).json(result);
}

const deleteById = async (req, res) => {
  const { id } = req.params;
  const result = await product.deleteById(id);
  res.status(204).json(result);
}

module.exports = {
  findAll,
  create,
  findById,
  deleteById,
};
