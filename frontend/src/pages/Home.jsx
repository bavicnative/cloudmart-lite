import React, { useState } from 'react';
import Tabs from '../components/Tabs';
import ProductsTab from './ProductsTab';
import AboutTab from './AboutTab';

const Home = () => {
  const [activeTab, setActiveTab] = useState('Products');

  return (
    <div>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'Products' && <ProductsTab />}
      {activeTab === 'About' && <AboutTab />}
    </div>
  );
};

export default Home;