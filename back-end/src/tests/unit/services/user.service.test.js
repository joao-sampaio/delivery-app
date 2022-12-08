const { expect } = require('chai');
const sinon = require('sinon');
const { users } = require('../../../database/services');
const { User } = require('../../../database/models');
const { usersList, userMock, sellersList } = require('../../mocks/user.mock');
const jwt = require('jsonwebtoken');

describe('User camada service', function () {
  describe('login', function () {
    it('Testa caso de sucesso', async function () {
      // Arrange
      sinon.stub(User, 'findOne').resolves(usersList[2]);
      sinon.stub(jwt, 'sign').returns(userMock.token);
      // Act
      const result = await users.login('zebirita@email.com', '$#zebirita#$');
      // Assert
      expect(result).to.be.deep.equal(userMock);
    });

    it('Testa quando não tem email e/ou senha', async function () {
      // Act
      const result = await users.login();
      // Assert
      expect(result).to.be.deep.equal({ type: 400, message: 'Some required fields are missing' });
    });

    it('Testa quando o usuário não existe', async function () {
      // Arrange
      sinon.stub(User, 'findOne').resolves(undefined);
      // Act
      const result = await users.login('zebirita@email.com', '$#zebirita#$');
      // Assert
      expect(result).to.be.deep.equal({ type: 404, message: 'User not found' });
    });
  });

  describe('newUser', function () {
    it('Testa caso de sucesso', async function () {
      // Arrange
      sinon.stub(User, 'create').resolves(usersList[2]);
      sinon.stub(User, 'findOne')
      .onFirstCall().resolves(undefined)
      .onSecondCall().resolves(usersList[2]);
      sinon.stub(jwt, 'sign').returns(userMock.token);
      // Act
      const result = await users.newUser('Cliente Zé Birita', 'zebirita@email.com', '$#zebirita#$');
      // Assert
      expect(result).to.be.deep.equal(userMock);
    });

    it('Testa quando o usuário já está registrado', async function () {
      // Arrange
      sinon.stub(User, 'findOne').resolves(usersList[2]);
      // Act
      const result = await users.newUser('Cliente Zé Birita', 'zebirita@email.com', '$#zebirita#$');
      // Assert
      expect(result).to.be.deep.equal({ type: 409, message: 'User already registered' });
    });
  });

  it('getAllSellers', async function () {
    // Arrange
    sinon.stub(User, 'findAll').resolves(sellersList);
    // Act
    const result = await users.getAllSellers();
    // Assert
    expect(result).to.be.deep.equal(sellersList);
  });

  afterEach(sinon.restore);
});
