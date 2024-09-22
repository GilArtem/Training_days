const express = require('express');
const userController = require('../controllers/userController.js');
const userRouter = express.Router();

userRouter.get('/', userController.getUsers);
userRouter.use('/create', userController.addUser);
userRouter.use('/postuser', userController.postUser);

module.exports = userRouter;