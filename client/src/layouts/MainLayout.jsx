import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <div className='flex flex-col'>
        <Navbar />
        <div className='mt-24'></div>
        <Outlet />

        <Footer />
    </div>
  )
}

export default MainLayout