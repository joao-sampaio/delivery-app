const express = require('express');

const router = express.Router();

const { users } = require('../controllers');

router.post('/newUser', users.newUser);
router.get('/login', users.login);

module.exports = router;