const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: {
        type: String, // Fix the type
        required: [true, "Title required"],
    },
    description: {
        type: String, // Fix the type
        required: [true, "Description required"],
    }
}, {
    timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;