const {Router} = require('express');
const users = require('../db/users');
const SignInControllers = require('../controllers/signInControllers');
const signInMiddleware = require("../middleware/signInMiddleware");

const signInRoutes = Router();

signInRoutes.get('/', SignInControllers.renderSignIn);
signInRoutes.post('/', signInMiddleware, SignInControllers.renderUserInfo);

module.exports = signInRoutes;