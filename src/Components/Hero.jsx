import React from 'react';
import heroImage from '../assets/products/hero-light.jpg'; // Make sure image path is correct

const Hero = () => {
  return (
    // h-screen ensures it takes full viewport height
    <div className="relative w-full h-screen font-sans">
      {/* Background Image Section */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Dark Overlay - kept for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content Section Container */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 sm:px-8 lg:px-12">
        {/* Flex container to align content vertically center.
           We focus on the left side for text placement.
        */}
        <div className="flex flex-col justify-center h-full lg:w-1/2">
          <div className="text-left text-white">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6">
              MODERN ELEGANCE, <br />
              <span className="text-yellow-400 drop-shadow-lg">WARM ILLUMINATION.</span>
            </h1>

            {/* Subtitle text */}
            <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-xl">
              Transform your space with our curated collection of contemporary lighting designed to add luxury and warmth to your home.
            </p>

            {/* Call to Action Button */}
            <div>
              <button className="group bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 font-bold py-4 px-10 rounded-full transition-all duration-300 tracking-wider uppercase text-sm">
                Shop Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;