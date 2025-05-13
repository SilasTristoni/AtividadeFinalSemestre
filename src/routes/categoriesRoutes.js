const express = require('express');
const router = express.Router();
const categoriesControllers = require('../controllers/categoriesControllers.js');

// Route to get all categories

router.get('/', categoriesControllers.findAllCategories);
router.get('/:id', categoriesControllers.findCategoryById);
router.post('/', categoriesControllers.createCategory);
router.put('/:id', categoriesControllers.updateCategory);
router.delete('/:id', categoriesControllers.deleteCategory);
router.get('/products/:id', categoriesControllers.findProductsByCategoryId);

module.exports = router;