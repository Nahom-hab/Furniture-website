import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    nameAMH: {
        type: String,
        required: true,
    },
    type:{
        enum:['Dining Room', 'Living Room', 'Outdoor', 'Kitchen', 'Bedroom']

    },
    descriptionAMH: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    originalPrice: {
        type: Number,
    },
    discount: {
        type: Number,
        default: 0,
    },
    stock: {
        type: Number,
        required: true,
        min: 0,
    },
    dimensions: {
        type: String, // e.g. "200cm x 90cm x 85cm"
    },
    material: {
        type: String,
    },
    availableColors: {
        type: [String], // Array of available colors
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Product = mongoose.model('Product', productSchema);

export default Product