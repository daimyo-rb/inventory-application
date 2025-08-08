const db = require('../db/queries');

async function getCategory(req, res) {
  const category_id = req.params.category_id
  const rows = await db.getItemsByCategoryId(category_id);
  const category = await db.getCategoryFromId(category_id)
  console.log(category);
  res.render('category', {category: category, items: rows});
}

function getNewCategory(req, res) {
  res.render('newCategory');
}

async function postNewCategory(req, res) {
  await db.createNewCategory(req.body.category_name);
  res.redirect('/');
}

module.exports = {
  getCategory,
  getNewCategory,
  postNewCategory
}