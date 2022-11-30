const express = require('express');

const router = express.Router();

const { userController } = require('../controllers');

router.post('/newUser', userController.newUser);
router.get('/login', userController.login);

module.exports = router;