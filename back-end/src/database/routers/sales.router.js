const express = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const { saleController } = require('../controllers');

const router = express.Router();

router.get('/', authMiddleware, saleController.getAllSales);
router.get('/:id', saleController.getSaleById);
router.put('/:id', saleController.updateStatus);
router.post('/', authMiddleware, saleController.registerSale);

module.exports = router;
