import React, { useState, useEffect } from "react";
import { FiSearch, FiShoppingCart, FiHeart, FiMenu, FiX, FiChevronDown } from "react-icons/fi"; // Import icons from react-icons
import { LuMountainSnow } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProducts, changeSearchInput } from "../features/productReducer";
import { homeHeader1 } from "../assets";
import api from "../api/api";
import { useAuthenticate } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();

  const { user, logout, cart } = useAuthenticate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

//   const { cart } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);

  const dispatch = useDispatch();

  const cartQuantity = cart?.items?.length;
  const wishlistQuantity = wishlist.length;

  useEffect(() => {

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen); // Toggle search input visibility
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = async () => {
    let response = await api.get(`products/search?q=${searchInput}&customerRating=0&priceLL=0&priceUL=10000&RuggedVerrified=false&colours=all&availability=false&noOfResultsPerPage=12&pageNo=1&categories=all&brands=all`)
    let {productList}= response.data;
    dispatch(addProducts({ products: productList }));
    dispatch(changeSearchInput({ searchInput: searchInput }));
    navigate("/products");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleHoverEnter = () => {
    setIsHovered(true);
};

const handleHoverLeave = () => {
    setIsHovered(false);
};

  const handleLogout = () => {
    logout();
    navigate('/');
};

  return (
    <nav
            className={`fixed w-full p-8 z-50 transition duration-300 ease-in-out ${isScrolled ? 'bg-gray-900 py-6' : ''
                }`}
                style={{
                    backgroundImage: isScrolled ? 'none' : `url(${homeHeader1})`,
                }}
        >
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <a href="/">
                        <div className="flex gap-1 items-center">
                            <span className='text-white text-2xl font-bold'>
                                <LuMountainSnow />
                            </span>
                            <h1 className="text-white text-2xl font-bold"> RUGGED</h1>
                        </div>
                    </a>
                </div>
                <div className="hidden lg:flex lg:justify-center lg:flex-1">
                    <ul className={`flex ${isSearchOpen ? 'ml-40' : 'justify-center'} space-x-8`}>
                        {/* Your navigation links for larger devices */}
                        <li>
                            <a
                                href="/"
                                className="text-white uppercase hover:text-cyan-500 hover:underline hover:underline-offset-4"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/products"
                                className="text-white uppercase hover:text-cyan-500 hover:underline hover:underline-offset-4"
                            >
                                Shop
                            </a>
                        </li>
                        <li>
                            <a
                                href="/blogs"
                                className="text-white uppercase hover:text-cyan-500 hover:underline hover:underline-offset-4"
                            >
                                Blog
                            </a>
                        </li>
                        <li>
                            <a
                                href="/about"
                                className="text-white uppercase hover:text-cyan-500 hover:underline hover:underline-offset-4"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contact"
                                className="text-white uppercase hover:text-cyan-500 hover:underline hover:underline-offset-4"
                            >
                                Contact
                            </a>
                        </li>
                        {/* ... Other navigation links ... */}
                    </ul>
                </div>
                <div className="flex items-center">
                    {/* Icons for larger devices */}
                    <div className="hidden lg:flex items-center space-x-4">
                        {/* <FiSearch className="text-white text-xl cursor-pointer hover:text-cyan-500" /> */}
                        <div className="relative">
                            {isSearchOpen ? ( // Conditionally render search input or search icon
                                <>
                                    <input
                                        type="text"
                                        value={searchInput}
                                        onChange={handleSearchInputChange}
                                        onKeyPress={handleKeyPress}
                                        placeholder="Search..."
                                        className="text-black px-4 py-2 rounded-lg bg-white border border-white focus:outline-none"
                                    />
                                    <button
                                        onClick={handleSearch}
                                        className="absolute top-2 right-2 text-black cursor-pointer focus:outline-none"
                                    >
                                        <FiSearch className="text-xl" />
                                    </button>
                                </>
                            ) : (
                                <FiSearch
                                    className="text-white text-xl cursor-pointer hover:text-cyan-500"
                                    onClick={toggleSearch} // Toggle search input visibility on icon click
                                />
                            )}
                        </div>
                        <a href="/cart">
                            <div className="relative">
                                <FiShoppingCart className="text-white text-xl cursor-pointer hover:text-green-300" />
                                {cartQuantity > 0 && (
                                    <div className="absolute -top-2 -right-2 bg-green-300 rounded-full w-4 h-4 flex items-center justify-center text-[10px] text-black">
                                        {cartQuantity}
                                    </div>
                                )}
                            </div>
                        </a>
                        <a href="/wishlist">
                            <div className="relative">
                                <FiHeart className="text-white text-xl cursor-pointer hover:text-red-500" />
                                {wishlistQuantity > 0 && (
                                    <div className="absolute -top-2 -right-2 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-[10px] text-white">
                                        {wishlistQuantity}
                                    </div>
                                )}
                            </div>
                        </a>
                        {user ? (
                            <div
                                className="relative group"
                                onMouseEnter={handleHoverEnter}
                                onMouseLeave={handleHoverLeave}
                            >
                                <div
                                    className="flex items-center space-x-2 cursor-pointer"
                                    onClick={() => navigate('/user/accountsettings')}
                                >
                                    <span className="text-white">{user.name}</span>
                                    <FiChevronDown className="text-white" />
                                </div>
                                <ul
                                    className={`absolute right-0 w-32 py-2 bg-white shadow-lg rounded-lg ${isHovered ? 'opacity-100' : 'opacity-0'
                                        } transition-opacity duration-300 ease-in-out z-10`}
                                >
                                    <li>
                                        <a href="/user/accountsettings" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Profile</a>
                                    </li>
                                    <li>
                                        <button
                                            onClick={handleLogout}
                                            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200 focus:outline-none"
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <div
                                className="relative group"
                                onMouseEnter={handleHoverEnter}
                                onMouseLeave={handleHoverLeave}
                            >
                                <div
                                    className="flex items-center space-x-2 cursor-pointer"
                                    onClick={() => navigate('/signin')}
                                >
                                    <span className="text-white">Login</span>
                                    <FiChevronDown className="text-white" />
                                </div>
                                <ul
                                    className={`absolute right-0 w-32  bg-white shadow-lg rounded-lg ${isHovered ? 'opacity-100' : 'opacity-0'
                                        } transition-opacity duration-300 ease-in-out z-10`}
                                >
                                    <li>
                                        <a href="/signup" className="block p-2 text-gray-800 hover:bg-gray-200 text-sm rounded-lg">New User? <span className='text-cyan-500'>SignUp</span></a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                    {/* Menu icon for smaller devices */}
                    <div className="lg:hidden">
                        <FiMenu
                            className="text-white text-2xl cursor-pointer"
                            onClick={toggleSidebar}
                        />
                    </div>
                </div>
            </div>
            {/* Sidebar */}
            {isSidebarOpen && (
                <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-75">
                    <div className="flex justify-end p-4">
                        <FiX
                            className="text-white text-2xl cursor-pointer"
                            onClick={toggleSidebar}
                        />
                    </div>
                    <div className="flex flex-col items-center justify-start h-full">
                        {/* Your sidebar links and icons */}
                        <a href="/" className="text-white text-xl mb-4">
                            Home
                        </a>
                        <a href="/products" className="text-white text-xl mb-4">
                            Shop
                        </a>
                        <a href="/blogs" className="text-white text-xl mb-4">
                            Blog
                        </a>
                        <a href="/products" className="text-white text-xl mb-8">
                            About
                        </a>
                        {/* ... Other sidebar links ... */}
                        <div className="relative mb-4">
                            {isSearchOpen ? ( // Conditionally render search input or search icon
                                <>
                                    <input
                                        type="text"
                                        value={searchInput}
                                        onChange={handleSearchInputChange}
                                        onKeyPress={handleKeyPress}
                                        placeholder="Search..."
                                        className="text-black px-4 py-2 rounded-lg bg-white border border-white focus:outline-none"
                                    />
                                    <button
                                        onClick={handleSearch}
                                        className="absolute top-2 right-2 text-black cursor-pointer focus:outline-none"
                                    >
                                        <FiSearch className="text-xl" />
                                    </button>
                                </>
                            ) : (
                                <FiSearch
                                    className="text-white text-xl cursor-pointer hover:text-cyan-500"
                                    onClick={toggleSearch} // Toggle search input visibility on icon click
                                />
                            )}
                        </div>
                        <a href="/cart" className='flex items-center gap-2 mb-4'>
                            <FiShoppingCart className="text-white text-xl" /> <span className='text-white text-xl'>Cart</span>
                        </a>
                        <a href="/wishlist" className='flex items-center gap-2 mb-4'>
                            <FiHeart className="text-white text-xl" /> <span className='text-white text-xl'>Wishlist</span>
                        </a>
                        {user ? (
                            <div
                                className="relative group"
                                onMouseEnter={handleHoverEnter}
                                onMouseLeave={handleHoverLeave}
                            >
                                <div
                                    className="flex items-center space-x-2 cursor-pointer"
                                    onClick={() => navigate('/user/accountsettings')}
                                >
                                    <span className="text-white">{user.name}</span>
                                    <FiChevronDown className="text-white" />
                                </div>
                                <ul
                                    className={`absolute right-0 w-32 py-2 bg-white shadow-lg rounded-lg ${isHovered ? 'opacity-100' : 'opacity-0'
                                        } transition-opacity duration-300 ease-in-out z-10`}
                                >
                                    <li>
                                        <a href="/user/accountsettings" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Profile</a>
                                    </li>
                                    <li>
                                        <button
                                            onClick={handleLogout}
                                            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200 focus:outline-none"
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <div className="relative group">
                                <span className="text-white cursor-pointer" onClick={() => navigate('/signin')}>
                                    Login
                                </span>
                                <div className="absolute top-full left-0 bg-white p-2 rounded shadow-lg hidden group-hover:block">
                                    <span className="text-gray-800 hover:text-blue-500 cursor-pointer" onClick={() => navigate('/signup')}>
                                        New User? SignUp
                                    </span>
                                </div>
                            </div>

                        )}
                        {/* ... Other sidebar icons ... */}
                    </div>
                </div>
            )}
        </nav>
  );
};

export default Navbar;
