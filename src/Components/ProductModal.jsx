import React from 'react';
import { X, MessageCircle, Plus, Minus, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const ProductModal = ({ product, onClose }) => {
  const { addToCart, decreaseQuantity, getItemQuantity } = useCart();
  const navigate = useNavigate();
  
  if (!product) return null;
  
  const quantity = getItemQuantity(product.id);

  const handleWhatsAppOrder = () => {
    // Single Product Direct Order Logic (Agar cart use nahi karna)
    const phoneNumber = "919876543210"; 
    const message = `Hello Alpha, I want to order: ${product.name} - Price: ${product.price}.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden relative">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-gray-100 transition z-10"
        >
          <X className="h-6 w-6 text-gray-600" />
        </button>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-gray-100">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h2>
              <p className="text-2xl text-yellow-600 font-semibold mb-4">{product.price}</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                {product.description}
              </p>
              <div className="space-y-2 mb-8">
                <p className="text-sm text-gray-500">✓ In Stock & Ready to Ship</p>
                <p className="text-sm text-gray-500">✓ Original Alpha Quality</p>
              </div>
            </div>

            <div className="flex gap-3">
              {/* Quantity Selector Logic */}
              <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden">
                 {quantity === 0 ? (
                    <button 
                      onClick={() => addToCart(product)}
                      className="px-4 py-3 hover:bg-yellow-50 flex items-center gap-2 text-gray-700"
                    >
                      <Plus className="h-5 w-5" /> <span className="text-sm font-bold">Add</span>
                    </button>
                 ) : (
                   <div className="flex items-center h-10 rounded-lg overflow-hidden">
                    <button onClick={() => decreaseQuantity(product.id)} className="px-2 h-full hover:bg-red-50 hover:text-red-500 transition-colors flex items-center">
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-2 font-bold text-sm min-w-5 text-center">{quantity}</span>
                    <button onClick={() => addToCart(product)} className="px-2 h-full hover:bg-green-50 hover:text-green-500 transition-colors flex items-center">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                 )}
              </div>

              {/* Dynamic Action Button */}
              {quantity > 0 ? (
                 <button 
                   onClick={() => { onClose(); navigate('/cart'); }}
                   className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
                 >
                   <ShoppingCart className="h-5 w-5" />
                   Go to Cart
                 </button>
              ) : (
                 <button 
                   onClick={handleWhatsAppOrder}
                   className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all"
                 >
                   <MessageCircle className="h-5 w-5" />
                   Buy Now
                 </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;