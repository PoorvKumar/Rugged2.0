const Order=require("../models/order");
const RazorPay=require("razorpay");
const crypto=require("crypto");

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

module.exports={
    createOrder,
};