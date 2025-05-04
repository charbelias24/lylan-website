import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section relative overflow-hidden">
      <div className="absolute -right-24 -bottom-24 w-64 h-64 bg-primary opacity-10 rounded-full"></div>
      <div className="absolute -left-16 -top-16 w-48 h-48 bg-secondary opacity-10 rounded-full"></div>

      <div className="max-w-3xl mx-auto text-center relative">
        <h2 className="section-title">Chez Ly-Lan</h2>
        <p className="text-lg md:text-l leading-relaxed mb-8">
          Chez Ly-Lan, tous les poke bowls sont préparés sous vos yeux à la minute pour préserver la qualité et la fraicheur de nos ingrédients.
          Nous privilégions l’origine des matières premières en utilisant dans la mesure du possible des produits issus d’une agriculture biologique, de circuits courts ou labellisés. Outre l’importance du manger sain et bon, limiter notre impact écologique est primordial pour nous.</p>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="bg-neutral-light p-6 rounded-lg shadow-sm w-full md:w-1/2">
            <h3 className="text-xl font-bold text-primary mb-3">Lyon 6eme</h3>
            <p>18 cours Vitton 69006 LYON</p>
            <p>Lundi à Samedi de 11h30 à 14h30</p>
          </div>
          <div className="bg-neutral-light p-6 rounded-lg shadow-sm w-full md:w-1/2">
            <h3 className="text-xl font-bold text-primary mb-3">Lyon 2eme</h3>
            <p>37 rue Sainte-Hélène 69002 LYON
              <br />
              Lundi à Dimanche de 11h30 à 14h30
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
