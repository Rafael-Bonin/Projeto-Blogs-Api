const express = require('express');
const { login } = require('../../database/controllers/loginController');

const loginRouter = express.Router();

loginRouter.post('/', login);

module.exports = loginRouter;