const {Router} = require('express');
const users = require('../db/users');

const userRouter = Router();
const UserControllers = require('../controllers/userControllers');

userRouter.get('/', UserControllers.renderUsers);
userRouter.get('/:id', UserControllers.getUserById);

module.exports = userRouter;