import React, { useState, useEffect } from 'react';
import { Lightbulb, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useShop } from '../context/ShopContext'; 

const Navbar = () => {
  const { cart } = useCart();
  const { filterAndScroll } = useShop(); 
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const categories = ["All", "Lamps", "Bulbs", "Ceiling", "Smart"];

  
  const handleScroll = (id) => {
    setIsMenuOpen(false);
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Category Click Handler
  const handleCategoryClick = (category) => {
    setIsMenuOpen(false);
    setIsProductDropdownOpen(false);
    navigate('/');
    filterAndScroll(category); 
  };

  // Background Scroll Lock Logic
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'unset';  
    }
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <Lightbulb className="h-8 w-8 text-yellow-500" />
            <span className="font-bold text-2xl text-gray-900 tracking-tight">ALPHA</span>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8 h-full">
            <button onClick={() => handleScroll('top') || navigate('/')} className="text-gray-600 hover:text-yellow-600 font-medium transition-colors text-sm uppercase cursor-pointer">
              Home
            </button>

            {/* DROPDOWN */}
            <div 
              className="relative h-full flex items-center group" 
              onMouseEnter={() => setIsProductDropdownOpen(true)}
              onMouseLeave={() => setIsProductDropdownOpen(false)}
            >
              <button 
                className="flex items-center gap-1 text-gray-600 hover:text-yellow-600 font-medium transition-colors text-sm uppercase py-4 cursor-pointer"
                onClick={() => handleScroll('shop')}
              >
                Products <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform" />
              </button>
              
              {isProductDropdownOpen && (
                <div className="absolute top-full left-0 w-48 bg-white border border-gray-100 shadow-xl rounded-b-lg py-2 animate-fadeIn">
                  {categories.map((cat) => (
                    <div 
                      key={cat}
                      onClick={() => handleCategoryClick(cat)}
                      className="px-4 py-3 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 cursor-pointer transition-colors border-b border-gray-50 last:border-0"
                    >
                      {cat}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button onClick={() => handleScroll('features')} className="text-gray-600 hover:text-yellow-600 font-medium transition-colors text-sm uppercase cursor-pointer">
              About Us
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-6">
            <Link to="/cart" className="relative text-gray-700 hover:text-yellow-600 transition-colors">
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs font-bold h-5 w-5 flex items-center justify-center rounded-full shadow-sm">
                  {totalItems}
                </span>
              )}
            </Link>

            <a href="#contact" className="hidden md:block">
              <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Contact Us
              </button>
            </a>

            <button 
              className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 h-screen bg-black/40 backdrop-blur-sm z-45 mt-16 md:hidden animate-fadeIn"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          <div className="fixed top-16 left-0 w-full bg-white z-50 md:hidden shadow-xl border-t border-gray-100 overflow-y-auto max-h-[calc(100vh-4rem)] animate-slideDown">
            <div className="px-4 pt-4 pb-8 space-y-2">
              <button onClick={() => handleScroll('top')} className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 transition-colors">
                Home
              </button>

              <div className="px-4 py-2">
                <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Products Collection</span>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => handleCategoryClick(cat)}
                      className="text-left px-3 py-2 text-sm text-gray-600 bg-gray-50 rounded-md hover:bg-yellow-100 hover:text-yellow-800 transition-colors"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <button onClick={() => handleScroll('features')} className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 transition-colors">
                About Us
              </button>

              <button onClick={() => handleScroll('contact')} className="block w-full  px-4 py-3 rounded-lg text-base font-medium text-white bg-black hover:bg-gray-800 mt-4 shadow-md transition-all text-center">
                Contact Support
              </button>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;