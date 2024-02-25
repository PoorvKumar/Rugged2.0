const Order=require("../models/order");
// const RazorPay=require("razorpay");
const Cart = require('../models/cart');
const crypto=require("crypto");

const getAllOrders=async(req,res,next)=>
{
    try
    {
        const { page=1, limit=10 }=req.query;
        const orders=await Order.find().limit(limit*1).skip((page-1)*limit).sort({ createdAt: -1 });

        return res.json(orders);
    }
    catch(err)
    {
        next(err);
    }
};
const getUserOrders = async (req, res, next) => {
    try {
      const orders = await Order.find({ user: req.user._id });

      return res.json(orders);
    }
    catch (err) {
        next(err)
    }
}
const getPlacedOrders=async(req,res,next)=>
{
    try
    {
        const orders=await Order.find({ status: "placed" });

        return res.json(orders);
    }
    catch(err)
    {
        next(err);
    }
};
const getShippedOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({ status: "shipped" });

    return res.json(orders);
  } catch (err) {
    next(err);
  }
};
const getDeliveredOrders=async(req,res,next)=>
{
    try
    {
        const orders=await Order.find({ status: "delivered" });

        return res.json(orders);
    }
    catch(err)
    {
        next(err);
    }
};

const getCancelledOrders=async(req,res,next)=>
{
    try
    {
        const orders=await Order.find({ status: "cancelled" });

        return res.json(orders);
    }
    catch(err)
    {
        next(err);
    }
};
const shipOrder = async (req, res, next) => {
  try {
    const { id } = req.body;
    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({ msg: "Order not found" });
    }
    if (order.status === "shipped") {
        return res.status(400).json({ msg: "Order already shipped" });
    }
    order.status = "shipped";
    order.save();

    return res.json(order);
  } catch (err) {
    next(err);
  }
};
const createOrder=async (req,res,next)=>
{
    try
    {
        const { items, totalAmount, shippingAddress, paymentMode }=req.body;

        if (!items || !totalAmount || !shippingAddress || !paymentMode) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        // const instance=new RazorPay({
        //     key_id: process.env.RAZOR_PAY_KEY_ID,
        //     key_secret: process.env.RAZOR_PAY_KEY_SECRET
        // });

        const order=new Order({
            items, 
            totalAmount,
            user: req.user,
            shippingAddress,
            paymentMode,
            status: "placed"
        });

        const savedOrder=await order.save();

        const deletionResult = await Cart.deleteOne({ user: req.user });

        if (deletionResult.deletedCount > 0) {
            console.log('Cart deleted successfully');
        } else {
            console.log('Cart not found');
        }
        
        // await updateSellerAnalytics(order);
        // const options={
        //     amount: totalAmount,
        //     currency: "INR",
        //     receipt: crypto.randomBytes(10).toString("hex"),
        // };

        // instance.orders.create(options,(err,order)=>
        // {
        //     if(err)
        //     {
        //         console.log("Razorpay: Error creating Order",err);
        //         next(err);
        //     }

        //     return res.status(201).json({ orderDetails: savedOrder, orderData: order });
        // });

        return res.status(201).json(savedOrder);
    }
    catch(err)
    {
        next(err);
    }

    return res.json({ msg: "Successfull!" });
};
const updateSellerAnalytics = async (order) => {
  try {
    for (const orderItem of order.items) {
      const { productId, quantity } = orderItem;
      const product = await Product.findById(productId);

      if (!product) {
        console.error(`Product not found for ID: ${productId}`);
        continue;
      }
      const existingAnalytics = await Analytics.findOne({
        seller_id: product.seller,
        "items.productId": productId,
      });

      if (existingAnalytics) {
        await Analytics.updateOne(
          {
            seller_id: product.seller,
            "items.productId": productId,
          },
          {
            $inc: { "items.$.quantity": quantity },
          }
        );
      } else {
        await Analytics.findOneAndUpdate(
          { seller_id: product.seller },
          { $push: { items: { productId, quantity } } },
          { upsert: true, new: true }
        );
      }
    }
  } catch (error) {
    console.error("Error updating seller analytics:", error);
    throw error;
  }
};
const cancelOrder=async(req,res,next)=>
{
    try
    {
        const { id } = req.body;
        const order=await Order.findById(id);

        if(!order)
        {
            return res.status(404).json({ msg: "Order not found" });
        }
         if (order.status === "cancelled") {
           return res.status(400).json({ msg: "Order already cancelled" });
         }
        order.status="cancelled";
        order.save();

        return res.json(order);
    }
    catch(err)
    {
        next(err);
    }
};

const deleteOrder=async(req,res,next)=>
{
    try
    {
        const { id }=req.params;

        const order=await Order.findByIdAndDelete(id);

        if(!order)
        {
            return res.status(404).json({ msg: "Order not found" });
        }

        return res.json({ msg: "Order deleted successfully" });
    }
    catch(err)
    {
        next(err);
    }
};

module.exports={
    getAllOrders,
    getPlacedOrders,
    getDeliveredOrders,
    getCancelledOrders,
    createOrder,
    cancelOrder,
    deleteOrder,
    getUserOrders,
    getShippedOrders,
    shipOrder
};