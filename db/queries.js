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

async function getItemById(item_id) {
  const {rows}  = await pool.query(`
    SELECT * from items where id = $1;
  `, [item_id]);
  if (rows.length > 1) { throw new Error(`${rows.length} names (expected 1)`)};
  return rows[0];
}

async function createNewItem(item_name, item_qty, category_id) {
  await pool.query(`INSERT INTO items (item_name, item_qty, category_id)
    VALUES ($1, $2, $3);`, [item_name, item_qty, category_id]);
}

async function updateItemById(item_id, item_name, item_qty, category_id) {
  await pool.query(`UPDATE items
    SET item_name = $1, item_qty = $2, category_id = $3
    WHERE id = $4`, [item_name, item_qty, category_id, item_id]
  );
}

async function deleteItemById(item_id) {
  await pool.query(`DELETE FROM items WHERE id = $1`, [item_id]);
}

async function getCategoryFromId(category_id) {
  const {rows}  = await pool.query(`
    SELECT * from categories where id = $1;
  `, [category_id]);
  if (rows.length > 1) { throw new Error(`${rows.length} names (expected 1)`)};
  return rows[0];
}

async function createNewCategory(category_name) {
  await pool.query(`INSERT INTO categories (category_name)
    VALUES ($1);`, [category_name]);
}

module.exports = {
  getCategories,
  getItemsByCategoryId,
  getItemById,
  createNewItem,
  updateItemById,
  getCategoryFromId,
  deleteItemById,
  createNewCategory
}