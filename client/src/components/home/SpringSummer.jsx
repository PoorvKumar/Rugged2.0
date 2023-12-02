import React, { useState } from 'react';
import { videobanner } from "../../assets";
import { FaRegPlayCircle, FaTimes } from "react-icons/fa";
import { Modal } from '@mui/material';

const SpringSummer = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='relative bg-cover h-[80vh] bg-center' style={{ backgroundImage: `url(${videobanner})` }}>
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
          <span className='bg-transparent cursor-pointer' onClick={handleOpen}>
            <FaRegPlayCircle className='text-8xl hover:text-cyan-600 transition duration-300 ease-in-out' />
          </span>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <div className='flex justify-center items-center min-h-screen relative'>
          <button className='text-white absolute top-8 right-8' onClick={handleClose}>
            <FaTimes className='text-3xl' />
          </button>
          <iframe
            width="660"
            height="380"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=cdWdd4OOMm6jHAej"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </div>
  );
};

export default SpringSummer;
