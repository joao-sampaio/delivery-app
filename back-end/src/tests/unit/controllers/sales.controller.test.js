const { expect } = require('chai');
const sinon = require('sinon');
const { saleController } = require('../../../database/controllers');
const { sales } = require('../../../database/services');
const { salesList } = require('../../mocks/sales.mock');

describe('Sales camada controller', function () {
  let req = {};
  let res = {};

  beforeEach(function () {
    req = {
      body: salesList[0],
      params: { id: 1 },
    };
  
    res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub().returnsThis(),
      end: sinon.stub().returnsThis(),
      sendStatus: sinon.stub().returnsThis(),
      locals: { id: 3 },
    };
  });

  it('getAllSales', async function () {
    // Arrange
    sinon.stub(sales, 'getAllSales').resolves(salesList);
    // Act
    await saleController.getAllSales(req, res);
    // Assert
    expect((res.status).calledWith(200)).to.equal(true);
    expect((res.json).calledWith(salesList)).to.equal(true);
  });

  it('getSaleById', async function () {
    // Arrange
    sinon.stub(sales, 'getByIdSales').resolves(salesList[0]);
    // Act
    await saleController.getSaleById(req, res);
    // Assert
    expect((res.status).calledWith(200)).to.equal(true);
    expect((res.json).calledWith(salesList[0])).to.equal(true);
  });

  it('updateStatus', async function () {
    // Arrange
    sinon.stub(sales, 'updateSale').resolves(salesList[0]);
    // Act
    await saleController.updateStatus(req, res);
    // Assert
    expect((res.status).calledWith(200)).to.equal(true);
    expect((res.json).calledWith(salesList[0])).to.equal(true);
  });

  it('registerSale', async function () {
    // Arrange
    sinon.stub(sales, 'registerSale').resolves({ saleId: 1 });
    // Act
    await saleController.registerSale(req, res);
    // Assert
    expect((res.status).calledWith(201)).to.equal(true);
    expect((res.json).calledWith({ saleId: 1 })).to.equal(true);
  });

  afterEach(sinon.restore);
});
