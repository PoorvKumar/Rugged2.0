import React from 'react';
import { insta1, insta2, insta3, insta4, insta5 } from '../../assets';
import { FaHeart } from "react-icons/fa";
import { LiaComments } from "react-icons/lia";

const FollowInsta = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-8 mx-8 md:16 lg:mx-32 mb-16'>
      <p className='uppercase text-slate-500 text-sm'>Follow us On Instagram</p>
      <div className='flex flex-wrap justify-center gap-8'>
        <div className='relative h-[35vh] w-[35vh] bg-cover bg-center' style={{ backgroundImage: `url(${insta2})` }}>
          <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-10 transition-opacity duration-300 bg-black">
          </div>
        </div>
        <div className='relative h-[35vh] w-[35vh] bg-cover bg-center' style={{ backgroundImage: `url(${insta3})` }}>
          <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-10 transition-opacity duration-300 bg-black">
          </div>
        </div>
        <div className='relative h-[35vh] w-[35vh] bg-cover bg-center' style={{ backgroundImage: `url(${insta4})` }}>
          <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-10 transition-opacity duration-300 bg-black">
          </div>
        </div>
        <div className='relative h-[35vh] w-[35vh] bg-cover bg-center' style={{ backgroundImage: `url(${insta5})` }}>
          <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-10 transition-opacity duration-300 bg-black">
          </div>
        </div>
      </div>
    </div>
  )
}

export default FollowInsta;