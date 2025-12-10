import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import BaumeDetails from './components/BaumeDetails';
import TeaSection from './components/TeaSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-naturae-50 text-naturae-900 font-sans scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <BaumeDetails />
        <TeaSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;