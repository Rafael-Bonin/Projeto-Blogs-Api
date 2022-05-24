const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

const secretKey = process.env.JWT_SECRET;

const validateToken = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: 'Token not found' });
    const decoded = jwt.verify(token, secretKey);
    const exists = User.findOne({ where: { email: decoded.data.email } });
    if (!exists) return res.status(401).json({ message: 'Expired or invalid token' });
    req.user = exists;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateToken;