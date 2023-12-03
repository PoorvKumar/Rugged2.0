import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css';
import { Routes, Route, BrowserRouter,Navigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Home from './pages/Home';
import LoginSignUp from './pages/LoginSignUp';
import Blogs from './pages/Blogs';
import MainLayout from './layouts/MainLayout';
import LoginModal from './components/auth/LoginModal';
import SinglePostBlog from './pages/SInglePostBlog';
import Cart2 from './components/Cart/Cart2';
import WishList from './components/WishList/WishList';
import Dashboard from './pages/dash/dashboard'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./components/dashboard/theme";
import { useMemo } from "react";
import DashLayout from './pages/dash/layout'
import Products from './pages/dash/products'
import Customers from './pages/dash/customers'
import Transactions from './pages/dash/transactions'
import Updateuser from './pages/dash/Updateuser'
import Orders from './pages/dash/orders'
import ProductPage from './pages/ProductPage';
import ProductSearchPage from './pages/ProductSearchPage';
import Checkout from './components/Checkout';
function App() {
  const mode = useSelector((state) => state.mode.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="login" element={<LoginSignUp />} />
          <Route path="/" element={<MainLayout />}>
            <Route path="blogs/" element={<Blogs />} />
            <Route path="blogs/:id" element={<SinglePostBlog />} />
            <Route path="cart/" element={<Cart2 />} />
            <Route path="wishlist/" element={<WishList />} />
            <Route path='products/' element={<ProductSearchPage/>} />
            <Route path='products/:id' element={<ProductPage/>} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
          <Route element={<DashLayout />}>
            <Route
              path="/dashboard"
              element={<Navigate to="/dashboard/home" replace />}
            />
            <Route path="/dashboard/home" element={<Dashboard />} />
            <Route path="/dashboard/products" element={<Products />} />
            <Route path="/dashboard/customers" element={<Customers />} />
            <Route path="/dashboard/orders" element={<Transactions />} />
            <Route path="/dashboard/updateuser" element={<Updateuser />} />
            <Route path="/dashboard/order/:id" element={<Orders />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App
