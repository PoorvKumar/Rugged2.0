const express = require('express');

const router = express.Router();


const { getwishlist, addTowishlist,deleteItem, emptywishlist } = require('../controllers/wishlistController');
const { authenticateToken, authorizeRoles } = require('../middlewares/authMiddleware');


router.get('/', authenticateToken,authorizeRoles(["customer"]), getwishlist);


router.post('/add', authenticateToken,authorizeRoles(["customer"]),addTowishlist);


// router.post('/addtocart/:id', authenticateToken,authorizeRoles(["customer"]), addtoCart);

router.post('/removeProduct', authenticateToken,authorizeRoles(["customer"]), deleteItem);

router.delete('/empty', authenticateToken,authorizeRoles(["customer"]), emptywishlist);

module.exports = router;
