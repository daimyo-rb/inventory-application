const db = require('../db/queries');

async function getCategory(req, res) {
  const rows = await db.getItemsByCategoryId(req.params.category_id);
  res.render('category', {items: rows});
}

module.exports = {
  getCategory
}