import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import OrderSection from './components/OrderSection';
import Footer from './components/Footer';
import FloatingOrderButton from './components/FloatingOrderButton';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <OrderSection />
        <About />
      </main>
      <Footer />
      <FloatingOrderButton />
    </div>
  );
}

export default App;
