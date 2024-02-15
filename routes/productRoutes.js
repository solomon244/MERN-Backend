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
router.post('/register',protect,productValidator, createProduct);
router.put('/update/:id',protect, updateProduct);
router.delete('/delete/:id',protect, deleteProduct);

router.get("/getAllProduct" , protect, adminValidator, getAllProducts)

module.exports = router;

 