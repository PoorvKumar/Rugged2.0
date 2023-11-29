import React from 'react';

function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap flex-col items-center px-4 py-8 md:flex-row md:items-baseline">
        <a href="#" className="order-first flex flex-shrink-0 md:order-none">
          <img src="https://flowbite.com/content/images/logo.svg" alt="Logo" className="w-10 h-10" />
        </a>

        <div className="my-6 md:my-0">
          <a href="#" className="text-gray-800 font-bold">Free Shipping</a>
          <a href="#" className="text-gray-800 font-bold">Free Returns</a>
          <a href="#" className="text-gray-800 font-bold">OET 20% OFF 1 ITEM</a>
          <a href="#" className="text-gray-800 font-bold">WE SUPPORT</a>
        </div>

        <ul className="my-6 flex flex-wrap">
          <li className="mr-4">
            <a href="#" className="text-gray-800 hover:underline">24/7 amcuing sonics</a>
          </li>
          <li className="mr-4">
            <a href="#" className="text-gray-800 hover:underline">850 or mor</a>
          </li>
          <li className="mr-4">
            <a href="#" className="text-gray-800 hover:underline">within 30 duy</a>
          </li>
          <li className="mr-4">
            <a href="#" className="text-gray-800 hover:underline">When you grup</a>
          </li>
        </ul>
      </div>

      <div className="py-4 border-t border-gray-200">
        <p className="text-center text-gray-800">Copyright © 2023 Molla Glare All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
