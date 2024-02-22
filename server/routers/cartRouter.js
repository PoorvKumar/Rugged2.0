const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middlewares/authMiddleware');
const cartController = require('../controllers/cartController');

router.use(authenticateToken);

// Route to get the cart
router.get('/', cartController.getCart);

// Route to add a product to the cart
router.post('/', cartController.addToCart);

// Route to remove a product from the cart
router.delete('/:productId', cartController.removeFromCart);

module.exports = router;
