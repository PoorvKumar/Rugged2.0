import { useState } from 'react';
import reactLogo from './assets/react.svg'
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
import AboutUs from './components/AboutUs/AboutUs';
import RentForm from './components/Rent/RentForm';
import ContactUs from './pages/ContactUs';
import SinglePostBlog from './pages/blog/SinglePostBlog';
import Blogs from './pages/blog/Blogs';
import CreateBlogPost from './pages/blog/CreateBlogPost';
import SingleOrder from './pages/orders/SingleOrder';
import Trackingpage from './pages/Trackingpage'
import AddProduct from './pages/dash/Addproduct'
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './pages/dash/Profile'
import MyOrders from './pages/orders/MyOrders';
import BecomeSeller from './pages/BecomeSeller'
import DashSettings from "./pages/dash/dashsettings"
import UserProfile from "./pages/user/UserProfile";
import Checkout from './pages/orders/Checkout';
import ProtectedRoute from './components/ProtectedRoute';
import { useAuthenticate } from './context/AuthContext';
import Loader from './components/Loader';
import ReverseProtectedRoute from './components/ReverseProtectedRoute';
import AdminProducts from  './pages/Admin/Products'
import AddProductPage from './pages/AddProductPage';
import Blog from './pages/dash/Blogs';
import CreateBlog from './pages/dash/CreateBlog';
import AdminLayout from './pages/Admin/layout'
import Complaints from './pages/Admin/Complaints';
import OrderAdmin from './pages/Admin/Orders'
import UserAdmin from './pages/Admin/Users'
function App() {
  // const ProtectedRoute = ({ element,role, ...rest }) => {
  //   const isCustomer = JSON.parse(localStorage.getItem("user")).isCustomer;
  //   const isAdmin = JSON.parse(localStorage.getItem("user")).isAdmin;
  //   const isSeller = JSON.parse(localStorage.getItem("user")).isSeller;
  //   const isBlogger = JSON.parse(localStorage.getItem("user")).isBlogger;
  //   let neededCheck;
  //   if (role === "customer") {
  //     neededCheck = JSON.parse(localStorage.getItem("user")).isCustomer;
  //   }
  //   else if (role === "seller") {
  //     neededCheck = JSON.parse(localStorage.getItem("user")).isSeller;
  //   }
  //   return (
  //     <Route
  //       {...rest}
  //       element={neededCheck ? element : <Navigate to="/dashboard" replace />}
  //     />
  //   );
  // };

  const { isAuthenticated, loading } = useAuthenticate();

  // if (loading) {
  //   return <>
  //     <Loader />
  //     <ToastContainer autoClose={5000} />
  //   </>;
  // }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          {/* <Route path="login" element={<LoginSignUp />} /> */}
          <Route element={<ReverseProtectedRoute />}>
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
          <Route path="/" element={<MainLayout />}>
            <Route path="blogs/" element={<Blogs />} />
            <Route path="blogs/:blogId" element={<SinglePostBlog />} />

            <Route path="products/" element={<ProductSearchPage />} />
            <Route path="products/:id" element={<ProductPage />} />

            {/* Add all the routes which are protected as children of this  */}
            <Route element={<ProtectedRoute />}>
              <Route path="checkout/" element={<Checkout />} />
              <Route path="blogs/create-post" element={<CreateBlogPost />} />
              <Route path="cart/" element={<Cart2 />} />
              <Route path="wishlist/" element={<WishList />} />
            </Route>

            <Route path="rent/" element={<RentForm />} />
            <Route path="about/" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/orders" element={<MyOrders />} />
            <Route path="/order/:id" element={<SingleOrder />} />
            <Route path="/becomeseller" element={<BecomeSeller />} />
            <Route
              path="/tracking/:orderid/:statusid"
              element={<Trackingpage />}
            />
          </Route>
          <Route element={<DashLayout />}>
            <Route path="/dashboard" element={<DashSettings />} />
            <Route
              path="/dashboard/analytics"
              role="seller"
              element={<Dashboard />}
            />
            <Route
              path="/dashboard/products"
              role="seller"
              element={<Products />}
            />
            <Route
              path="/dashboard/customers"
              role="customer"
              element={<Customers />}
            />
            <Route
              path="/dashboard/orders"
              role="customer"
              element={<Transactions />}
            />
            <Route
              path="/dashboard/updateuser"
              role="customer"
              element={<Updateuser />}
            />
            <Route path="/dashboard/addproduct" element={<AddProductPage />} />
            <Route
              path="/dashboard/profile"
              role="seller"
              element={<Profile />}
            />
            <Route
              path="/dashboard/createblog"
              role="blogger"
              element={<CreateBlog />}
            />
            <Route path="/dashboard/blogs" role="blogger" element={<Blog />} />
          </Route>
          <Route element={<AdminLayout />}>
            <Route path="/admin" element={<DashSettings />} />
            <Route
              path="/admin/products"
              role="admin"
              element={<AdminProducts />}
            />
            <Route
              path="/admin/complaints"
              role="admin"
              element={<Complaints />}
            />
            <Route path="/admin/orders" role="admin" element={<OrderAdmin />} />
            <Route path="/admin/users" role="admin" element={<UserAdmin />} />
          </Route>
          <Route path="/user/:activepage" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer autoClose={5000} />
    </>
  );
}

export default App
