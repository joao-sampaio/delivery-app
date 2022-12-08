const { expect } = require('chai');
const sinon = require('sinon');
const { productController } = require('../../../database/controllers');
const { product } = require('../../../database/services');
const { productsList } = require('../../mocks/product.mock');

describe('Product camada controller', function () {
  let req = {};
  let res = {};

  beforeEach(function () {
    req = {
      body: productsList[0],
      params: { id: 1 },
    };
  
    res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub().returnsThis(),
      end: sinon.stub().returnsThis(),
      sendStatus: sinon.stub().returnsThis(),
    };
  });

  it('findAll', async function () {
    // Arrange
    sinon.stub(product, 'findAll').resolves(productsList);
    // Act
    await productController.findAll(req, res);
    // Assert
    expect((res.status).calledWith(200)).to.equal(true);
    expect((res.json).calledWith(productsList)).to.equal(true);
  });

  it('create', async function () {
    // Arrange
    sinon.stub(product, 'create').resolves(productsList[0]);
    // Act
    await productController.create(req, res);
    // Assert
    expect((res.status).calledWith(201)).to.equal(true);
    expect((res.json).calledWith(productsList[0])).to.equal(true);
  });

  it('findById', async function () {
    // Arrange
    sinon.stub(product, 'findById').resolves(productsList[0]);
    // Act
    await productController.findById(req, res);
    // Assert
    expect((res.status).calledWith(200)).to.equal(true);
    expect((res.json).calledWith(productsList[0])).to.equal(true);
  });

  it('deleteById', async function () {
    // Arrange
    sinon.stub(product, 'deleteById').resolves(undefined);
    // Act
    await productController.deleteById(req, res);
    // Assert
    expect((res.status).calledWith(204)).to.equal(true);
    expect((res.json).calledWith(undefined)).to.equal(true);
  });

  afterEach(sinon.restore);
});
