const Cart = require('../models/cart');

// Controller to get the cart for the authenticated user
exports.getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user._id }).populate('items.product');

        res.json(cart);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Controller to add a product to the cart
exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  try {
      let cart = await Cart.findOne({ user: req.user._id });

      // If cart doesn't exist, create a new one
      if (!cart) {
          cart = new Cart({ user: req.user._id, items: [] });
      }

      // Check if the product already exists in the cart
      const existingItemIndex = cart.items.findIndex(item => item.product == productId);

      if (existingItemIndex !== -1) {
          // If product exists, update its quantity
          cart.items[existingItemIndex].quantity += parseInt(quantity, 10); // Set quantity to the new value
      } else {
          // If product doesn't exist, add it to the cart
          cart.items.push({ product: productId, quantity });
      }

      await cart.save();
      res.json(cart);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
};


// Controller to remove a product from the cart
exports.removeFromCart = async (req, res) => {
    const { productId } = req.params;
    try {
        let cart = await Cart.findOne({ user: req.user._id });

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        cart.items = cart.items.filter(item => item.product != productId);
        await cart.save();
        res.json(cart);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
