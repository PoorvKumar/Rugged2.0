const express=require("express");
const router=express.Router();

const { authenticateToken, authorizeRoles }=require("../middlewares/authMiddleware");
const orderController=require("../controllers/orderController");

router.get('/',authenticateToken,authorizeRoles(['admin']),orderController.getAllOrders);
router.post('/',authenticateToken,orderController.createOrder);

router.get("/placed-orders",authenticateToken,orderController.getPlacedOrders);
router.get("/deliever-orders",authenticateToken,orderController.getDeliveredOrders);
router.get("/cancelled-orders",authenticateToken,orderController.getCancelledOrders);

router.post('/cancel-order',authenticateToken,orderController.cancelOrder);
router.delete('/:id',authenticateToken,authorizeRoles(['admin']),orderController.deleteOrder);

module.exports=router;