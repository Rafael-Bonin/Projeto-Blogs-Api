const express = require('express');
const validateUser = require('../../database/middlewares/validateUser');
const controllers = require('../../database/controllers/UserController');
const validateToken = require('../../database/middlewares/validateToken');

const userRouter = express.Router();

userRouter.post('/', validateUser, controllers.createUser);
userRouter.get('/', validateToken, controllers.getAll);
userRouter.get('/:id', validateToken, controllers.getById);
module.exports = userRouter;