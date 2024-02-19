const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        default: "Product Name"
    },
    ShortDscription: {
        type: String,
        required: true,
        default: "Short Product Description"
    },
    description: {
        type: String,
        required: true,
        default: "Product Description"
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true,
        default: 0
    },
    categories: [{
        type: String,
        required: true
    }],
    brand: {
        type: String,
        required: true
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seller',
        required: true
    },
    colors: [{
        type: String,
        required: true,
    }],
    dimensions: {
        type: {
            width: Number,
            height: Number,
            depth: Number
        },
        required: true,
    },
    imageUrls: {
        type: [String],
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    ratings: {
        type: [{
            stars: {
                type: Number,
            },
            noOfReviews: {
                type: Number,
            }
        }],
        default: [{
            stars: 5,
            noOfReviews: 0,
        }, {
            stars: 4,
            noOfReviews: 0,
        }, {
            stars: 3,
            noOfReviews: 0,
        }, {
            stars: 2,
            noOfReviews: 0,
        }, {
            stars: 1,
            noOfReviews: 0,
        }, {
            stars: 0,
            noOfReviews: 0,
        },]
    },
    averageRating: {
        type: Number,
        default: 0
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;