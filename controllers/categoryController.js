const db = require('../db/queries');

async function getCategory(req, res) {
  const category_id = req.params.category_id
  const rows = await db.getItemsByCategoryId(category_id);
  const category = await db.getCategoryFromId(category_id)
  console.log(category);
  res.render('category', {category: category, items: rows});
}

module.exports = {
  getCategory
}