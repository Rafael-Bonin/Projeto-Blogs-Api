const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.JWT_SECRET;

const jwtConfig = { // Header Config
  expiresIn: '15m',
  algorithm: 'HS256',
};

const generateJWT = (payload) => {
  const token = jwt.sign({ data: payload }, secretKey, jwtConfig);
  return token;
};

module.exports = generateJWT;