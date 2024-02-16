const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }
});

const orderSchema = new mongoose.Schema({
    items: [orderItemSchema],
    totalAmount: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    shippingAddress: { type: String },
    status: { type: String, enum: ['pending', 'shipped', 'delivered'], default: 'pending' }
});

module.exports = mongoose.model('Order', orderSchema);
