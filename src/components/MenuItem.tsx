import React from 'react';
import { MenuItem as MenuItemType } from '../data/menuData';

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover menu-image"
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-neutral-800">{item.name}</h3>
          <span className="bg-primary-light text-white px-3 py-1 rounded-full text-sm font-medium">
            €{item.price.toFixed(2)}
          </span>
        </div>
        
        <p className="text-neutral-600 mb-4">{item.description}</p>
        
        {item.tags && (
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span 
                key={tag} 
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  tag === 'popular' ? 'bg-accent text-neutral-800' :
                  tag === 'spicy' ? 'bg-secondary-light text-white' :
                  tag === 'vegan' ? 'bg-primary-light text-white' :
                  tag === 'new' ? 'bg-success text-white' :
                  'bg-gray-200 text-gray-800'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItem;