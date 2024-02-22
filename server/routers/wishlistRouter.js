const express = require('express');

const router = express.Router();


const { getwishlist, addTowishlist, addtoCart, deleteItem, emptywishlist } = require('../controllers/wishlistController');
const { authenticateToken, authorizeRoles } = require('../middlewares/authMiddleware');


router.get('/', authenticateToken,authorizeRoles(["customer"]), getwishlist);


router.post('/addtowishlist/:productId', authenticateToken,authorizeRoles(["customer"]),addTowishlist);


router.post('/addtocart/:id', authenticateToken,authorizeRoles(["customer"]), addtoCart);

router.delete('/removewishlist/:productId', authenticateToken,authorizeRoles(["customer"]), deleteItem);

router.delete('/clearwishlist/:id', authenticateToken,authorizeRoles(["customer"]), emptywishlist);

module.exports = router;
