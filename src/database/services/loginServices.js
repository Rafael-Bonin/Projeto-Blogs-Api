const { User } = require('../models');
const generateToken = require('../utils/generateJWT');

const generateErr = (status, message) => ({ status, message });

const login = async (body) => {
  if (!body.email || !body.password) throw generateErr(400, 'Some required fields are missing');
  const exists = await User.findOne({ where: { email: body.email, password: body.password } });
  if (!exists) throw generateErr(400, 'Invalid fields');
  const { dataValues } = exists;
  delete dataValues.password;
  console.log(dataValues);
  const token = generateToken(dataValues);
  return token;
};

module.exports = {
  login,
};