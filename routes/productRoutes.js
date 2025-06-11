const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Creating a new product
router.post('/', async (req, res) => {
    try {
        const { name, price, quantity } = req.body;
        const product = new Product({ name, price, quantity });
        await product.save();
        res.status(201).json({ message: 'Product created successfully', product });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create product', details: error.message });
    }
});

// Read all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products', details: error.message });
    }
});

//Read a product by ID
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found'});
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch product', details: error.message })
    }
});

//Update a product by ID
router.put('/:id', async (req, res) => {
    try {
        const { name, price, quantity } = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { name, price, quantity },
            { new: true}
        );
        if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json({ message: 'Product updated successfully', updatedProduct });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update product', details: error.message });
    }
});

//Delete a product by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) return res.status(404).json({ message: 'Product not found'});
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete product', details: error.message });
    }
});

module.exports = router;