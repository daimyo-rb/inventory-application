const db = require('../db/queries');

async function getItemUpdate(req, res) {
  const item = await db.getItemById(req.params.id);
  console.log(item)
  res.render('item', {item: item});
}

async function postItemUpdate(req, res) {
  await db.updateItemById(req.params.id, req.body.item_name, req.body.item_qty, req.body.item_category);
  console.log(req.body);
  res.redirect('/');
}

function getNewItem(req, res) {
  const category_id = req.query.category_id;
  res.render('newItem', {category_id: category_id});
}

async function postNewItem(req, res) {
  await db.createNewItem(req.body.item_name, req.body.item_qty, req.body.category_id);
  res.redirect('/');
}

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