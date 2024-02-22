const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    items: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number}
}],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Cart', cartSchema);
