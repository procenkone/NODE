const {Router} = require('express');
const isUserValid = require('../middleware/isUserValid');

const loginRouter = Router();
const LoginControllers = require('../controllers/loginControllers');

loginRouter.get('/', LoginControllers.renderLogin);
loginRouter.post('/', isUserValid, LoginControllers.redirectUsers);

module.exports = loginRouter;