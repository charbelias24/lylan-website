import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-dark text-white py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Restaurant Locations */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h4 className="font-medium">Lyon 2ème</h4>
                <p className="text-neutral-300">37 rue Sainte-Hélène</p>
                <p className="text-neutral-300">69002 LYON</p>
                <p className="text-neutral-300 mt-2">Lundi à Dimanche: 11h30 - 14h30</p>
                <a href="tel:+33428380487" className="text-neutral-300 mt-2 hover:text-white transition-colors">
                  Tél: 04 28 38 04 87
                </a>
              </div>
              <div>
                <h4 className="font-medium">Lyon 6ème</h4>
                <p className="text-neutral-300">18 cours Vitton</p>
                <p className="text-neutral-300">69006 LYON</p>
                <p className="text-neutral-300 mt-2">Lundi à Samedi: 11h30 - 14h30</p>
                <a href="tel:+33472378214" className="text-neutral-300 mt-2 hover:text-white transition-colors">
                  Tél: 04 72 37 82 14
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/lylanpoke/?ref=br_rs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/lylanpoke/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://www.tripadvisor.fr/Restaurant_Review-g187265-d19701673-Reviews-Ly_Lan_Poke_Bar-Lyon_Rhone_Auvergne_Rhone_Alpes.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.006 4.697c2.301 0 4.167 1.866 4.167 4.167 0 2.301-1.866 4.167-4.167 4.167-2.301 0-4.167-1.866-4.167-4.167 0-2.301 1.866-4.167 4.167-4.167zM12.006 0C5.383 0 0 5.383 0 12.006c0 6.623 5.383 12.006 12.006 12.006 6.623 0 12.006-5.383 12.006-12.006 0-6.623-5.383-12.006-12.006-12.006zm0 20.5c-4.692 0-8.5-3.808-8.5-8.5s3.808-8.5 8.5-8.5 8.5 3.808 8.5 8.5-3.808 8.5-8.5 8.5z" />
                </svg>
              </a>
            </div>
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
