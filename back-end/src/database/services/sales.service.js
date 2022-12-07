const { Op } = require('sequelize');
const { Sales, SaleProduct, Product, User, sequelize } = require('../models');

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
  return sale;
};

const updateSale = async (status, id) => {
  const update = await Sales.update(
    { status },
    { where: { id } },
  );
  return update;
}

const registerSale = async (order) => {
  const [{userEmail, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status}, { productsList }] = order;
  const user = await  User.findOne({ where: { email: userEmail }, attributes: { exclude: ['password'] } });

  const result = await sequelize.transaction(async (t) => {
    const newSale = await Sales.create({ userId: user.id, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status }, { transaction: t });
    const bulkArray = productsList.map(({ id, quantity }) => ({ saleId: newSale.id, productId: id, quantity }));
    await SaleProduct.bulkCreate(bulkArray, { transaction: t });
    return { saleId: newSale.id };
  });
  return result;
}

module.exports = {
  getAllSales,
  getByIdSales,
  updateSale,
  registerSale,
};
