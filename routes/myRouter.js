const { Router } = require('express');
const myController = require('../controllers/myController');

const myRouter = Router();

myRouter.get('/', myController.getIndex);

module.exports = myRouter;