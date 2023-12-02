import React, { useState } from 'react';

const EmailSubscribe = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubscribeClick = () => {
    console.log('Subscribed!', email);
    // Add logic to handle subscription or API call here
  };

  return (
    <div className='flex flex-col justify-center items-center p-4 md:p-4 lg:p-8'>
      <div className='text-slate-500 uppercase text-sm mt-4 mb-1'>
        Get The Latest News & Deals
      </div>
      <div className='font-extrabold text-3xl mb-14'>
        Stay In The Know
      </div>
      <div className='flex items-center border-b border-black border-b-6 mb-4'>
        <input
          type="email"
          name="userEmail"
          id="userEmail"
          className="py-2 px-1 md:px-4 focus:outline-none"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
        <button
          className="uppercase hover:text-cyan-600 text-cyan-500 font-semibold py-2 px-4 ml-2 rounded"
          onClick={handleSubscribeClick}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default EmailSubscribe;
