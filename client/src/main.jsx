import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import cartReducer from './reducers/cartReducer.jsx';
import wishListReducer from './reducers/wishListReducer.jsx';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const store=configureStore({reducer:{
  cart:cartReducer,
  wishlist:wishListReducer,
}});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
