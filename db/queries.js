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

async function getCategoryNameFromId(category_id) {
  const {rows}  = await pool.query(`
    SELECT category_name from categories where id = $1;
  `, [category_id]);
  if (rows.length > 1) { throw new Error(`${rows.length} names (expected 1)`)};
  return rows[0].category_name;
}

module.exports = {
  getCategories,
  getItemsByCategoryId,
  getCategoryNameFromId
}