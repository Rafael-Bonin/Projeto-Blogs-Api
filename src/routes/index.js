const express = require('express');
const categoriesRouter = require('./categories');
const loginRouter = require('./login');
const userRouter = require('./user');

const router = express.Router();

router.use('/login', loginRouter);
router.use('/user', userRouter);
router.use('/categories', categoriesRouter);

module.exports = router;