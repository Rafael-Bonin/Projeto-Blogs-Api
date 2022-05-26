const services = require('../services/postServices');

const createPost = async (req, res) => {
  try {
    const { body } = req;
    const { user } = req;
    const { dataValues } = await user;
    const { id } = dataValues;
    const create = await services.createPost(body, id);
    return res.status(201).json(create);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

const getAll = async (_req, res) => {
  try {
    const all = await services.getAll();
    return res.status(200).json(all);
  } catch (err) {
    return res.status(500).json({ message: 'Internal Error' });
  }
};

module.exports = {
  createPost,
  getAll,
};