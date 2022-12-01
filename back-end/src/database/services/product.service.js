const { Product } = require('../models');

const findAll = async () => {
  const result = await Product.findAll();
  return result;
}

const create = async ({ name, price, urlImage }) => {
  const { dataValues } = await Product.create({ name, price, urlImage });
  return dataValues;
}

const findById = async (id) => {
  const result = await Product.findByPk(id);
  if (result) {
    return { type: 200, data: result };
  }
  return { type: 404, data: { message: 'Product not found' } };
};

const deleteById = async (id) => {
  await Product.destroy({ where: { id } });
}

module.exports = {
  findAll,
  create,
  findById,
  deleteById,
};
