export interface RestaurantInfo {
  name: string;
  tagline: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  contact: {
    phone: string;
    email: string;
  };
  socialMedia: {
    instagram: string;
    facebook: string;
  };
  hours: {
    weekdays: string;
    weekends: string;
  };
  delivery: {
    services: {
      name: string;
      url: string;
    }[];
  };
}

export const restaurantInfo: RestaurantInfo = {
  name: "Lylan Poké",
  tagline: "Fresh, Tropical Poké Bowls in Lyon",
  address: {
    street: "123 Rue des Pêcheurs",
    city: "Paris",
    postalCode: "75011",
    country: "France"
  },
  contact: {
    phone: "+33 1 23 45 67 89",
    email: "hello@lylanpoke.fr"
  },
  socialMedia: {
    instagram: "https://instagram.com/lylanpoke",
    facebook: "https://facebook.com/lylanpoke"
  },
  hours: {
    weekdays: "11:30 - 22:00",
    weekends: "12:00 - 22:30"
  },
  delivery: {
    services: [
      {
        name: "Uber Eats",
        url: "https://ubereats.com"
      },
      {
        name: "Deliveroo",
        url: "https://deliveroo.fr"
      }
    ]
  }
};
