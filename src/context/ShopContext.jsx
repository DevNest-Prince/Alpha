import React, { createContext, useContext, useState } from 'react';

const ShopContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Ye function category set karega aur shop section par scroll karega
  const filterAndScroll = (category) => {
    setActiveCategory(category);
    
    // Thoda wait karke scroll karo taaki page load ho sake
    setTimeout(() => {
      const element = document.getElementById('shop');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <ShopContext.Provider value={{ activeCategory, setActiveCategory, filterAndScroll }}>
      {children}
    </ShopContext.Provider>
  );
};