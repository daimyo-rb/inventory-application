const { Router } = require('express');
const itemController = require('../controllers/itemController');

const itemRouter = Router();

itemRouter.get('/new', itemController.getNewItem);
itemRouter.post('/new', itemController.postNewItem);
itemRouter.get('/:id/delete', itemController.deleteItem);
itemRouter.post('/:id/update', itemController.postItemUpdate);
itemRouter.get('/:id', itemController.getItemUpdate);

module.exports = itemRouter;