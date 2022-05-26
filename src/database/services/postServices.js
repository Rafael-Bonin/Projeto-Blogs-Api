const Sequelize = require('sequelize');
const { BlogPost, User, Category } = require('../models');
const config = require('../config/config');

const sequelize = new Sequelize(config.development);
const generateErr = (status, message) => ({ status, message });

const createPost = async (body, userId) => {
  const transaction = await sequelize.transaction();
  try {
    const { title, content, categoryIds } = body;
    const post = await BlogPost.create({ title, content, userId }, { transaction });
    await post.addCategories(categoryIds, { transaction });
    await transaction.commit();
    return post;
  } catch (err) {
    await transaction.rollback();
    throw generateErr(400, '"categoryIds" not found');
  }
};

const getAll = async () => {
  const all = await BlogPost.findAll(
    { include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ] },
);
  return all;
};

const byId = async (id) => {
  const post = await BlogPost.findByPk(id, { include: [{
    model: User, as: 'user', attributes: { exclude: ['password'] },
  }, {
    model: Category, as: 'categories', through: { attributes: [] },
  }] });
  if (!post) throw generateErr(404, 'Post does not exist');
  return post;
}; 

const update = async (body, id, userId) => {
  const { title, content } = body;
  if (!title || !content) throw generateErr(400, 'Some required fields are missing');
  const post = await BlogPost.findByPk(id, { include: [{
    model: User, as: 'user', attributes: { exclude: ['password'] },
  }, {
    model: Category, as: 'categories', through: { attributes: [] },
  }] });
  if (post.userId !== userId) throw generateErr(401, 'Unauthorized user');
  await post.set({ title, content });
  await post.save();
  return post;
};

module.exports = {
  createPost,
  getAll,
  byId,
  update,
};

    // const exists = await categoryIds.map(async (c) => {
    //   const category = await Category.findByPk(c);
    //   return category;
    // });
    // const ok = await Promise.all(exists);
    // const all = ok.some((c) => c === null);
    // if (all) 