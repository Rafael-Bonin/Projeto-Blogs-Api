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

module.exports = {
  createPost,
};