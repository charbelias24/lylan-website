import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section relative overflow-hidden">
      <div className="absolute -right-24 -bottom-24 w-64 h-64 bg-primary opacity-10 rounded-full"></div>
      <div className="absolute -left-16 -top-16 w-48 h-48 bg-secondary opacity-10 rounded-full"></div>

      <div className="max-w-3xl mx-auto text-center relative">
        <h2 className="section-title">Our Story</h2>
        <p className="text-lg md:text-xl leading-relaxed mb-8">
          Born from a love of sun, surf, and fresh ingredients, Lylan Poké brings the best of Hawaiian cuisine to Paris. Our bowls are crafted with care using locally-sourced ingredients and authentic recipes that transport you to tropical shores with every bite.
        </p>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="bg-neutral-light p-6 rounded-lg shadow-sm w-full md:w-1/2">
            <h3 className="text-xl font-bold text-primary mb-3">Fresh Ingredients</h3>
            <p>We source our ingredients from local suppliers daily to ensure maximum freshness and flavor in every bowl.</p>
          </div>
          <div className="bg-neutral-light p-6 rounded-lg shadow-sm w-full md:w-1/2">
            <h3 className="text-xl font-bold text-primary mb-3">Made with Aloha</h3>
            <p>Each bowl is crafted with care, bringing authentic Hawaiian flavors and a bit of tropical sunshine to your day.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
