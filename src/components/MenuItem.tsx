import React from 'react';
import { MenuItem as MenuItemType } from '../data/menuData';

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const hasImage = item.image && item.image.trim() !== '';

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {hasImage && (
        <div className="h-48 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover menu-image"
          />
        </div>
      )}

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-neutral-800">{item.name}</h3>
          <span className="bg-[#34757b] text-white px-3 py-1 rounded-full text-sm font-medium">
            €{item.price.toFixed(2)}
          </span>
        </div>

        <p className="text-neutral-600">{item.description}</p>
      </div>
    </div>
  );
};

export default MenuItem;
