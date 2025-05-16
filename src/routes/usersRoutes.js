const express = require('express');
const router = express.Router();

const UserController = require('../controllers/usersControllers');  
const validateLogin = require('../middlewares/validateLogin');
const authenticateToken = require('../middlewares/authenticateToken');

router.post('/login', validateLogin, UserController.login);
router.put('/:id', authenticateToken, UserController.updateUser);
router.post('/', UserController.createUser);
router.get('/', UserController.findAllUsers);
router.get('/:id', UserController.findUserById);
router.delete('/:id', authenticateToken, UserController.deleteUser);
router.get('/:id/orders', authenticateToken, UserController.findOrdersByUserId);

module.exports = router;
