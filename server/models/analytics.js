const mongoose = require("mongoose");

const AnalyticsSchema = new mongoose.Schema({
    seller_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    
});

module.exports = mongoose.model("Wishlist", wishlistSchema);
