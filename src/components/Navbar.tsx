import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <img
                src="/images/logo-lylan.svg"
                alt="Lylan Poké"
                className={`h-16 ${isScrolled ? '' : 'filter brightness-0 invert'}`}
              />
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#menu" className={`${isScrolled ? 'text-neutral-800' : 'text-white'} hover:text-secondary font-medium`}>
                Menu
              </a>
              <a href="#order" className={`${isScrolled ? 'text-neutral-800' : 'text-white'} hover:text-secondary font-medium`}>
                Commander
              </a>
              <a href="#about" className={`${isScrolled ? 'text-neutral-800' : 'text-white'} hover:text-secondary font-medium`}>
                À Propos
              </a>
              <a href="#contact" className={`${isScrolled ? 'text-neutral-800' : 'text-white'} hover:text-secondary font-medium`}>
                Contact
              </a>
              <a href="#order" className="btn btn-secondary">
                Commander
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`${isScrolled ? 'text-neutral-800' : 'text-white'} hover:text-secondary p-2`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#menu"
              className="block px-3 py-2 text-base font-medium text-neutral-800 hover:text-primary"
              onClick={toggleMenu}
            >
              Menu
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-base font-medium text-neutral-800 hover:text-primary"
              onClick={toggleMenu}
            >
              À Propos
            </a>
            <a
              href="#order"
              className="block px-3 py-2 text-base font-medium text-neutral-800 hover:text-primary"
              onClick={toggleMenu}
            >
              Commander
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-base font-medium text-neutral-800 hover:text-primary"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <a
              href="#order"
              className="block px-3 py-2 mt-4 text-center btn btn-secondary"
              onClick={toggleMenu}
            >
              Commander
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
