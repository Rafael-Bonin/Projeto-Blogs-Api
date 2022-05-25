'use strict';

const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {timestamps: false});

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
       as: 'categories', foreignKey: 'postId', through: PostCategory, otherKey: 'categoryId' });

    models.Category.belongsToMany(models.BlogPost, {
       as: 'categories', foreignKey: 'categoryId', through: PostCategory, otherKey: 'postId' });
  }

  return PostCategory;
};

module.exports = PostCategory;
