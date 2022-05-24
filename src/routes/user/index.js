const express = require('express');
const validateUser = require('../../database/middlewares/validateUser');
const controllers = require('../../database/controllers/UserController');

const userRouter = express.Router();

userRouter.post('/', validateUser, controllers.createUser);

module.exports = userRouter;