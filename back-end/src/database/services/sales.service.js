const { Op } = require('sequelize');
const { Sales, Product, User } = require('../models');

const getAllSales = async (id) => {
  const allSales = await Sales.findAll({
    where: { [Op.or]: [{ userId: id }, { sellerId: id }] },
    include: [{ model: Product, as: 'products' }],
  });
  return allSales;
};

const getByIdSales = async (id) => {
  const sale = await Sales.findOne({
    where: { id },
    include: [{ model: Product, as: 'products' }],
  });
  const seller = await User.findPk(sale.sellerId);
  return seller;
};

module.exports = {
  getAllSales,
  getByIdSales,
};
