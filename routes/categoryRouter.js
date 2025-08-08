const { Router } = require('express');
const categoryController = require('../controllers/categoryController');

const categoryRouter = Router();

categoryRouter.get('/:category_id', categoryController.getCategory);

module.exports = categoryRouter;