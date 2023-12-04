import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import cartReducer from './reducers/cartReducer.jsx';
import wishListReducer from './reducers/wishListReducer.jsx';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { api } from './reducers/dashboard/api.js'
import Modereducer from './reducers/dashboard/mode.js' 
import OrderReducer from './reducers/orderSlice/index.js'
import { setupListeners } from "@reduxjs/toolkit/query";
const store = configureStore({
  reducer: {
    mode: Modereducer,
    cart: cartReducer,
    wishlist: wishListReducer,
    order:OrderReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});
setupListeners(store.dispatch);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
