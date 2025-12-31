import React from 'react';
import { Plus, Minus, ShoppingCart } from 'lucide-react'; // Icons import kiye
import { useCart } from '../context/CartContext'; // Cart logic
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, onClick }) => {
  const { addToCart, decreaseQuantity, getItemQuantity } = useCart();
  const navigate = useNavigate();

  // Check karte hain ki ye product cart me kitna hai
  const quantity = getItemQuantity(product.id);

  // Handle Main Button Click (Go to Cart vs View Details)
  const handleMainButton = (e) => {
    e.stopPropagation(); // Card click na ho
    if (quantity > 0) {
      navigate('/cart'); // Agar cart me hai to Cart page par le jao
    } else {
      onClick(product); // Nahi to Modal kholo
    }
  };

  return (
    <div 
      onClick={() => onClick(product)}
      className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100"
    >
      {/* Image Section (Same Design) */}
      <div className="h-64 overflow-hidden relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
      </div>

      {/* Content Section */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
        <p className="text-yellow-600 font-bold">{product.price}</p>
        
        {/* ACTION ROW: Buttons yahan add kiye hain */}
        <div className="mt-4 flex gap-2 items-center">
          
          {/* 1. Quantity Control (Plus Icon or Counter) */}
          <div onClick={(e) => e.stopPropagation()}> {/* Parent click rokne ke liye */}
            {quantity === 0 ? (
              // Agar 0 hai to simple Plus Button dikhao
              <button 
                onClick={() => addToCart(product)}
                className="h-10 w-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-yellow-400 hover:border-yellow-400 hover:text-black transition-colors"
                title="Add to Cart"
              >
                <Plus className="h-5 w-5" />
              </button>
            ) : (
              // Agar added hai to Counter dikhao (+ 1 -)
              <div className="flex items-center h-10 border border-gray-300 rounded-lg overflow-hidden">
                <button 
                  onClick={() => decreaseQuantity(product.id)} 
                  className="px-2 h-full hover:bg-red-50 hover:text-red-500 transition-colors flex items-center"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-2 font-bold text-sm min-w-5 text-center">{quantity}</span>
                <button 
                  onClick={() => addToCart(product)} 
                  className="px-2 h-full hover:bg-green-50 hover:text-green-500 transition-colors flex items-center"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>

          {/* 2. Main Action Button (View Details / Go to Cart) */}
          <button 
            onClick={handleMainButton}
            className={`flex-1 h-10 text-sm font-medium rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2
              ${quantity > 0 
                ? 'bg-black text-white hover:bg-gray-800' // Agar cart me hai -> Black btn
                : 'text-gray-600 border border-gray-300 hover:bg-black hover:text-white' // Normal -> Outline btn
              }`}
          >
            {quantity > 0 ? (
              <>
                <ShoppingCart className="h-4 w-4" /> Go to Cart
              </>
            ) : (
              "View Details"
            )}
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;