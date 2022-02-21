const {Router} = require('express');
const ErrorControllers = require('../controllers/errorControllers');

const errorRoutes = Router();

errorRoutes.get('/', ErrorControllers.errorRender);

module.exports = errorRoutes;