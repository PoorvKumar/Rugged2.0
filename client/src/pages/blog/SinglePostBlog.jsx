import React from 'react';
import { blog3 } from "../../assets";
import { RiFacebookFill } from 'react-icons/ri';
import { FaPinterest, FaTwitter } from 'react-icons/fa';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { AiFillYoutube } from 'react-icons/ai';

const SinglePostBlog = () => {

  const data={
    imgSrc: blog3,
    title: "Bike Riding is Fun!",
    
  };

  return (
    <div className='flex flex-col'>
        <div className='bg-cover bg-center h-[60vh]' style={{backgroundImage: `url(${data.imgSrc})`}} />
        <div className='flex mx-8 md:mx-16 lg:mx-[12vw] gap-2'>
          <div className='hidden lg:flex flex-col gap-2'>
            <p className='uppercase text-slate-500 mb-1'>share:</p>
            <RiFacebookFill className='rounded-full hover:text-purple-500 hover:border border-purple-500 bg-purple-500 hover:bg-white text-white text-4xl p-2'/>
            <BiLogoInstagramAlt className='rounded-full hover:text-pink-500 hover:border border-pink-500 bg-pink-500 hover:bg-white text-white text-4xl p-2'/>
            <FaTwitter className='rounded-full hover:text-blue-400 hover:border border-blue-400 bg-blue-400 hover:bg-white text-white text-4xl p-2'/>
            <AiFillYoutube className='rounded-full hover:text-red-500 hover:border border-red-500 bg-red-500 hover:bg-white text-white text-4xl p-2'/>
            {/* <FaPinterest className='rounded-full text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white text-4xl p-2'/> */}
          </div>
          <div className='flex flex-col gap-2'>
            
          </div>
        </div>
    </div>
  )
}

export default SinglePostBlog;