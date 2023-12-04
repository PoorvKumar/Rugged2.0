import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Home from './pages/Home';
import LoginSignUp from './pages/LoginSignUp';
import MainLayout from './layouts/MainLayout';
import LoginModal from './components/auth/LoginModal';
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
import Orders from './pages/Orders'
import ProductPage from './pages/ProductPage';
import ProductSearchPage from './pages/ProductSearchPage';
import Checkout from './components/Checkout';
import AboutUs from './components/AboutUs/AboutUs';
import RentForm from './components/Rent/RentForm';
import ContactUs from './pages/ContactUs';
import SinglePostBlog from './pages/blog/SinglePostBlog';
import Blogs from './pages/blog/Blogs';
import CreateBlogPost from './pages/blog/CreateBlogPost';
import SingleOrder from './pages/SingleOrder'
import Trackingpage from './pages/Trackingpage'
import AddProduct from './pages/dash/Addproduct'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="login" element={<LoginSignUp />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="blogs/" element={<Blogs />} />
          <Route path="blogs/:id" element={<SinglePostBlog />} />
          <Route path="blogs/create-post" element={<CreateBlogPost />} />
          <Route path="cart/" element={<Cart2 />} />
          <Route path="wishlist/" element={<WishList />} />
          <Route path="products/" element={<ProductSearchPage />} />
          <Route path="products/:id" element={<ProductPage />} />
          <Route path="checkout/" element={<Checkout />} />
          <Route path="rent/" element={<RentForm />} />
          <Route path="about/" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/order/:id" element={<SingleOrder />} />
          <Route
            path="/tracking/:orderid/:statusid"
            element={<Trackingpage />}
          />
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
          <Route path="/dashboard/addproduct" element={<AddProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
