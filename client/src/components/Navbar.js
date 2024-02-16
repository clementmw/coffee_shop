import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="bg-customColor text-white">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="text-xl font-bold">
          {/* <img src="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" alt="logo" /> */}
          Your Logo
        </Link>
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            About us
          </Link>
          <Link to="/review" className="hover:text-gray-300">
            Reviews
          </Link>
          <Link to="/purchase" className="hover:text-gray-300">
            Order-Here
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contact us
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
