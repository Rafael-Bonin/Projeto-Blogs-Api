'use strict';

module.exports = (sequelize, DataTypes) => {
  sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE
  })
  return BlogPost;
};