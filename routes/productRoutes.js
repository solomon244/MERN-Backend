const express = require('express');
const router = express.Router();
const { productValidator } = require('../middleware/productValidator');
const { protect } = require('../middleware/authMiddleware');
const { adminValidator } = require('../middleware/adminValidator');
const {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getAllProducts
}
=require("../controllers/productController");
router.get('/',protect, getProducts);
router.post('/product',protect,productValidator, createProduct);
router.put('/product/:id',protect, updateProduct);
router.delete('/product/:id',protect, deleteProduct);

router.get("/getAllProduct" , protect, adminValidator, getAllProducts)

module.exports = router;

