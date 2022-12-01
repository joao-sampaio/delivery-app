const { generateToken } = require('../../utils/jwt');
const { User } = require('../models');
const md5 = require('md5');

const login = async (email, password) => {
  if (!email || !password) {
    return {
      type: 400,
      message: 'Some required fields are missing',
    };
  }

  const senha = md5(password);
  const result = await User.findOne({ where: { email, password: senha }, attributes: { exclude: ['password'] } });
  if (!result) {
    return {
      type: 404,
      hasToken: false,
    };
  }
  const token = await generateToken({ id: result.id });
  const { name, email, role } = result;
  return { name, email, role, token };
};
  
const newUser = async (name, email, password) => {
  const result = await User.findOne({ where: { email } });
  if (result) {
    return { type: 409, message: 'User already registered' };
  }
  const senha = md5(password);
  await User.create({ name, email, password: senha, role: '' });
  const user = await User.findOne({ where: { email }, attributes: { exclude: ['password'] } });
  const token = await generateToken({ id: user.id });
  const { name, email, role } = user;
  return { name, email, role, token };
};

module.exports = {
  login,
  newUser,
};