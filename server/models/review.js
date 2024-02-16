const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    rating: { type: Number, required: true },
    comment: { type: String },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Review', reviewSchema);
