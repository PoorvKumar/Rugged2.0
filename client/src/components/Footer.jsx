import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-1/3">
          {/* Website Information */}
          <h2 className="text-xl font-bold mb-4">Website Info</h2>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Terms & Conditions</p>
          {/* Add any other relevant information */}
        </div>
        <div className="md:w-1/3 mt-8 md:mt-0">
          {/* Second Column */}
          <h2 className="text-xl font-bold mb-4">Website Info</h2>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Terms & Conditions</p>
          {/* Add content for the second column */}
        </div>
        <div className="md:w-1/3 mt-8 md:mt-0">
          {/* Third Column */}
          <h2 className="text-xl font-bold mb-4">Website Info</h2>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Terms & Conditions</p>
          {/* Add content for the third column */}
        </div>
      </div>
      <div className="container mx-auto mt-8 flex justify-center items-center">
        {/* Bank Images */}
        <img
          className="w-1/4 md:w-1/6 mx-4"
          src="/path/to/bank1.png"
          alt="Bank 1"
        />
        <img
          className="w-1/4 md:w-1/6 mx-4"
          src="/path/to/bank2.png"
          alt="Bank 2"
        />
        {/* Add more bank images */}
      </div>
    </footer>
  );
};

export default Footer;
