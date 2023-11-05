import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import LoginSignUp from './pages/LoginSignUp';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} exact/>
      <Route path='/login' element={<LoginSignUp />} />
    </Routes>
  )
}

export default App
