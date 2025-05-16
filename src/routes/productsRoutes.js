const express = require('express');
const router = express.Router();
const productsControllers = require('../controllers/productsControllers');

// Route to get all products
router.get('/', productsControllers.findAllProducts);
router.get('/:id', productsControllers.findProductById);
router.post('/', productsControllers.createProduct);
router.put('/:id', productsControllers.updateProduct);
router.delete('/:id', productsControllers.deleteProduct);
router.get('/category/:id', productsControllers.findProductsByCategoryId);
router.get('/orders/:id', productsControllers.findProductsByOrderId);

module.exports = router;