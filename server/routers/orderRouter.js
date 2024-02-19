const express=require("express");
const router=express.Router();

const { authenticateToken }=require("../middlewares/authMiddleware");
const orderController=require("../controllers/orderController");

router.post('/',authenticateToken,orderController.createOrder);

module.exports=router;