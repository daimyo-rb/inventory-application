const { Router } = require('express');
const categoryController = require('../controllers/categoryController');

const categoryRouter = Router();

categoryRouter.get('/new', categoryController.getNewCategory);
categoryRouter.post('/new', categoryController.postNewCategory);
categoryRouter.get('/:category_id', categoryController.getCategory);
categoryRouter.get('/:category_id/update', categoryController.getCategoryUpdate);
categoryRouter.post('/:category_id/update', categoryController.postCategoryUpdate);
categoryRouter.get('/:category_id/delete', categoryController.deleteCategory);

module.exports = categoryRouter;