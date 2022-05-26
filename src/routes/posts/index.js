const express = require('express');
const validateToken = require('../../database/middlewares/validateToken');
const testPost = require('../../database/middlewares/validatePost');
const controllers = require('../../database/controllers/blogPostController');

const postsRouter = express.Router();

postsRouter.post('/', validateToken, testPost, controllers.createPost);
postsRouter.get('/', validateToken, controllers.getAll);

module.exports = postsRouter;