import React from 'react'
import { banner1, banner2, banner3 } from '../../assets'
import ImageCard from './ImageCard'

const ShopNowSection = () => {
  return (
    <div className='p-8 mx-8 md:mx-16 lg:mx-32'>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 flex justify-center items-center'>
        <div className='h-[70vh] relative bg-cover bg-center' style={{ backgroundImage: `url(${banner1})` }}>
          <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-10 transition-opacity duration-300 bg-black"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white flex flex-col gap-4 z-10">
            <p className={`text-sm text-slate-500 uppercase tracking-wide`}>
              online mega sale
            </p>
            <h5 className={`uppercase font-bold tracking-wider text-3xl text-white -mt-2`}>
              camping gear & accessories
            </h5>
            <div className='flex justify-center items-center'>
              <a href="/" className='bg-transparent border border-cyan-300 shadow-lg border-2 hover:bg-cyan-300 transition duration-300 ease-in-out py-2 px-4 rounded-lg font-bold uppercase text-xs text-cyan-500 hover:text-white'>
                discover now
              </a>
            </div>
          </div>
        </div>
        <div className='h-[70vh] lg:h-[78vh] relative bg-cover bg-center' style={{ backgroundImage: `url(${banner2})` }}>
          <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-10 transition-opacity duration-300 bg-black"></div>
          <div className="absolute bg-white py-32 px-2 lg:px-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white flex flex-col gap-4 z-10">
            <p className={`text-sm text-slate-500 uppercase tracking-wide`}>
              summer
            </p>
            <h5 className={`uppercase font-bold tracking-wider text-3xl text-black -mt-2`}>
              Clearance 50% Sale
            </h5>
            <div className='flex justify-center items-center'>
              <a href="/" className='bg-transparent border border-cyan-300 shadow-lg border-2 hover:bg-cyan-300 transition duration-300 ease-in-out py-2 px-4 rounded-lg font-bold uppercase text-xs text-cyan-500 hover:text-white'>
                discover now
              </a>
            </div>
          </div>
        </div>
        <div className='h-[70vh] relative bg-cover bg-center' style={{ backgroundImage: `url(${banner3})` }}>
          <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-10 transition-opacity duration-300 bg-black"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white flex flex-col gap-4 z-10">
            <p className={`text-sm text-slate-500 uppercase tracking-wide`}>
            lightning deals
            </p>
            <h5 className={`uppercase font-bold tracking-wider text-3xl text-white -mt-2`}>
              sports & outdoor
            </h5> 
            <div className='flex justify-center items-center'>
              <a href="/" className='bg-transparent border border-cyan-300 shadow-lg border-2 hover:bg-cyan-300 transition duration-300 ease-in-out py-2 px-4 rounded-lg font-bold uppercase text-xs text-cyan-500 hover:text-white'>
                discover now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopNowSection