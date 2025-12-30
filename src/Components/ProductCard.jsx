import React from 'react';

const ProductCard = ({ product, onClick }) => {
  return (
    <div 
      onClick={() => onClick(product)}
      className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100"
    >
      <div className="h-64 overflow-hidden relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
        <p className="text-yellow-600 font-bold">{product.price}</p>
        <button className="mt-4 w-full text-sm text-gray-600 border border-gray-300 py-2 rounded-lg hover:bg-black hover:text-white transition-colors cursor-pointer">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;