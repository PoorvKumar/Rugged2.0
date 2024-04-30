// const express = require('express');
// const router = express.Router();

// const { getwishlist, addTowishlist,deleteItem, emptywishlist } = require('../controllers/wishlistController');
// const { authenticateToken, authorizeRoles } = require('../middlewares/authMiddleware');

// router.get('/', authenticateToken,authorizeRoles(["customer"]), getwishlist);
// router.post('/add', authenticateToken,authorizeRoles(["customer"]),addTowishlist);
// router.post('/removeProduct', authenticateToken,authorizeRoles(["customer"]), deleteItem);
// router.delete('/empty', authenticateToken,authorizeRoles(["customer"]), emptywishlist);

// module.exports = router;


const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middlewares/authMiddleware');
const { getwishlist, addTowishlist, deleteItem, emptywishlist } = require('../controllers/wishlistController');

/**
 * @swagger
 * tags:
 *   name: Wishlist
 *   description: API endpoints for managing user wishlists
 */

/**
 * @swagger
 * /wishlist:
 *   get:
 *     summary: Retrieve user's wishlist
 *     description: Retrieve the wishlist of the authenticated user
 *     tags: [Wishlist]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Wishlist retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Wishlist'
 * components:
 *   schemas:
 *     Wishlist:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: Unique identifier for the wishlist
 *         items:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Product'
 *           description: List of products in the wishlist
 *         user:
 *           type: string
 *           description: User ID associated with the wishlist
 *       required:
 *         - items
 *         - user

 */
router.get('/', authenticateToken, getwishlist);

/**
 * @swagger
 * /wishlist/add:
 *   post:
 *     summary: Add product to wishlist
 *     description: Add a product to the user's wishlist
 *     tags: [Wishlist]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: string
 *                 description: Product ID to add to the wishlist
 *     responses:
 *       '200':
 *         description: Product added to wishlist successfully
 */
router.post('/add', authenticateToken, addTowishlist);

/**
 * @swagger
 * /wishlist/removeProduct:
 *   post:
 *     summary: Remove product from wishlist
 *     description: Remove a product from the user's wishlist
 *     tags: [Wishlist]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: string
 *                 description: Product ID to remove from the wishlist
 *     responses:
 *       '200':
 *         description: Product removed from wishlist successfully
 */
router.post('/removeProduct', authenticateToken, deleteItem);

/**
 * @swagger
 * /wishlist/empty:
 *   delete:
 *     summary: Empty wishlist
 *     description: Remove all products from the user's wishlist
 *     tags: [Wishlist]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Wishlist emptied successfully
 */
router.delete('/empty', authenticateToken, emptywishlist);

module.exports = router;
