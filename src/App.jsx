import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { CartProvider } from './context/CartContext';
import { ShopProvider } from './context/ShopContext'; 
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import BackToTop from './Components/BackToTop';

function App() {
  return (
    <CartProvider>
      <ShopProvider> 
        <Router>
          <BackToTop />
          <Navbar />
          <AppRoutes />
          <Footer />
        </Router>
      </ShopProvider>
    </CartProvider>
  );
}

export default App;