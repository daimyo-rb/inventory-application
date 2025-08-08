const db = require('../db/queries');

async function getIndex(req, res) {
  const categories = await db.getCategories();
  console.log(categories);
  res.render('index');
}

module.exports = {
  getIndex
}