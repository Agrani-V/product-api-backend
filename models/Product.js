const mongoose = require('mongoose');

const productSchema =new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required'],
        trim: true // Removing white space
    },
    price: {
        type: Number,
        required: [true, 'Product price is required'],
        min: [0, 'Price must be a positive number']
    },
    quantity: {
        type: Number,
        required: [true, 'Product quantity is required'],
        min: [0, 'Quantity cannot be negative']
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Product', productSchema);