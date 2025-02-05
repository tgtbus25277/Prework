const express = require('express');
const router = express.Router();
const productController = require('../../controllers/productcontroller.js');

router.get('/', productController.getAllProducts);        // ดึงรายการสินค้าทั้งหมด
router.get('/:id', productController.getProductById);     // ดึงสินค้าตาม ID
router.post('/', productController.createProduct);        // สร้างสินค้าใหม่
router.put('/:id', productController.updateProduct);      // อัปเดตสินค้าตาม ID
router.delete('/:id', productController.deleteProduct);   // ลบสินค้าตาม ID

module.exports = router;
