const db = require('../db/queries');
const { body, validationResult } = require("express-validator");

async function getCategory(req, res) {
  const category_id = req.params.category_id
  const rows = await db.getItemsByCategoryId(category_id);
  const category = await db.getCategoryById(category_id)
  res.render('category', {category: category, items: rows});
}

async function getCategoryUpdate(req, res) {
  const category = await db.getCategoryById(req.params.category_id);
  res.render('editCategory', {category: category});
}

const postCategoryUpdate = [
  body('category_name').trim()
    .isLength({min: 1, max: 50}).withMessage('name must be between 1 and 50 characters.'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('editCategory',
        {category: {id: req.body.category_id,
          category_name: req.body.category_name},
          errors: errors.array()
        });
    }
    await db.updateCategoryById(req.body.category_name, req.body.category_id);
    res.redirect('/');
  }
]

function getNewCategory(req, res) {
  res.render('newCategory');
}

const postNewCategory = [
  body('category_name').trim()
    .isLength({min: 1, max: 50}).withMessage('name must be between 1 and 50 characters.'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('newCategory', {errors: errors.array()});
    }
    await db.createNewCategory(req.body.category_name);
    res.redirect('/');
  }
]


async function deleteCategory(req, res) {
  const category_id = req.params.category_id;
  await Promise.all([
    db.deleteCategoryById(category_id),
    db.deleteItemsByCategoryId(category_id)
  ]);
  res.redirect('/');
}

module.exports = {
  getCategory,
  getNewCategory,
  postNewCategory,
  getCategoryUpdate,
  postCategoryUpdate,
  deleteCategory
}