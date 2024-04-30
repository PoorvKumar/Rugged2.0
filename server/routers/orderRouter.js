// const express = require("express");
// const router = express.Router();

// const { authenticateToken, authorizeRoles } = require("../middlewares/authMiddleware");
// const orderController = require("../controllers/orderController");

// router.get('/', authenticateToken, authorizeRoles(['admin']), orderController.getAllOrders);
// router.post('/', authenticateToken, orderController.createOrder);
// router.get("/user", authenticateToken, orderController.getUserOrders);
// router.get("/placed-orders", authenticateToken, orderController.getPlacedOrders);
// router.get("/shipped-orders", authenticateToken, orderController.getShippedOrders);
// router.get("/deliever-orders", authenticateToken, orderController.getDeliveredOrders);
// router.get("/cancelled-orders", authenticateToken, orderController.getCancelledOrders);

// router.post('/cancel-order', authenticateToken, orderController.cancelOrder);
// router.post('/ship-order', authenticateToken, authorizeRoles(['admin']), orderController.shipOrder);
// router.delete('/:id', authenticateToken, authorizeRoles(['admin']), orderController.deleteOrder);

// module.exports = router;


const express = require("express");
const router = express.Router();

const { authenticateToken, authorizeRoles } = require("../middlewares/authMiddleware");
const orderController = require("../controllers/orderController");

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: APIs related to orders
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     OrderItem:
 *       type: object
 *       properties:
 *         productId:
 *           type: string
 *           description: ID of the product in the order item
 *         quantity:
 *           type: integer
 *           description: Quantity of the product in the order item
 *         price:
 *           type: number
 *           description: Price of the product in the order item
 *       required:
 *         - productId
 *         - quantity
 *         - price
 *
 *     Order:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: ID of the order
 *         items:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/OrderItem'
 *           description: List of order items
 *         totalAmount:
 *           type: number
 *           description: Total amount of the order
 *         user:
 *           type: string
 *           description: ID of the user who placed the order
 *         shippingAddress:
 *           type: string
 *           description: Shipping address for the order
 *         paymentMode:
 *           type: string
 *           description: Payment mode used for the order
 *         status:
 *           type: string
 *           enum: ['placed', 'processing', 'shipped', 'delivered', 'cancelled']
 *           description: Status of the order
 *       required:
 *         - items
 *         - totalAmount
 *         - user
 *         - status
 */

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Get all orders (Admin Only)
 *     security:
 *       - bearerAuth: []
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: A list of orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 *   post:
 *     summary: Create a new order
 *     security:
 *       - bearerAuth: []
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       201:
 *         description: The newly created order
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 */
router.route('/')
  .get(authenticateToken, authorizeRoles(['admin']), orderController.getAllOrders)
  .post(authenticateToken, orderController.createOrder);

/**
 * @swagger
 * /orders/user:
 *   get:
 *     summary: Get orders for the authenticated user
 *     security:
 *       - bearerAuth: []
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: A list of user's orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 */
router.get('/user', authenticateToken, orderController.getUserOrders);

/**
 * @swagger
 * /orders/placed-orders:
 *   get:
 *     summary: Get orders with status 'placed' (Admin Only)
 *     security:
 *       - bearerAuth: []
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: A list of orders with 'placed' status
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 */
router.get('/placed-orders', authenticateToken, orderController.getPlacedOrders);

/**
 * @swagger
 * /orders/shipped-orders:
 *   get:
 *     summary: Get orders with status 'shipped' (Admin Only)
 *     security:
 *       - bearerAuth: []
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: A list of orders with 'shipped' status
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 */
router.get('/shipped-orders', authenticateToken, orderController.getShippedOrders);

/**
 * @swagger
 * /orders/delivered-orders:
 *   get:
 *     summary: Get orders with status 'delivered' (Admin Only)
 *     security:
 *       - bearerAuth: []
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: A list of orders with 'delivered' status
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 */
router.get('/delivered-orders', authenticateToken, orderController.getDeliveredOrders);

/**
 * @swagger
 * /orders/cancelled-orders:
 *   get:
 *     summary: Get orders with status 'cancelled' (Admin Only)
 *     security:
 *       - bearerAuth: []
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: A list of orders with 'cancelled' status
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 */
router.get('/cancelled-orders', authenticateToken, orderController.getCancelledOrders);

/**
 * @swagger
 * /orders/cancel-order:
 *   post:
 *     summary: Cancel an order
 *     security:
 *       - bearerAuth: []
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: ID of the order to cancel
 *             required:
 *               - id
 *     responses:
 *       200:
 *         description: The updated order with 'cancelled' status
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 */
router.post('/cancel-order', authenticateToken, orderController.cancelOrder);

/**
 * @swagger
 * /orders/ship-order:
 *   post:
 *     summary: Mark an order as 'shipped' (Admin Only)
 *     security:
 *       - bearerAuth: []
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: ID of the order to mark as shipped
 *             required:
 *               - id
 *     responses:
 *       200:
 *         description: The updated order with 'shipped' status
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 */
router.post('/ship-order', authenticateToken, authorizeRoles(['admin']), orderController.shipOrder);

/**
 * @swagger
 * /orders/{id}:
 *   delete:
 *     summary: Delete an order by ID (Admin Only)
 *     security:
 *       - bearerAuth: []
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the order to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Order deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Message indicating successful deletion
 *               required:
 *                 - msg
 */
router.delete('/:id', authenticateToken, authorizeRoles(['admin']), orderController.deleteOrder);

module.exports = router;
