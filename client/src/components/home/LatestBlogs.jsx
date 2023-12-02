import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogCard from './BlogCard';
import { blog1, blog2, blog3 } from '../../assets';

const LatestBlogs = () => {

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='flex flex-col justify-center items-center mx-8 md:mx-16 lg:mx-32 '>
      <p className='uppercase text-sm text-slate-500 mb-1'>our fresh news</p>
      <h1 className='text-3xl font-bold mb-16'>New Blog Posts</h1>
      <div className='flex flex-wrap justify-center gap-4'>
        <BlogCard imgSrc={blog1} date={"May 28, 2023"} commentNo={3} title={"Snow trekking Experience"}/>
        <BlogCard imgSrc={blog2} date={"Sept 23, 2023"} commentNo={3} title={"Safety Gear"}/>
        <BlogCard imgSrc={blog3} date={"August 23, 2023"} commentNo={3} title={"Mountain Bikes"}/>
      </div>
    </div>
  )
}

export default LatestBlogs