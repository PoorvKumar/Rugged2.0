import React, { useState } from 'react';

const LoginSignupModal = () => {
  const [activeTab, setActiveTab] = useState('login');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleLogin = () => {
    // Logic for handling login
  };

  const handleSignup = () => {
    // Logic for handling signup
  };

  const handleGoogleAuth = () => {
    // Logic for Google authentication
  };

  const handleGithubAuth = () => {
    // Logic for GitHub authentication
  };

  return (
    <div className="w-full max-w-xs p-4">
      <div className="flex border-b border-gray-300">
        <button
          className={`w-1/2 py-2 focus:outline-none ${
            activeTab === 'login' ? 'bg-gray-200' : ''
          }`}
          onClick={() => handleTabChange('login')}
        >
          Login
        </button>
        <button
          className={`w-1/2 py-2 focus:outline-none ${
            activeTab === 'signup' ? 'bg-gray-200' : ''
          }`}
          onClick={() => handleTabChange('signup')}
        >
          Signup
        </button>
      </div>

      {activeTab === 'login' && (
        <form onSubmit={handleLogin} className="mt-4">
          <div className="mb-4">
            <label htmlFor="login-email-phone" className="block text-gray-700 text-sm font-bold mb-2">
              Email/Phone
            </label>
            <input
              type="text"
              id="login-email-phone"
              placeholder="Enter email or phone"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="login-password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="login-password"
              placeholder="Enter password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          {/* Add submit button */}
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md mt-2">
            Login
          </button>
          {/* Add Google and GitHub login buttons */}
          <button
            onClick={handleGoogleAuth}
            className="w-full bg-blue-500 text-white py-2 rounded-md mt-4"
          >
            Sign in with Google
          </button>
          <button
            onClick={handleGithubAuth}
            className="w-full bg-gray-800 text-white py-2 rounded-md mt-2"
          >
            Sign in with GitHub
          </button>
        </form>
      )}

      {activeTab === 'signup' && (
        <form onSubmit={handleSignup} className="mt-4">
          <div className="mb-4">
            <label htmlFor="signup-email-phone" className="block text-gray-700 text-sm font-bold mb-2">
              Email/Phone
            </label>
            <input
              type="text"
              id="signup-email-phone"
              placeholder="Enter email or phone"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          {/* Add submit button */}
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md mt-2">
            Signup
          </button>
          {/* Add Google and GitHub signup buttons */}
          <button
            onClick={handleGoogleAuth}
            className="w-full bg-blue-500 text-white py-2 rounded-md mt-4"
          >
            Sign up with Google
          </button>
          <button
            onClick={handleGithubAuth}
            className="w-full bg-gray-800 text-white py-2 rounded-md mt-2"
          >
            Sign up with GitHub
          </button>
        </form>
      )}
    </div>
  );
};

export default LoginSignupModal;
