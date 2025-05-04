import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-dark text-white py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Restaurant Locations */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Nos Restaurants</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium">Lyon 2ème</h4>
                <p className="text-neutral-300">37 rue Sainte-Hélène</p>
                <p className="text-neutral-300">69002 LYON</p>
                <p className="text-neutral-300 mt-2">Lundi à Dimanche: 11h30 - 14h30</p>
              </div>
              <div>
                <h4 className="font-medium">Lyon 6ème</h4>
                <p className="text-neutral-300">18 cours Vitton</p>
                <p className="text-neutral-300">69006 LYON</p>
                <p className="text-neutral-300 mt-2">Lundi à Samedi: 11h30 - 14h30</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-end">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-neutral-300">Tél: 04 28 38 04 87</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-neutral-700 text-center text-neutral-400">
          <p>&copy; {new Date().getFullYear()} Ly-Lan Poke Bar. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
