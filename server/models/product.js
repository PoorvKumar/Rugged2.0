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
    tags: [
        { 
            type: String 
        }
    ],
    categories: [
        {
            type: String
        }
    ],
    images: [
        {
            "type":{type:String,required:true},
            "source":{type:String,required:true},
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
            name:{type:String,required:true},
            rating: { type: Number, required: true },
            review: { type: String ,required:true},
            reviewTitle: { type: String ,required:true},
            helpful:[{type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
            unhelpful:[{type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
            date: { type: Date, default: Date.now }
        }
    ], // Array of review objects
    ratingCounts: {
        "1": {
            type: Number,
            default: 0
        },
        "2": {
            type: Number,
            default: 0
        },
        "3": {
            type: Number,
            default: 0
        },
        "4": {
            type: Number,
            default: 0
        },
        "5": {
            type: Number,
            default: 0
        }
    },
    discount: {
        type: Number,
        default: 0
    },
    colours: [
        {
            type: String,
            required: true,
        }
    ],
    dimensions: {
        length: {
            type: Number,
            required: true,
        },
        width: {
            type: Number,
            required: true,
        },
        height: {
            type: Number,
            required: true,
        }
    },
    ruggedVerrified: {
        type: Boolean,
        required: true,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product