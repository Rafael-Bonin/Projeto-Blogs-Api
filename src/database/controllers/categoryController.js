const services = require('../services/categoriesServices');

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await services.createCategory(name);
    return res.status(201).json(category);
  } catch (err) {
    return res.status(err.status).json({ message: err.message });
  }
};

const getAll = async (_req, res) => {
  try {
    const all = await services.getAll();
    return res.status(200).json(all);
  } catch (err) {
    return res.status(err.status).json({ message: err.message });
  }
};

module.exports = {
  createCategory,
  getAll,
};