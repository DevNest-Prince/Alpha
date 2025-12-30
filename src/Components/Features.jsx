import React from 'react';
import { ShieldCheck, Truck, Zap, Award } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-8 w-8 text-yellow-500" />,
    title: "Energy Efficient",
    desc: "Modern LED technology that saves up to 80% energy while providing warm, natural light."
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-yellow-500" />,
    title: "2-Year Warranty",
    desc: "We stand by our quality. Every product comes with a comprehensive warranty coverage."
  },
  {
    icon: <Truck className="h-8 w-8 text-yellow-500" />,
    title: "Free Shipping",
    desc: "Safe and secure delivery to your doorstep anywhere in India at no extra cost."
  },
  {
    icon: <Award className="h-8 w-8 text-yellow-500" />,
    title: "Premium Materials",
    desc: "Crafted using high-grade metals, treated wood, and durable glass components."
  }
];

const Features = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Updated Name Here */}
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Alpha?</h2>
          <p className="mt-4 text-gray-500">Designed for perfection, built to last.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow text-center group">
              <div className="inline-block p-4 rounded-full bg-yellow-50 group-hover:bg-yellow-100 transition-colors mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;