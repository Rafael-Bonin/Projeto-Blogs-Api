const services = require('../services/loginServices');

const login = async (req, res, next) => {
  try {
    const { body } = req;
    const get = await services.login(body);
    return res.status(200).json({ token: get });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
};