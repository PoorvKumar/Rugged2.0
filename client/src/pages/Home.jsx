import React, { useState } from 'react';
import { Modal } from "@mui/material";
import LoginModal from '../components/auth/LoginModal';
import { homeHeader1, homeHeader2 } from '../assets';
import Banner from '../components/home/Banner';
import OCarousel from '../components/home/OCarousel';
import ShopNowSection from '../components/home/ShopNowSection';
import TrendingSection from '../components/home/TrendingSection';
import EmailSubscribe from '../components/home/EmailSubscribe';
import LatestBlogs from '../components/home/LatestBlogs';
import FollowInsta from '../components/home/FollowInsta';
import Footer from '../components/Footer';
import SpringSummer from '../components/home/SpringSummer';
import FeatureProd from '../components/home/FeatureProd';

const Home = () => {

  const [open, setOpen] = useState(false);
  const handleOpenLogin = () => setOpen(true);
  const handleCloseLogin = () => setOpen(false);

  return (
    <div className='relative flex flex-col min-h-screen '>
      <Banner />
      {/* <hr className='w-full my-4 text-slate-900'/> */}
      <div className='md:my-1 lg:my-4' />
      <OCarousel />

      <ShopNowSection />
      <TrendingSection />
      <FeatureProd />
      <SpringSummer />
      <EmailSubscribe />
      <LatestBlogs />

      <hr className='my-16'/>

      <FollowInsta />

      <Footer />

      {/* <button onClick={handleOpenLogin}>Click here to login</button>
        <Modal open={open} onClose={handleCloseLogin} className='min-h-screen flex justify-center items-center'>
            <div>
            <LoginModal onClose={handleCloseLogin} />
            </div>
        </Modal> */}
    </div>
  )
}

export default Home