const { sales } = require('../services');

const getAllSales = async (_req, res) => {
  const id = res.locals.id;
  const result = await sales.getAllSales(id);
  res.status(200).json(result);
}

module.exports = {
  getAllSales,
}
