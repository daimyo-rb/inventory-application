const { Router } = require('express');
const itemController = require('../controllers/itemController');

const itemRouter = Router();

itemRouter.get('/new', itemController.getNewItem);
itemRouter.post('/new', itemController.postNewItem);
itemRouter.get('/:id', itemController.getItemUpdate);
itemRouter.post('/:id/update', itemController.postItemUpdate);

module.exports = itemRouter;