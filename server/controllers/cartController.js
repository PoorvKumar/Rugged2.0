const Cart = require("../models/cart");
const getCart = async (req, res, next) => {
  try {
         const userId = req.user._id;

         // Query the Cart collection to find the cart items for this user
         const cart = await Cart.findOne({ user: userId }).populate({
           path: "items",
           populate: {
             path: "productId",
             model: "Product",
// Include only the fields you need from the Product model
           },
         });

         // If no cart is found for this user, return an empty array or a message
         if (!cart) {
           return []
         }

         // Create an array to hold the populated cart items with quantity
         const populatedCartItems = cart.items.map((item) => {
           return {
             product: item.productId, // Full product instance
             quantity: item.quantity, // Quantity
           };
         });

    // Return the populated cart items in the response
    console.log(populatedCartItems);
         res.json(populatedCartItems);
  } catch (error) {
    next(error);
  }
};
const addCart = async (req, res, next) => {
  try {
    const { productId} = req.body
    const userId = req.user._id; 
    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      console.log("Check")
      cart = new Cart({ user: userId, items: [] });
    }
    console.log(cart)
    if (cart.items.length>0) {
      // console.log("HELLO")
      const existingItemIndex = cart.items.findIndex(
        (item) => item.productId === productId
      );
      if (existingItemIndex !== -1) {
        cart.items[existingItemIndex].quantity += 1;
      } else {
        cart.items.push({ productId, quantity: 1 });
      }
    }
    else {
        cart.items.push({ productId, quantity: 1 });
    }
    await cart.save();
    res.json(cart);
  } catch (error) {
    next(error);
  }
};

const updateCart = async (req, res, next) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user.id; 
    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    
    const item = cart.items.find(
      (item) => item.productId.toString() === productId
    );
    if (!item) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    
    item.quantity = quantity;

    await cart.save();
    res.json(cart);
  } catch (error) {
    next(error);
  }
};

const deleteCart = async (req, res, next) => {
  try {
    const { productId } = req.body;
    const userId = req.user.id; 
    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    
    cart.items = cart.items.filter(
      (item) => item.productId.toString() !== productId
    );

    await cart.save();
    res.json(cart);
  } catch (error) {
    next(error);
  }
};

const emptyCart = async (req, res, next) => {
  try {
    const userId = req.user.id; 
    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    
    cart.items = [];

    await cart.save();
    res.json(cart);
  } catch (error) {
    next(error);
  }
};

module.exports = { getCart, addCart, updateCart, deleteCart, emptyCart };
