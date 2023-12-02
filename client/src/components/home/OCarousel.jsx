import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { brand1, brand2, brand3, brand4, brand5, brand6, brand7 } from '../../assets';

const OCarousel = () => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      };

  return (
    <section className='logos bg-[#f8f8f8] px-10 py-8'>
        <div className='container'>
            <div className='heading text-center mb-12'>
                <p className='text-sm uppercase text-slate-900 font-bold '>trending brands</p>
            </div>
        </div>
        <Slider {...settings}>
          <div>
            <img src={brand1} alt="1" />
          </div>
          <div>
          <img src={brand2} alt="2" />
          </div>
          <div>
          <img src={brand3} alt="3" />
          </div>
          <div>
          <img src={brand4} alt="4" />
          </div>
          <div>
          <img src={brand5} alt="5" />
          </div>
          <div>
          <img src={brand6} alt="6" />
          </div>
          <div>
          <img src={brand7} alt="7" />
          </div>
        </Slider>
    </section>
  )
}

export default OCarousel