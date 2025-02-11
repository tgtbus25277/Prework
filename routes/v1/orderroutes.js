const express = require('express');
const router = express.Router();
const orderController = require('../../controllers/ordercontrollers');

router.post('/orders', orderController.createOrder);
router.get('/orders', orderController.getAllOrders);
router.get('/orders/user/:userId', orderController.getOrdersByUser);
router.get('/orders/:orderId', orderController.getOrderById);
router.put('/orders/:orderId', orderController.updateOrder);
router.delete('/orders/:orderId', orderController.deleteOrder);

module.exports = router;
