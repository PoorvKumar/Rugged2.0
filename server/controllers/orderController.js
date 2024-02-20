const Order=require("../models/order");
const RazorPay=require("razorpay");
const crypto=require("crypto");

const getAllOrders=async(req,res,next)=>
{
    try
    {
        const orders=await Order.find();

        return res.json(orders);
    }
    catch(err)
    {
        next(err);
    }
};

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

const createOrder=async (req,res,next)=>
{
    try
    {
        const { items, totalAmount, shippingAddress, paymentMode }=req.body;

        if (!items || !totalAmount || !shippingAddress || !paymentMode) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const instance=new RazorPay({
            key_id: process.env.RAZOR_PAY_KEY_ID,
            key_secret: process.env.RAZOR_PAY_KEY_SECRET
        });

        const order=new Order({
            items, 
            totalAmount,
            user: req.user,
            shippingAddress,
            paymentMode,
            status: "placed"
        });

        const savedOrder=await order.save();

        const options={
            amount: totalAmount,
            currency: "INR",
            receipt: crypto.randomBytes(10).toString("hex"),
        };

        instance.orders.create(options,(err,order)=>
        {
            if(err)
            {
                console.log("Razorpay: Error creating Order",err);
                next(err);
            }

            return res.status(201).json({ orderDetails: savedOrder, orderData: order });
        });
    }
    catch(err)
    {
        next(err);
    }

    return res.json({ msg: "Successfull!" });
};

const cancelOrder=async(req,res,next)=>
{
    try
    {
        const { orderId }=req.body;
        const order=await Order.findById(orderId);

        if(!order)
        {
            return res.status(404).json({ msg: "Order not found" });
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
    deleteOrder
};