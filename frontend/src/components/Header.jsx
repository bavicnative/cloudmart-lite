import React from 'react';

const Header = () => (
  <header className="bg-white shadow-md py-5 px-6 border-b border-gray-200">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-3xl font-bold text-blue-600">Cloudmart 🛒</h1>
      <span className="text-sm text-gray-500 italic">Your Cloud-Native Shop Demo</span>
    </div>
  </header>
);

export default Header;