const express = require('express');
const router = express.Router();
const {register,login,getprofile} = require('../controllers/userController');

router.post("/", register);
router.post("/login",login);
router.get("/profile",getprofile)

module.exports = router;