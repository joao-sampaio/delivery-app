const { expect } = require('chai');
const sinon = require('sinon');
const { sales } = require('../../../database/services');
const { Sales, SaleProduct, User, sequelize } = require('../../../database/models');
const { salesList, newOrder, salesProducts } = require('../../mocks/sales.mock');
const { usersList } = require('../../mocks/user.mock');

describe('Sales camada service', function () {
  it('getAllSales', async function () {
    // Arrange
    sinon.stub(Sales, 'findAll').resolves(salesList);
    // Act
    const result = await sales.getAllSales(2);
    // Assert
    expect(result).to.be.deep.equal(salesList);
  });

  it('getByIdSales', async function () {
    // Arrange
    sinon.stub(Sales, 'findOne').resolves(salesList[0]);
    // Act
    const result = await sales.getByIdSales(1);
    // Assert
    expect(result).to.be.deep.equal(salesList[0]);
  });

  it('updateSale', async function () {
    // Arrange
    sinon.stub(Sales, 'update').resolves(salesList[0]);
    // Act
    const result = await sales.updateSale(1);
    // Assert
    expect(result).to.be.deep.equal(salesList[0]);
  });
    
  it('registerSale', async function () {
    // Arrange
    sinon.stub(User, 'findOne').resolves(usersList[2]);
    sinon.stub(Sales, 'create').resolves(salesList[0]);
    sinon.stub(SaleProduct, 'bulkCreate').resolves(salesProducts);
    sequelize.transaction = sinon.stub().callsFake(async (callback) => callback());
    // Act
    const result = await sales.registerSale(newOrder);
    // Assert
    expect(result).to.be.deep.equal({ saleId: 1 });
  });

  afterEach(sinon.restore);
});
