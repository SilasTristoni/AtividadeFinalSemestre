const express = require('express');
const router = express.Router();
const ordersControllers = require('../controllers/ordersControllers.js');

// Route to get all orders
router.get('/', ordersControllers.findAllOrders);
router.get('/:id', ordersControllers.findOrderById);
router.post('/', ordersControllers.createOrder);
router.put('/:id', ordersControllers.updateOrder);
router.delete('/:id', ordersControllers.deleteOrder);
router.get('/user/:id', ordersControllers.findOrdersByUserId);

module.exports = router;

