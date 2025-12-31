import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, MessageCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, addToCart, decreaseQuantity, removeFromCart, getCartTotal } = useCart();

  const { filterAndScroll } = useShop(); 
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate('/'); 
    filterAndScroll("All"); 
  };

  // Scroll to top
  React.useEffect(() => window.scrollTo(0, 0), []);

  const totalAmount = getCartTotal();

  const handleCheckout = () => {
    if (cart.length === 0) return;

    let message = "*New Order from Website - Alpha*\n\n";
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - Qty: ${item.quantity}\n`;
    });
    message += `\n*Total Amount: ₹${totalAmount.toLocaleString()}*`;
    message += "\n\nPlease confirm availability and payment details.";

    const phoneNumber = "919876543210"; 
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl text-gray-600 mb-4">Your cart is empty</h2>
            <button 
              onClick={handleContinueShopping}
              className="inline-flex items-center gap-2 text-yellow-600 font-bold hover:underline cursor-pointer"
            >
                Continue Shopping <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items List */}
            <div className="flex-1 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex gap-4 sm:items-center">
                  
                  {/* Image Section */}
                  <div className="h-24 w-24 sm:h-28 sm:w-28 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  
                  {/* Content Section */}
                  <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    
                    {/* Top: Name & Price */}
                    <div className="mb-3 sm:mb-0 pr-2">
                      <h3 className="font-semibold text-gray-900 text-base sm:text-lg leading-tight">{item.name}</h3>
                      <p className="text-yellow-600 font-medium text-sm sm:text-base mt-1">{item.price}</p>
                    </div>

                    {/* Bottom: Controls Row */}
                    <div className="flex items-center justify-between sm:gap-6">
                      
                      {/* Quantity Controls (Adjusted Size: p-2) */}
                      <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200">
                        <button 
                          onClick={() => decreaseQuantity(item.id)} 
                          className="p-2 hover:text-red-500 hover:bg-white rounded-l-lg transition-colors"
                        >
                            {/* Icon size wapas h-4 (normal) kar diya */}
                            <Minus className="h-4 w-4" />
                        </button>
                        
                        <span className="w-8 text-center font-bold text-sm sm:text-base">{item.quantity}</span>
                        
                        <button 
                          onClick={() => addToCart(item)} 
                          className="p-2 hover:text-green-500 hover:bg-white rounded-r-lg transition-colors"
                        >
                            <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      {/* Remove Button (Adjusted Size: p-2, Icon h-5) */}
                      <button 
                        onClick={() => removeFromCart(item.id)} 
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        title="Remove Item"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>

                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Panel */}
            <div className="lg:w-96">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-28">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>₹{totalAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="text-green-600 font-medium">Free</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between font-bold text-lg text-gray-900">
                    <span>Total</span>
                    <span>₹{totalAmount.toLocaleString()}</span>
                  </div>
                </div>

                <button 
                  onClick={handleCheckout}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-green-200 hover:shadow-green-300"
                >
                  <MessageCircle className="h-5 w-5" />
                  Checkout on WhatsApp
                </button>
                <p className="text-xs text-center text-gray-400 mt-4">
                  You will be redirected to WhatsApp to confirm your order details.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;