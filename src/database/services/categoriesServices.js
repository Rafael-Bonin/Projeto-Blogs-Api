const { Category } = require('../models');

const generateErr = (status, message) => ({ status, message });

const createCategory = async (name) => {
  if (!name) throw generateErr(400, '"name" is required');
  const category = await Category.create({ name });
  console.log(category);
  return category;
};

module.exports = {
  createCategory,
};