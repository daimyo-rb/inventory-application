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

module.exports = {
  getItemUpdate,
  postItemUpdate
}