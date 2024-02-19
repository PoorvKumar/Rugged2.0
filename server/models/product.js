const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    brand: {
        type: String
    },
    categories: [
        {
            type: String
        }
    ],
    images: [
        {
            type: String
        }
    ],
    stockQuantity: {
        type: Number,
        default: 0
    },
    seller:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }, //seller is a user with role seller
    reviews: [
        {
            user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            rating: { type: Number, required: true },
            comment: { type: String },
            date: { type: Date, default: Date.now }
        }
    ], // Array of review objects
    ratingCounts: {
        1: { 
            type: Number, 
            default: 0 
        },
        2: { 
            type: Number, 
            efault: 0 
        },
        3: { 
            type: Number, 
            efault: 0 
        },
        4: { 
            type: Number, 
            efault: 0 
        },
        5: { 
            type: Number, 
            efault: 0 
        }
    },
    discount: { 
        type:Number, 
        default: 0 
    },
    colors: [
        { 
            typ: String 
        }
    ],
    dimensions: {
        length: { 
           type: Number 
        },
        width: { 
            type: Number 
        },
        height: {
            type: Number
        }
    },
    createdAt: { 
        type: Date, 
        default: ate.now 
    },
    updatedAt: { 
        type: Date, 
        default:Date.now 
    },
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product