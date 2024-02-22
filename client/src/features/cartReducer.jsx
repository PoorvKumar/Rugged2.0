import { createSlice } from '@reduxjs/toolkit';

const products = [];

const cartFromStorage = JSON.parse(localStorage.getItem('cart')) || [];

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    productsData: products,
    cartTotal: 0,
    cartQuantity: 0,
  },
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    addToCart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
      state.cartQuantity += 1;
      localStorage.setItem('cart', JSON.stringify(state.cart)); // Update localStorage
    },

    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      state.cartQuantity -= 1;
      localStorage.setItem('cart', JSON.stringify(state.cart)); // Update localStorage
    },

    increaseQuan: (state, action) => {
      state.cartQuantity += 1;

      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      state.cart[find].quantity += 1;
      localStorage.setItem('cart', JSON.stringify(state.cart)); // Update localStorage
    },

    decreaseQuan: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      state.cartQuantity -= 1;
      if (state.cart[find].quantity > 1) {
        state.cart[find].quantity -= 1;
      } else {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      }
      localStorage.setItem('cart', JSON.stringify(state.cart)); // Update localStorage
    },

    getCartTotal: (state) => {
      state.cartTotal = state.cart.reduce((s, item) => s + item.quantity * item.price, 0);
    },

    clearCart: (state) => {
      state.cart = [];
      state.cartQuantity = 0;
      state.cartTotal = 0;
      localStorage.removeItem('cart'); // Clear cart from localStorage
    },
  },
});

export const {
  setCart,
  addToCart,
  removeItem,
  getCartTotal,
  increaseQuan,
  decreaseQuan,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
