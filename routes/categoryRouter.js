const { Router } = require('express');
const categoryController = require('../controllers/categoryController');

const categoryRouter = Router();

categoryRouter.get('/', categoryController.getIndex);

module.exports = categoryRouter;