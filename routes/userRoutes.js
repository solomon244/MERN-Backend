const express = require('express');
const router = express.Router();
const { register, login, getProfile } = require('../controllers/userController');
const {userValidation}=require("../middleware/UserValidator");
const {protect}= require("../middleware/authMiddleware")

router.post("/",userValidation, register);
router.post("/login", login);
router.get("/profile", protect, getProfile);

module.exports = router;

