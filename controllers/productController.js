const Joi = require('joi');
const asyncHandler = require('express-async-handler');
const Product = require('../model/productModel');
const { request } = require('express');

// Get product
const getProducts =async (req, res) => {
    const product = await Product.find();
    console.log('body data', req.body);
    res.status(200).json(products);
};

// Create product
const createProduct = async (req, res) => {
    const product = await Product.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price
    });
    res.status(200).json(product);
};

// Update product 
const updateProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(404).json({ error: 'Product not found' });
    }

    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedProduct);
};

// Delete product 
const deleteProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(404).json({ error: 'Product not found' });
    }

    const productDelete = await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({ productDelete, message: 'Deleted successfully' });
};

module.exports = {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
};