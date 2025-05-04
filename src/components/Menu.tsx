import React, { useState } from 'react';
import { menuItems, menuCategories } from '../data/menuData';
import MenuItem from './MenuItem';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('signature');

  return (
    <section id="menu" className="section bg-neutral-light">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Notre Menu</h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition-all ${activeCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-white text-neutral-800 hover:bg-gray-100'
                }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems
            .filter((item) => item.category === activeCategory)
            .map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
