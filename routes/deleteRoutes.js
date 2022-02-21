const {Router} = require('express');
const DeleteControllers = require('../controllers/deleteControllers');

const deleteRoutes = Router();

deleteRoutes.get('/', DeleteControllers.deleteRedirect);

module.exports = deleteRoutes;