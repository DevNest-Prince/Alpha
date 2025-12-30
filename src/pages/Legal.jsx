import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const PrivacyPolicy = () => {
  // Scroll to top when page loads
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto min-h-screen">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">Privacy Policy</h1>
        
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p className="text-sm text-gray-400">Last Updated: December 2025</p>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Information We Collect</h2>
            <p>
              At AlphaStore, we prioritize your privacy. We only collect information that you voluntarily provide to us via our contact forms or WhatsApp conversations, such as:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Name and Phone Number</li>
              <li>Email Address (if provided)</li>
              <li>Shipping Address (for order fulfillment)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. How We Use Your Information</h2>
            <p>We use your data solely for the following purposes:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Processing and delivering your orders.</li>
              <li>Communicating with you regarding product inquiries via WhatsApp.</li>
              <li>Improving our website and product offerings.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Third-Party Services</h2>
            <p>
              We do not sell or trade your personal information. However, we may use trusted third-party services (like WhatsApp for communication or Razorpay for future payments) to operate our business. These parties are obligated to keep your information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Cookies</h2>
            <p>
              Our website may use standard cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Contact Us</h2>
            <p>
              If you have any questions regarding this Privacy Policy, please contact us at <span className="font-medium text-gray-900">support@alpha.store</span>.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;