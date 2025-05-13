const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/usersControllers.js');

// Routes
router.get('/', usersControllers.findAllUsers);
router.get('/:id', usersControllers.findUserById);
router.post('/', usersControllers.createUser);
router.put('/:id', usersControllers.updateUser);
router.delete('/:id', usersControllers.deleteUser);
router.get('/orders/:id', usersControllers.findOrdersByUserId);

module.exports = router;
