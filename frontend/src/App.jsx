// frontend/src/App.jsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;