const jwt = require('jsonwebtoken');
const fs = require('fs/promises');
const { join } = require('path');

const keyPath = join(__dirname, '../../jwt.evaluation.key');

const secret = async () => fs.readFile(keyPath, { encoding: 'utf-8' });

const generateToken = async (payload) => jwt.sign(payload, await secret());

const verifyToken = async (token) => jwt.verify(token, await secret());

module.exports = { generateToken, verifyToken };
