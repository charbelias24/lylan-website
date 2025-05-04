import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1600)'
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto fade-in">
        <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
          Des Bols de Poké Frais et Tropicaux à Lyon
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8">
          Des bols inspirés de la cuisine hawaïenne préparés avec les ingrédients les plus frais
        </p>
        <a href="#order" className="btn btn-secondary text-lg">
          Commander
        </a>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <a href="#menu" className="text-white opacity-80 hover:opacity-100 transition-opacity">
          <ChevronDown size={36} className="bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
