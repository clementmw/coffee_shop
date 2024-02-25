import React from 'react';
import { Link } from 'react-router-dom';
import logoimage from '../images/logo.jpeg'
import { FiShoppingCart } from "react-icons/fi"

function Navbar() {
  return (
    <div className="bg-customColor text-white  sticky top-0 z-50  ">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="text-2xl font-bold">
          <img src={logoimage} alt="logo" className='w-10 h-10 rounded-full mx-auto' />
          Blackwood Coffee
        </Link>
        <div className="flex space-x-4">
          {/* <Link to="/" className="hover:text-gray-300">
            Home
          </Link> */}
          <Link to="/about" className="hover:text-gray-300">
            About us
          </Link>
          <Link to="/review" className="hover:text-gray-300">
            Reviews
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contact us
          </Link>
          <Link to="/purchase" className="flex items-center hover:text-gray-300">
              Order
              <FiShoppingCart className="ml-2" />
          </Link>

        </div>
      </nav>
    </div>
  );
}

export default Navbar;
