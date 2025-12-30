import React from 'react';
import { Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <Lightbulb className="h-8 w-8 text-yellow-500" />
            <Link to="/" className="font-bold text-xl text-gray-800">Alpha</Link>
          </div>

          {/* Right Side: Links & Button */}
          <div className="flex items-center gap-8">
            {/* Products Link - Scrolls to collection */}
            <a 
              href="#shop" 
              className="text-gray-600 hover:text-yellow-600 font-medium transition-colors text-sm uppercase tracking-wide"
            >
              Products
            </a>

            {/* Contact Button */}
            <a href="#contact">
              <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300 cursor-pointer">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;