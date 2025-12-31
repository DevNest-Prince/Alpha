import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

// Niche wali line add karo taaki error chala jaye
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  // ... baaki pura code same rahega ...
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('alpha_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('alpha_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const decreaseQuantity = (productId) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      }).filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const getItemQuantity = (productId) => {
    return cart.find((item) => item.id === productId)?.quantity || 0;
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      const priceNumber = parseInt(item.price.replace(/[^0-9]/g, ''));
      return total + priceNumber * item.quantity;
    }, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, decreaseQuantity, removeFromCart, getItemQuantity, getCartTotal }}>
      {children}
    </CartContext.Provider>
  );
};