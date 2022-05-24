const express = require('express');
const validateToken = require('../../database/middlewares/validateToken');
const controllers = require('../../database/controllers/categoryController');

const categoriesRouter = express.Router();

categoriesRouter.post('/', validateToken, controllers.createCategory);

module.exports = categoriesRouter;