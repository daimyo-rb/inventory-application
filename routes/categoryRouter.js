const categoryController = require('../controllers/categoryController');
const { Router } = require('express');

const categoryRouter = Router();

categoryRouter.get('/', categoryController.getIndex);

module.exports = categoryRouter;