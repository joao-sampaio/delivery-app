const { generateToken } = require('../../utils/jwt');
const { User } = require('../models');

const login = async (email, password) => {
  if (!email || !password) {
    return {
      type: 400,
      message: 'Some required fields are missing',
    };
  }
  const result = await User.findOne({ where: { email } });
  if (!result || password !== result.password) {
    return {
      type: 400,
      message: 'Invalid fields',
    };
  }
  const token = generateToken({ id: result.id });
  return { token };
};
  
const newUser = async (name, email, password) => {
  const result = await User.findOne({ where: { email } });
  if (result) {
    return { type: 409, message: 'User already registered' };
  }
  await User.create({ name, email, password });
  const user = await User.findOne({ where: { email } });
  const token = createToken({ id: user.id });
  return { token };
};

module.exports = {
  login,
  newUser,
};