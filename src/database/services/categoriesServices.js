const { Category } = require('../models');

const generateErr = (status, message) => ({ status, message });

const createCategory = async (name) => {
  if (!name) throw generateErr(400, '"name" is required');
  const category = await Category.create({ name });
  return category;
};

const getAll = async () => {
  const all = await Category.findAll();
  return all;
};

module.exports = {
  createCategory,
  getAll,
};