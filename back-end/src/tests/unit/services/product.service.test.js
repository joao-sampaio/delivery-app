const { expect } = require('chai');
const sinon = require('sinon');
const { product } = require('../../../database/services');
const { Product } = require('../../../database/models');
const { productsList } = require('../../mocks/product.mock');

describe('Product camada service', function () {
  it('findAll', async function () {
    // Arrange
    sinon.stub(Product, 'findAll').resolves(productsList);
    // Act
    const result = await product.findAll();
    // Assert
    expect(result).to.be.deep.equal(productsList);
  });

  it('create', async function () {
    // Arrange
    sinon.stub(Product, 'create').resolves({ dataValues: productsList[0] });
    // Act
    const result = await product.create(productsList[0]);
    // Assert
    expect(result).to.be.deep.equal(productsList[0]);
  });

  describe('findById', function () {
    it('Testa quando encontra', async function () {
      // Arrange
      sinon.stub(Product, 'findByPk').resolves(productsList[0]);
      // Act
      const result = await product.findById(1);
      // Assert
      expect(result).to.be.deep.equal({ type: 200, data: productsList[0] });
    });
    
    it('Testa quando NÃO encontra', async function () {
      // Arrange
      sinon.stub(Product, 'findByPk').resolves(undefined);
      // Act
      const result = await product.findById(42);
      // Assert
      expect(result).to.be.deep.equal({ type: 404, data: { message: 'Product not found' } });
    });
  });

  it('deleteById', async function () {
    // Arrange
    sinon.stub(Product, 'destroy').resolves(1);
    try {
    // Act
      await product.deleteById(1);
      expect();
    } catch (error) {
    // Assert
      expect.fail();
    }
  });

  afterEach(sinon.restore);
});
