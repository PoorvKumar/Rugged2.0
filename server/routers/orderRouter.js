const express=require("express");
const router=express.Router();

const { authenticateToken, authorizeRoles }=require("../middlewares/authMiddleware");
const orderController=require("../controllers/orderController");

router.get('/',authenticateToken,authorizeRoles(['admin']),orderController.getAllOrders);
router.post('/',authenticateToken,orderController.createOrder);
router.get("/user",authenticateToken,orderController.getUserOrders);
router.get("/placed-orders",authenticateToken,orderController.getPlacedOrders);
router.get("/shipped-orders",authenticateToken,orderController.getShippedOrders);
router.get("/deliever-orders",authenticateToken,orderController.getDeliveredOrders);
router.get("/cancelled-orders",authenticateToken,orderController.getCancelledOrders);

router.post('/cancel-order',authenticateToken,orderController.cancelOrder);
router.post('/ship-order',authenticateToken,authorizeRoles(['admin']),orderController.shipOrder);
router.delete('/:id',authenticateToken,authorizeRoles(['admin']),orderController.deleteOrder);

module.exports=router;