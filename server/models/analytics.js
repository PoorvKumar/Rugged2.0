const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    quantity: { type: Number },
  },
  { timestamps: true }
);
const AnalyticsSchema = new mongoose.Schema({
  items: [itemSchema],
  seller_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  phone: { type: String },
  accountNumber: { type: String },
  upiId: { type: String },
  about:{type:String},
});
module.exports = mongoose.model("Analytics", AnalyticsSchema);
