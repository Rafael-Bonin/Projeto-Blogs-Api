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

const getAll = async (_req, res) => {
  try {
    const all = await services.getAll();
    return res.status(200).json(all);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await services.getById(id);
    return res.status(200).json(user);
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};

const removeMe = async (req, res, next) => {
  try {
    const { userId } = req;
    await services.removeMe(userId);
    return res.status(204).end();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createUser,
  getAll,
  getById,
  removeMe,
};