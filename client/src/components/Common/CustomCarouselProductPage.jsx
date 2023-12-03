import React, { useState } from "react";

const Carousel = ({ caroData: images, classNm }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className={`relative ${classNm}`}>
      <div className="overflow-hidden">
        {images.map(
          (imageUrl, index) =>
            currentIndex === index && (
              <div
                key={index}
                className={`flex transition-transform ease-in duration-600 transform translate-x-[-${
                  currentIndex * 100
                }%]`}
              >
                <img
                  key={index}
                  src={imageUrl}
                  alt={`Slide ${index}`}
                  className="w-full h-auto"
                />
              </div>
            )
        )}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 text-white bg-gray-700"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 text-white bg-gray-700"
      >
        Next
      </button>
    </div>
  );
};
export default Carousel;
