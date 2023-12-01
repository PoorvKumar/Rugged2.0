import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import LoginSignUp from './pages/LoginSignUp';
import Blogs from './pages/Blogs';
import MainLayout from './layouts/MainLayout';
import LoginModal from './components/auth/LoginModal';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} exact />
      <Route path='login' element={<LoginSignUp />} />
      <Route path='/' element={<MainLayout />}>
        <Route path='blogs/' element={<Blogs />} />
      </Route>
    </Routes>
  )
}

export default App
