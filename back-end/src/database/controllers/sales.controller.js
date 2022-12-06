const { sales } = require('../services');

const getAllSales = async (_req, res) => {
  const id = res.locals.id;
  const result = await sales.getAllSales(id);
  res.status(200).json(result);
}

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const result = await sales.getByIdSales(id);
  res.status(200).json(result);
}

const updateStatus = async (req, res) => {
  const { id } = req.params;
  const updateResult = await sales.updateSale(req.body.status, id);
  res.status(200).json(updateResult);
}

module.exports = {
  getAllSales,
  getSaleById,
  updateStatus
}
