const db = require('../db/queries');
const { body, validationResult } = require("express-validator");

async function getItemUpdate(req, res) {
  const item = await db.getItemById(req.params.id);
  res.render('item', {item: item});
}

const postItemUpdate = [
  body('item_name').trim()
    .isLength({min: 1, max: 50}).withMessage('item name must be between 1 and 50 characters'),
  body('item_qty').trim()
    .isInt({min: 0}).withMessage('item quantity must be an integer >= 0'),
  body('item_category').trim()
    .isInt({min: 0}).withMessage('category must be integer >= 0; todo: make this one of the values in categories table'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('item', {
        item: {id: req.params.id,
          item_name: req.body.item_name,
          item_qty: req.body.item_qty,
          category_id: req.body.item_category
        },
        errors: errors.array()
      });
    }
    await db.updateItemById(req.params.id, req.body.item_name, req.body.item_qty, req.body.item_category);
    res.redirect('/');
  }

]


function getNewItem(req, res) {
  const category_id = req.query.category_id;
  res.render('newItem', {category_id: category_id});
}

const postNewItem = [
  body('item_name').trim()
    .isLength({min: 1, max: 50}).withMessage('Item name must be between 1 and 50 characters'),
  body('item_qty').trim()
    .isInt({min: 0}).withMessage('item quantity must be an integer >= 0'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('newItem', {category_id: req.body.category_id,
        errors: errors.array()});
    }
    await db.createNewItem(req.body.item_name, req.body.item_qty, req.body.category_id);
    res.redirect('/');
  }
]

async function deleteItem(req, res) {
  await db.deleteItemById(req.params.id);
  res.redirect('/');
}

module.exports = {
  getItemUpdate,
  postItemUpdate,
  getNewItem,
  postNewItem,
  deleteItem
}