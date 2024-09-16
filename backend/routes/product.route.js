import express from 'express';
import { createProduct, deleteProduct, getProducts, getProductById, updateProduct } from '../controller/product.controller.js'

const router = express.Router();

// Create a new product
router.post('/create', createProduct);

// Get all products
router.get('/', getProducts);

// Get a single product by ID
router.get('/:id', getProductById);

// Update a product
router.put('/:id', updateProduct);

// Delete a product
router.delete('/:id', deleteProduct);

export default router; // Use export default for the router