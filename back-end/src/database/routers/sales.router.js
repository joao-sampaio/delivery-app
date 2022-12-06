const express = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const { saleController } = require('../controllers');

const router = express.Router();

router.get('/', authMiddleware, saleController.getAllSales);
router.get('/:id', saleController.getSaleById);

module.exports = router;