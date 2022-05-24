const { User } = require('../models');
const generateToken = require('../utils/generateJWT');

const generateErr = (status, message) => ({ status, message });

const createUser = async (body) => {
  const { displayName, password, email, image } = body;
  const exists = await User.findOne({ where: { email: body.email } });
  if (exists !== null) throw generateErr(409, 'User already registered');
  User.create({ displayName, password, email, image });
  const token = generateToken({ displayName, email, image });
  return { token };
};

module.exports = {
  createUser,
};