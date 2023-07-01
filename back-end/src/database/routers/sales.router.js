const express = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const { saleController } = require('../controllers');
const valueMiddleware = require('../middlewares/value.middleware');

const router = express.Router();

router.get('/', authMiddleware, saleController.getAllSales);
router.get('/:id', saleController.getSaleById);
router.put('/:id', saleController.updateStatus);
router.post('/', authMiddleware, valueMiddleware, saleController.registerSale);

module.exports = router;
