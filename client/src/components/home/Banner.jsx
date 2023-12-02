import React from 'react';
import { homeHeader1, homeHeader2 } from '../../assets';
import HeaderHome from './HeaderHome';
import Navbar from '../Navbar';

const Banner = () => {
  return (
    <div className='relative'>
      <div className='bg-cover bg-no-repeat' style={{backgroundImage: `url(${homeHeader1})`}}>

        <HeaderHome />
        {/* <Navbar /> */}

        <div className='slider relative flex flex-col justify-center items-center pt-8'>
          <div className='intro top-4 pt-[6rem] pb-[16rem] md:pt-[8rem] text-center'>
            <div className='title mb-4 md:mb-6'>
              <h3 className='text-sm font-bold mb-4 uppercase text-yellow-500 tracking-normal'>Premier Outdoor Gear & Clothing</h3>
            </div>
            <div className='content mb-4'>
              <h4 className='mb-0'>
                <i className='font-playfair text-white tracking-wide text-3xl md:text-5xl font-bold'>
                  Our New Collection 2023
                </i>
              </h4>
              <h5 className='text-white mt-2 md:mt-4 uppercase font-extrabold leading-tight tracking-wide text-4xl md:text-6xl lg:text-8xl'>
                Ski & Snowboard
              </h5>
            </div>
            <div className='action mt-8 relative z-10'>
              <a href="/" className='bg-cyan-500 hover:bg-cyan-600 transition duration-300 ease-in-out px-8 py-4 rounded-lg uppercase text-white z-10'>
                discover now
              </a>
            </div>
          </div>
        </div>
      </div>
      <img src={homeHeader2} alt="snowboarding" className='absolute  bg-transparent align-center top-[27rem] sm:top-[21rem] md:top-[10rem]' />
    </div>
  )
}

export default Banner;
