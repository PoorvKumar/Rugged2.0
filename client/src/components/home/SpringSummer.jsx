import React from 'react';
import { videobanner } from "../../assets";

const SpringSummer = () => {
  return (
    <div className='relative bg-cover h-[80vh] bg-center' style={{backgroundImage: `url(${videobanner})`}}>
        <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-black"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white flex flex-col gap-4 z-10">
                <p className={`font-playfair italic font-bold text-3xl text-white tracking-wide  `}>
                    Spring/Summer
                </p>
                <h5 className='text-white uppercase font-bold tracking-wider text-5xl -mt-2'>
                    new & stylish collection 2023
                </h5>
                <p className="text-sm mb-4"></p>
                <div className='flex justify-center items-center'>
                    <a href="/" className='bg-transparent border border-cyan-500 border-1 hover:bg-cyan-600 transition duration-300 ease-in-out py-3 px-4 rounded-lg font-bold uppercase text-xs text-cyan-500 hover:text-white'>
                        discover now
                    </a>
                </div>
            </div>
    </div>
  )
}

export default SpringSummer