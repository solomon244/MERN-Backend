const Joi = require('joi');
const asyncHandler = require('express-async-handler');
const Product = require('../model/productModel');
const { request } = require('express');
const User = require('../model/userModel')

//get all product
const getAllProducts = asyncHandler(async(req , res)=>{
    const products = await Product.find();
    res.status(200).json(products)
})

// Get product
const getProducts =async (req, res) => {
    const products = await Product.find({user: req.user.id});
    res.status(200).json(products);
};

// Create product
const createProduct = async (req, res) => {
    const products = await Product.create({
        user:req.user.id,
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        brand:req.body.brand,
        quantity:req.body.quantity,
    });
    res.status(200).json(products);
};

// Update product 
const updateProduct = async (req, res) => {
    const products = await Product.findById(req.params.id);
    if (!products) {
        return res.status(404).json({ error: 'Product not found' });
    }
const user = await User.findById(req.user.id)
if(!user){
    res.status(401).Json({error:"user not found"})
}
if(products.user.toString() !== user.id){
    res.status(401).Json({error:"user not authorized"})
}
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedProduct);
};

// Delete product 
const deleteProduct = async (req, res) => {
    const products = await Product.findById(req.params.id);
    if (!products) {
        return res.status(404).json({ error: 'Product not found' });
    }

    const user = await User.findById(req.user.id)
if(!user){
    res.status(401).Json({error:"user not found"})
}
if( products.user.toString() !== user.id){
    res.status(401).Json({error:"user not authorized"})
}
    const productDelete = await Product.findByIdAndRemove(req.params.id);

    res.status(200).json({  message: 'Deleted successfully' });
};

module.exports = {
    getAllProducts,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
};