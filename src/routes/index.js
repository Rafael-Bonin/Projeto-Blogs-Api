const express = require('express');
const categoriesRouter = require('./categories');
const loginRouter = require('./login');
const userRouter = require('./user');
const postsRouter = require('./posts');

const router = express.Router();

router.use('/login', loginRouter);
router.use('/user', userRouter);
router.use('/categories', categoriesRouter);
router.use('/post', postsRouter);

module.exports = router;