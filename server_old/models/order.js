import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
 {products: [
    {
      product: { type: Object, required: true },
      quantity: { type: Number, required: true }
    }
  ],
  user: {
    firstname: {
      type: String,
      required: true
    },
    lastname: {
        type:String,
        required:true
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    }
  },
  date:{
    type: Date,
    default: Date.now
  },
  Status:{
    type: String,
    required:true,
  }
},
  { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);
export default Order;
