import React from 'react';

const deliveryServices = [
  {
    name: 'In-Store Pickup',
    icon: '🏠',
    color: 'bg-primary-light',
    link: '#'
  },
  {
    name: 'Uber Eats',
    icon: '🚗',
    color: 'bg-neutral-dark',
    link: '#'
  },
  {
    name: 'Deliveroo',
    icon: '🛵',
    color: 'bg-secondary',
    link: '#'
  }
];

const OrderSection: React.FC = () => {
  return (
    <section id="order" className="section bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Order Now</h2>
        <p className="text-center text-lg mb-12">
          Enjoy our delicious poké bowls at home or on the go. 
          Order for pickup or get it delivered right to your door!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deliveryServices.map((service) => (
            <a 
              key={service.name}
              href={service.link}
              className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={`${service.color} p-6 flex justify-center text-5xl transition-transform group-hover:scale-110`}>
                <span>{service.icon}</span>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-neutral-600 mb-4">Fast, reliable delivery</p>
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium group-hover:bg-primary group-hover:text-white transition-colors">
                  Order Now
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrderSection;