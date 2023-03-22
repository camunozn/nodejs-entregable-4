const { Router } = require('express');
const userController = require('../controllers/user.controller');
const authController = require('../controllers/auth.controller');

const router = { Router };

router.post('/singup', authController.singUp);
router.post('/login', authController.login);
router.get('/', userController.getAllUsers);
