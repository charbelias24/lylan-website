import React, { useState } from 'react';

const restaurants = [
  {
    id: 1,
    name: 'Lylan Poké - Lyon 1er',
    address: '123 Rue des Pêcheurs, 69001 Lyon',
    deliveryServices: [
      {
        name: 'Retrait en Magasin',
        icon: '🏠',
        color: 'bg-primary-light',
        link: 'https://lylan-poke-lyon1er.resos.com'
      },
      {
        name: 'Uber Eats',
        icon: '🚗',
        color: 'bg-neutral-dark',
        link: 'https://www.ubereats.com/fr/store/lylan-poke-lyon-1er/123456'
      },
      {
        name: 'Deliveroo',
        icon: '🛵',
        color: 'bg-secondary',
        link: 'https://deliveroo.fr/fr/menu/lyon/lyon-1er/lylan-poke-lyon-1er'
      }
    ]
  },
  {
    id: 2,
    name: 'Lylan Poké - Lyon 2ème',
    address: '45 Rue de la République, 69002 Lyon',
    deliveryServices: [
      {
        name: 'Retrait en Magasin',
        icon: '🏠',
        color: 'bg-primary-light',
        link: 'https://lylan-poke-lyon2.resos.com'
      },
      {
        name: 'Uber Eats',
        icon: '🚗',
        color: 'bg-neutral-dark',
        link: 'https://www.ubereats.com/fr/store/lylan-poke-lyon-2eme/789012'
      },
      {
        name: 'Deliveroo',
        icon: '🛵',
        color: 'bg-secondary',
        link: 'https://deliveroo.fr/fr/menu/lyon/lyon-2eme/lylan-poke-lyon-2eme'
      }
    ]
  }
];

const OrderSection: React.FC = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<typeof restaurants[0] | null>(null);

  const handleRestaurantClick = (restaurant: typeof restaurants[0]) => {
    if (selectedRestaurant?.id === restaurant.id) {
      setSelectedRestaurant(null);
    } else {
      setSelectedRestaurant(restaurant);
    }
  };

  return (
    <section id="order" className="section bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Commandez Maintenant</h2>
        <p className="text-center text-lg mb-8">
          Dégustez nos délicieux bols de poké à la maison ou à emporter.
          Commandez à retirer ou faites-vous livrer directement chez vous !
        </p>

        {/* Restaurant Selection */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4 text-center">Choisissez votre restaurant</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {restaurants.map((restaurant) => (
              <button
                key={restaurant.id}
                onClick={() => handleRestaurantClick(restaurant)}
                className={`p-4 rounded-lg border-2 transition-all ${selectedRestaurant?.id === restaurant.id
                  ? 'border-primary bg-primary/5'
                  : 'border-gray-200 hover:border-primary/50'
                  }`}
              >
                <h4 className="font-bold text-lg mb-2">{restaurant.name}</h4>
                <p className="text-neutral-600">{restaurant.address}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Delivery Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {selectedRestaurant?.deliveryServices.map((service) => (
            <div
              key={service.name}
              className={`group block bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${!selectedRestaurant ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg'
                }`}
            >
              <div className={`${service.color} p-6 flex justify-center text-5xl transition-transform ${selectedRestaurant ? 'group-hover:scale-110' : ''}`}>
                <span>{service.icon}</span>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-neutral-600 mb-4">Livraison rapide et fiable</p>
                {selectedRestaurant ? (
                  <a
                    href={service.link}
                    className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium hover:bg-primary hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Commander
                  </a>
                ) : (
                  <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary/50 font-medium">
                    Commander
                  </span>
                )}
              </div>
            </div>
          ))}
          {!selectedRestaurant && (
            <div className="absolute inset-0 pointer-events-none">
              <div className="flex items-center justify-center h-full">
                <p className="text-lg text-neutral-600 bg-white/80 px-4 py-2 rounded-lg">
                  Veuillez sélectionner un restaurant pour commander
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
