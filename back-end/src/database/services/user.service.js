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
  const result = await User.findOne({ where: { email, password: senha } });
  if (!result) {
    return {
      type: 404,
      hasToken: false,
    };
  }
  const token = await generateToken({ id: result.id });
  return { token };
};
  
const newUser = async (name, email, password) => {
  const result = await User.findOne({ where: { email } });
  if (result) {
    return { type: 409, message: 'User already registered' };
  }
  await User.create({ name, email, password });
  const user = await User.findOne({ where: { email } });
  const token = await generateToken({ id: user.id });
  return { token };
};

module.exports = {
  login,
  newUser,
};