import React, { useState } from 'react';

const restaurants = [
  {
    id: 1,
    name: 'Ly-Lan Poke Bar - Lyon 2ème',
    address: '37 rue Sainte-Hélène 69002 LYON',
    openingHours: 'Lundi à Dimanche: 11h30 - 14h30',
    deliveryServices: [
      {
        name: 'Retrait en Magasin',
        icon: '🏠',
        color: 'bg-primary-light',
        link: 'https://borneoapp.com/LyLanPokeBarLyon2'
      },
      {
        name: 'Uber Eats',
        icon: '🚗',
        color: 'bg-neutral-dark',
        link: 'https://www.ubereats.com/fr/store/ly-lan-poke-bar-lyon-2/q_DyJ48bVD6McVPSUnKQ8Q?srsltid=AfmBOora_U2ayOkhpjUpijsxOt_EU1ztop1dENBehAQyBi-RBh-Gcw38'
      },
      {
        name: 'Deliveroo',
        icon: '🛵',
        color: 'bg-secondary',
        link: 'https://deliveroo.fr/fr/menu/lyon/part-dieu/ly-lan'
      }
    ]
  },
  {
    id: 2,
    name: 'Ly-Lan Poke Bar - Lyon 6ème',
    address: '18 cours Vitton, 69006 LYON',
    openingHours: 'Lundi à Samedi: 11h30 - 14h30',
    deliveryServices: [
      {
        name: 'Retrait en Magasin',
        icon: '🏠',
        color: 'bg-primary-light',
        link: 'https://borneoapp.com/LyLanPokeBarLyon6?order-mode=true'
      },
      {
        name: 'Uber Eats',
        icon: '🚗',
        color: 'bg-neutral-dark',
        link: 'https://www.ubereats.com/fr/store/ly-lan-poke-bar-lyon-6/jUhUR1-tTWKwgYa7vPSxGw?srsltid=AfmBOooFSt-J5WKyqqpUu736MKQmTryj391UzSkCDWjhGKeSqVYW5eUI'
      },
      {
        name: 'Deliveroo',
        icon: '🛵',
        color: 'bg-secondary',
        link: 'https://deliveroo.fr/fr/menu/lyon/lyon-perrache/ly-lan-poke-bar-lyon-2-kaido-asian-street-food-37-rue-sainte-helene'
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
    <section id="order" className="section">
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
                <p className="text-neutral-600 mb-2">{restaurant.address}</p>
                <p className="text-sm text-neutral-500">{restaurant.openingHours}</p>
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
