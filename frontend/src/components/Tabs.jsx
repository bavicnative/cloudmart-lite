import React from 'react';

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex space-x-6 border-b mb-6">
      {['Products', 'About'].map(tab => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`pb-2 text-lg font-medium hover:text-blue-600 border-b-2 transition-all duration-300 ${
            activeTab === tab ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;