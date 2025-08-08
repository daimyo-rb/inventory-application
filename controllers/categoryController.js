const db = require('../db/queries');

async function getCategory(req, res) {
  const category_id = req.params.category_id
  const rows = await db.getItemsByCategoryId(category_id);
  const category_name = await db.getCategoryNameFromId(category_id)
  const formatted_category_name = category_name.charAt(0).toUpperCase() + category_name.slice(1);
  res.render('category', {category_name: formatted_category_name, items: rows});
}

module.exports = {
  getCategory
}