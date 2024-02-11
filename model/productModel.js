const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: [true, 'User required'],
    },
    title: {
        type: String,
        required: [true, 'Title required'],
    },
    description: {
        type: String,
        required: [true, 'Description required'],
    }
}, {
    timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;