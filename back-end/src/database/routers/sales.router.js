const express = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const { saleController } = require('../controllers');

const router = express.Router();

router.get('/', authMiddleware, saleController.getAllSales);

module.exports = router;