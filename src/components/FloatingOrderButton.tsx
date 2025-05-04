import React, { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';

const FloatingOrderButton: React.FC = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <a
      href="#order"
      className={`fixed bottom-6 right-6 bg-secondary hover:bg-secondary-dark text-white p-4 rounded-full shadow-lg transition-all duration-300 z-40 md:hidden ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <ShoppingBag size={24} />
    </a>
  );
};

export default FloatingOrderButton;