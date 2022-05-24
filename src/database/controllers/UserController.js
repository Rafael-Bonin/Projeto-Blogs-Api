const services = require('../services/userServices');

const createUser = async (req, res) => {
  try {
    const { body } = req;
    const get = await services.createUser(body);
    return res.status(201).json(get);
  } catch (err) {
    return res.status(err.status).json({ message: err.message });
  }
};

module.exports = {
  createUser,
};