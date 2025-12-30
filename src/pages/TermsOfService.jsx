import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const TermsOfService = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto min-h-screen">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">Terms of Service</h1>
        
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using AlphaStore, you agree to comply with and be bound by the following terms and conditions. If you disagree with any part of these terms, please do not use our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Products and Pricing</h2>
            <p>
              We strive to display our products as accurately as possible. However:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Prices are subject to change without notice.</li>
              <li>We do not guarantee that the color or details of images on your screen will be 100% accurate to the physical product due to screen variations.</li>
              <li>All products are subject to availability.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Orders and Payments</h2>
            <p>
              Currently, all orders are processed manually via WhatsApp. An order is considered confirmed only after you receive a confirmation message from our official support number. Payment terms will be discussed during the checkout process on WhatsApp.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Returns and Refunds</h2>
            <p>
              Please review your items upon delivery. Returns are accepted only for damaged or defective products reported within 48 hours of delivery. Custom orders are not eligible for returns.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Limitation of Liability</h2>
            <p>
              AlphaStore shall not be liable for any indirect, incidental, or consequential damages arising out of the use or inability to use our products or website.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsOfService;