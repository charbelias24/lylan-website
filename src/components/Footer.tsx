import React from 'react';
import { Instagram, Facebook, MapPin, Clock, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-neutral-dark text-white">
      <div className="section py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">LY-LAN POKE BAR</h3>
            <p className="mb-4">
              Des bols de poké frais et sains inspirés de la cuisine hawaïenne, préparés avec amour à Lyon.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Nous Trouver</h4>
            <div className="flex items-start mb-3">
              <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
              <p>123 Rue des Pêcheurs<br />69001 Lyon, France</p>
            </div>
            <div className="flex items-start mb-3">
              <Clock size={18} className="mr-2 mt-1 flex-shrink-0" />
              <div>
                <p>Lundi - Vendredi: 11:30 - 22:00</p>
                <p>Samedi - Dimanche: 12:00 - 22:30</p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone size={18} className="mr-2 flex-shrink-0" />
              <p>+33 1 23 45 67 89</p>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Menu</h4>
            <ul className="space-y-2">
              <li><a href="#menu" className="hover:text-secondary transition-colors">Signature Bowls</a></li>
              <li><a href="#menu" className="hover:text-secondary transition-colors">Build Your Own</a></li>
              <li><a href="#menu" className="hover:text-secondary transition-colors">Extras</a></li>
              <li><a href="#menu" className="hover:text-secondary transition-colors">Drinks</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Find Us</h4>
            <div className="h-48 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937563!2d2.3698694!3d48.8534951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671e5819a5a3f%3A0x921403cd9585a23e!2sBastille%2C%20Lyon%2C%20France!5e0!3m2!1sen!2sus!4v1708937354532!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="LY-LAN POKE BAR Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black/30 py-4">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm">
          <p>© {new Date().getFullYear()} LY-LAN POKE BAR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
