import React from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Side: Contact Info */}
          <div className="lg:w-1/3">
            <span className="text-yellow-600 font-bold tracking-widest text-sm uppercase">Get in Touch</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">Let's Discuss Your Lighting Needs</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Have a custom requirement or need help choosing the right lamp? Our design team is here to assist you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm text-yellow-500">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Visit Our Showroom</h4>
                  <p className="text-gray-500 text-sm">123 Design Avenue, Tech Park,<br/>Mumbai, India</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm text-yellow-500">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email Us</h4>
                  <p className="text-gray-500 text-sm">support@alpha.store</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm text-yellow-500">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Call Us</h4>
                  <p className="text-gray-500 text-sm">+91 99999 99999</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-2/3 bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border-transparent focus:border-yellow-500 focus:bg-white focus:ring-0 transition duration-200" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border-transparent focus:border-yellow-500 focus:bg-white focus:ring-0 transition duration-200" placeholder="john@example.com" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border-transparent focus:border-yellow-500 focus:bg-white focus:ring-0 transition duration-200">
                  <option>Order Inquiry</option>
                  <option>Custom Requirement</option>
                  <option>Support</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-lg bg-gray-50 border-transparent focus:border-yellow-500 focus:bg-white focus:ring-0 transition duration-200" placeholder="How can we help you?"></textarea>
              </div>

              <button className="w-full bg-gray-900 text-white font-bold py-4 rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 flex items-center justify-center gap-2">
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;