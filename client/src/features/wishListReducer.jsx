import { createSlice } from '@reduxjs/toolkit';

const wishlistFromStorage = JSON.parse(localStorage.getItem('wishlist')) || [];

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    wishlist: wishlistFromStorage,
  },
  reducers: {
    addToWishlist: (state, action) => {
      state.wishlist.push(action.payload);
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist)); // Update localStorage
    },
    removeFromWishlist: (state, action) => {
      const index = state.wishlist.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.wishlist.splice(index, 1);
      }
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist)); // Update localStorage
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
