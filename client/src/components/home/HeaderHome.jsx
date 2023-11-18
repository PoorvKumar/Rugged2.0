import React from 'react';

const HeaderHome = () => {
  return (
    <header className="header header-6">
      <div className="header-top">
        {/* ... content for header-top */}
      </div>
      <div className="sticky-wrapper" style={{ height: '91px' }}>
        <div className="header-middle sticky-header">
          <div className="header-left">
            <button className="mobile-menu-toggler">
              <span className="sr-only">Toggle mobile menu</span>
              <i className="icon-bars"></i>
            </button>
            <a className="logo" href="/react/molla/demo-24/">
              <img
                src="images/home/logo.png"
                alt="Molla Logo"
                className="bg-transparent"
                width="110"
                height="25"
              />
            </a>
          </div>
          <div className="header-center">
            <nav className="main-nav">
              {/* ... content for navigation */}
            </nav>
          </div>
          <div className="header-right">
            <div className="header-search show">
              {/* ... content for header search */}
            </div>
            <div className="wishlist">
              <a href="/react/molla/demo-24/shop/wishlist/">
                <i className="icon-heart-o"></i>
                <span className="wishlist-count">1</span>
              </a>
            </div>
            <div className="dropdown cart-dropdown">
              <a className="dropdown-toggle" href="/react/molla/demo-24/shop/cart/">
                <i className="icon-shopping-cart"></i>
                <span className="cart-count">0</span>
              </a>
              <div className="dropdown-menu dropdown-menu-right text-center">
                <p>No products in the cart.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderHome;
