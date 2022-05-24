const express = require('express');
const validateUser = require('../../database/middlewares/validateUser');
const controllers = require('../../database/controllers/UserController');
const validateToken = require('../../database/middlewares/validateToken');

const userRouter = express.Router();

userRouter.post('/', validateUser, controllers.createUser);
userRouter.get('/', validateToken, controllers.getAll);

module.exports = userRouter;