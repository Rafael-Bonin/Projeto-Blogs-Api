const express = require('express');
const loginRouter = require('./login/index');
const userRouter = require('./user/index');

const router = express.Router();

router.use('/login', loginRouter);
router.use('/user', userRouter);

module.exports = router;