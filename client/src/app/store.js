import { configureStore } from "@reduxjs/toolkit";
import { api } from "../features/dashboard/api.js";
import Modereducer from "../features/dashboard/mode.js";
import OrderReducer from "../features/orderSlice/index.js";
import cartReducer from "../features/cartReducer.jsx";
import wishListReducer from "../features/wishListReducer.jsx";
import productsReducer from "../features/productReducer.jsx";
const store = configureStore({
  reducer: {
    mode: Modereducer,
    cart: cartReducer,
    wishlist: wishListReducer,
    order: OrderReducer,
    products:productsReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});

export default store;
