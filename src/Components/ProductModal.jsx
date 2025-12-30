import React from 'react';
import { X, MessageCircle } from 'lucide-react';

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  const handleWhatsAppOrder = () => {
    // Replace with your phone number
    const phoneNumber = "919876543210"; 
    const message = `Hello, I am interested in buying: ${product.name} - Price: ${product.price}. Please share more details.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden relative animate-fadeIn">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-gray-100 transition z-10"
        >
          <X className="h-6 w-6 text-gray-600" />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="w-full md:w-1/2 h-64 md:h-auto relative">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details Section */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h2>
              <p className="text-2xl text-yellow-600 font-semibold mb-4">{product.price}</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                {product.description}
              </p>
              
              <div className="space-y-2 mb-6">
                <p className="text-sm text-gray-500">✓ Free Delivery</p>
                <p className="text-sm text-gray-500">✓ 1 Year Warranty</p>
              </div>
            </div>

            <button 
              onClick={handleWhatsAppOrder}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] cursor-pointer"
            >
              <MessageCircle className="h-5 w-5" />
              Order via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;