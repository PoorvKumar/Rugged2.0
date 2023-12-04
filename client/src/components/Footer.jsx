import React from 'react';
import { LiaRocketSolid } from "react-icons/lia";
import { MdOutlineRotateLeft } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { LiaLifeRingSolid } from "react-icons/lia";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa6";
import { LuMountainSnow } from 'react-icons/lu';

const Footer = () => {
  return (
    <footer className='flex flex-col gap-6 bg-[#222222]'>
      <div className='flex justify-between items-center flex-wrap mx-8 md:mx-16 lg:mx-32 p-6 border-b border-white'>
        <div className='flex gap-4 text-white p-4'>
          <LiaRocketSolid className='text-4xl'/>
          <div className='flex flex-col'>
            <p className='uppercase text-sm'>free shipping</p>
            <p className='text-gray-500 text-sm'>Order $50 or more</p>
          </div>
        </div>
        <div className='flex gap-4 text-white p-4'>
          <MdOutlineRotateLeft className='text-4xl'/>
          <div className='flex flex-col'>
            <p className='uppercase text-sm'>free returns</p>
            <p className='text-gray-500 text-sm'>Within 30 days</p>
          </div>
        </div>
        <div className='flex gap-4 text-white p-4'>
          <IoIosInformationCircleOutline className='text-4xl'/>
          <div className='flex flex-col'>
            <p className='uppercase text-sm'>Get 20% Off 1 Item</p>
            <p className='text-gray-500 text-sm'>When you sign up</p>
          </div>
        </div>
        <div className='flex gap-4 text-white p-4'>
          <LiaLifeRingSolid className='text-4xl'/>
          <div className='flex flex-col'>
            <p className='uppercase text-sm'>We Support</p>
            <p className='text-gray-500 text-sm'>24/7 amazing services</p>
          </div>
        </div>
      </div>
      <div className='grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 mx-8 md:mx-16 lg:mx-32 p-6 border-b border-white'>
        <div className='flex flex-col gap-4 sm:mt-2 md:mt-0'>
          <h1 className='uppercase text-2xl text-white font-bold flex gap-1 items-center'><LuMountainSnow /> Rugged</h1>
          <p className='text-gray-500 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam aut cum et architecto, quisquam dolor.</p>
          <div className='flex flex-wrap gap-2 text-xl text-gray-500 '>
            <RiFacebookFill className='rounded-full border border-gray-500 hover:text-cyan-500 text-4xl p-2 hover:border-cyan-500'/>
            <FaTwitter className='rounded-full border border-gray-500 hover:text-cyan-500 text-4xl p-2 hover:border-cyan-500'/>
            <BiLogoInstagramAlt className='rounded-full border border-gray-500 hover:text-cyan-500 text-4xl p-2 hover:border-cyan-500'/>
            <AiFillYoutube className='rounded-full border border-gray-500 hover:text-cyan-500 text-4xl p-2 hover:border-cyan-500'/>
            <FaPinterest className='rounded-full border border-gray-500 hover:text-cyan-500 text-4xl p-2 hover:border-cyan-500'/>
          </div>
        </div>
        <div className='hidden lg:block'></div>
        <div className='flex flex-col gap-4 sm:mt-2 md:mt-0'>
          <h1 className='uppercase text-white font-bold'>useful links</h1>
          <ul className='flex flex-col gap-2'>
            <a href="/about"><li className='text-sm text-gray-500 hover:text-cyan-500'>About Rugged</li></a>
            <a href="/"><li className='text-sm text-gray-500 hover:text-cyan-500'>How to shop on Rugged?</li></a>
            <a href="/dashboard"><li className='text-sm text-gray-500 hover:text-cyan-500'>Dashboard</li></a>
            <a href="/"><li className='text-sm text-gray-500 hover:text-cyan-500'>FAQs</li></a>
            <a href="/contact"><li className='text-sm text-gray-500 hover:text-cyan-500'>Contact Us</li></a>
            <a href="/login"><li className='text-sm text-gray-500 hover:text-cyan-500'>Log in</li></a>
          </ul>
        </div>
        <div className='flex flex-col gap-4 sm:mt-2 md:mt-2 lg:mt-0'>
          <h1 className='uppercase text-white font-bold'>customer links</h1>
          <ul className='flex flex-col gap-2'>
            <a href="/"><li className='text-sm text-gray-500 hover:text-cyan-500'>Payment methods</li></a>
            <a href="/"><li className='text-sm text-gray-500 hover:text-cyan-500'>Money-back guarantee</li></a>
            <a href="/"><li className='text-sm text-gray-500 hover:text-cyan-500'>Returns</li></a>
            <a href="/"><li className='text-sm text-gray-500 hover:text-cyan-500'>Shipping</li></a>
            <a href="/"><li className='text-sm text-gray-500 hover:text-cyan-500'>Terms and Conditions</li></a>
            <a href="/"><li className='text-sm text-gray-500 hover:text-cyan-500'>Privacy Policy</li></a>
          </ul>
        </div>
        <div className='flex flex-col gap-4 sm:mt-2 md:mt-2 lg:mt-0'>
          <h1 className='uppercase text-white font-bold'>my account</h1>
          <ul className='flex flex-col gap-2'>
            <a href="/login"><li className='text-sm text-gray-500 hover:text-cyan-500'>Sign in</li></a>
            <a href="/cart"><li className='text-sm text-gray-500 hover:text-cyan-500'>View Cart</li></a>
            <a href="/wishlist"><li className='text-sm text-gray-500 hover:text-cyan-500'>My Wishlist</li></a>
            <a href="/orders"><li className='text-sm text-gray-500 hover:text-cyan-500'>Track my Order</li></a>
            <a href="/"><li className='text-sm text-gray-500 hover:text-cyan-500'>Help</li></a>
          </ul>
        </div>
      </div>
      <div className='flex justify-between mx-8 md:mx-16 lg:mx-32 -mt-2 mb-4'>
        <p className='text-gray-500'>Made with 💖 by Poorv and team</p>
      </div>
    </footer>
  );
};

export default Footer;
