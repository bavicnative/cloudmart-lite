import React from 'react';

const ProductCard = ({ product }) => (
  <div className="bg-white shadow hover:shadow-xl rounded-xl overflow-hidden transition duration-300">
    <img
      src={product.image || 'https://via.placeholder.com/400x250'}
      alt={product.name}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
      <p className="text-gray-500 text-sm mt-1">{product.description}</p>
      <p className="text-green-600 font-bold text-md mt-3">₹{product.price}</p>
    </div>
  </div>
);

export default ProductCard;