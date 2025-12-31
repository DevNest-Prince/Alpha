import React, { useState } from 'react'; 
import Hero from '../Components/Hero';
import Features from '../Components/Features';
import ProductCard from '../Components/ProductCard';
import ProductModal from '../Components/ProductModal';
import Contact from '../Components/Contact';
import { products } from '../data/products';
import { MessageCircle } from 'lucide-react';
import { useShop } from '../context/ShopContext'; 

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // 1. Context se state lo (Local useState HATA DIYA)
  const { activeCategory, setActiveCategory } = useShop();

  const categories = ["All", "Lamps", "Bulbs", "Ceiling", "Smart"];

  // 2. Filter logic same rahega
  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      
      <div id="top">
        <Hero />
      </div>

      <Features />

      <main className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="shop">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-yellow-600 font-bold tracking-widest text-sm uppercase">Our Collection</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Curated Lighting</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)} // Context function
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeCategory === category
                    ? "bg-black text-white border-black scale-105 shadow-md"
                    : "bg-white text-gray-600 border-gray-200 hover:border-yellow-400 hover:text-yellow-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-fadeIn">
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onClick={setSelectedProduct} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-xl border border-dashed border-gray-300">
              <p className="text-gray-500 text-lg">No products found in "{activeCategory}".</p>
              <button 
                onClick={() => setActiveCategory("All")}
                className="mt-4 text-yellow-600 font-medium hover:underline"
              >
                View all products
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Banner Section */}
      <div className="bg-gray-900 py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-yellow-500/5 blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Not Sure What Fits Your Decor?
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
            Lighting is the soul of your home. Connect with our experts directly on WhatsApp.
          </p>
          <button 
             onClick={() => window.open('https://wa.me/919876543210', '_blank')}
             className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            Chat with an Expert
          </button>
        </div>
      </div>

      <Contact />

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  );
};

export default Home;