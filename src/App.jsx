import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-white text-gray-900">
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
