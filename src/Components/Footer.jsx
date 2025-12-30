import React from 'react';
import { Lightbulb, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <Lightbulb className="h-8 w-8 text-yellow-400" />
              <span className="font-bold text-2xl tracking-wider">ALPHA</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              IlAlphating modern homes with timeless elegance. Quality craftsmanship meets contemporary design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400 transition-colors text-sm">All Products</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors text-sm">New Arrivals</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors text-sm">Best Sellers</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors text-sm">Sale</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-5 w-5 text-yellow-400 shrink-0" />
                <span>123 Design Street, Creative Hub,<br/>Mumbai, India 400001</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-yellow-400 shrink-0" />
                <span>+91 99999 99999</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-yellow-400 shrink-0" />
                <span>hello@Alpha.store</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Social */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition-all">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2025 Alpha Store. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;