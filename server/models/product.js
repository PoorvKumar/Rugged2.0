const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
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
    type: String
  }],
  dimensions: {
    type: {
      width: Number,
      height: Number,
      depth: Number
    }
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
    type: [Number],
    default: []
  },
  averageRating: {
    type: Number,
    default: 0
  },
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review'
  }],
  ruggedVerified:{
    type: Boolean
  },
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