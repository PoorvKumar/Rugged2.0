// const express = require('express');
// const router = express.Router();
// const { authenticateToken } = require('../middlewares/authMiddleware');
// const cartController = require('../controllers/cartController');

// router.use(authenticateToken);

// // Route to get the cart
// router.get('/', cartController.getCart);

// // Route to add a product to the cart
// router.post('/', cartController.addToCart);
// router.delete('/emptycart',cartController.emptyCart)
// // Route to remove a product from the cart
// // router.delete('/:productId', cartController.removeFromCart);

// module.exports = router;

const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middlewares/authMiddleware');
const cartController = require('../controllers/cartController');

/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: Endpoints for managing user cart
 */

/**
 * @swagger
 * /api/cart:
 *   get:
 *     summary: Get user's cart
 *     tags: [Cart]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: User's cart retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cart'
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 * components:
 *   schemas:
 *     Cart:
 *       type: object
 *       properties:
 *         user:
 *           type: string
 *           description: User ID associated with the cart
 *         items:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               product:
 *                 type: string
 *                 description: Product ID in the cart
 *               quantity:
 *                 type: integer
 *                 default: 1
 *       example:
 *         user: 1234567890abcdef
 *         items:
 *           - product: 0987654321abcdef
 *             quantity: 2

 */

router.get('/', cartController.getCart);

/**
 * @swagger
 * /api/cart:
 *   post:
 *     summary: Add a product to the cart
 *     tags: [Cart]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: string
 *               quantity:
 *                 type: integer
 *             example:
 *               productId: 1234567890
 *               quantity: 1
 *     responses:
 *       200:
 *         description: Product added to cart successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cart'
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */

router.post('/', cartController.addToCart);

/**
 * @swagger
 * /api/cart/emptycart:
 *   delete:
 *     summary: Empty the user's cart
 *     tags: [Cart]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Cart emptied successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cart'
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */

router.delete('/emptycart', cartController.emptyCart);

module.exports = router;
