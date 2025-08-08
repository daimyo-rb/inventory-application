const pool = require('./pool');

async function getCategories() {
  const { rows } = await pool.query('SELECT * FROM categories');
  return rows;
};

async function getItemsByCategoryId(category_id) {
  const { rows } = await pool.query('SELECT * FROM items WHERE category_id = $1;', [category_id]);
  console.log(rows);
  return rows;
};

module.exports = {
  getCategories,
  getItemsByCategoryId
}