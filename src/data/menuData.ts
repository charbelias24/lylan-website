export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'signature' | 'custom' | 'extras' | 'drinks';
  tags?: string[];
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Anti-Age",
    description: "Riz blanc vinaigré, saumon, avocat, fenouil, wakame, kimchi, furikake, cébette, sauce yuzu ponzu",
    price: 14.9,
    image: "/images/anti age.jpg",
    category: "signature",
    tags: ["popular", "healthy", "omega-3", "antioxidant"]
  },
  {
    id: 2,
    name: "Energie",
    description: "Quinoa, thon, concombres sunomono, agrumes, edamame, mangue, gingembre, noix de cajou, sauce sésame wasabi",
    price: 14.9,
    image: "/images/energie.jpg",
    category: "signature",
    tags: ["new", "protein-rich", "energizing", "gluten-free"]
  },
  {
    id: 3,
    name: "Detox",
    description: "Quinoa, tofu, concombres sunomono, chou rouge, carottes au yuzu, mangue, furikake, cébette, sauce 4 huiles",
    price: 14.9,
    image: "/images/detox.jpg",
    category: "signature",
    tags: ["vegan", "gluten-free", "detox", "plant-based"]
  },
  {
    id: 4,
    name: "Anti-Oxydant",
    description: "Riz noir venere, poulpe, oignons pickles, avocat, edamame, kimchi, baies de goji, coriandre, sauce teriyaki",
    price: 14.9,
    image: "/images/anti age.jpg",
    category: "signature",
    tags: ["popular", "antioxidant", "protein-rich", "superfood"]
  },
  {
    id: 5,
    name: "Créez Votre Poke",
    description: "Créez votre propre bol avec votre choix de base, protéine, garnitures et sauce",
    price: 14.9,
    image: "/images/poke a composer.jpg",
    category: "signature",
    tags: ["customizable", "flexible", "personalized"]
  },
  {
    id: 6,
    name: "Soupe Miso",
    description: "Soupe japonaise traditionnelle avec tofu, algues et oignons verts",
    price: 3.5,
    image: "https://images.pexels.com/photos/5409015/pexels-photo-5409015.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "extras"
  },
  {
    id: 7,
    name: "Edamame",
    description: "Fèves de soja cuites à la vapeur légèrement assaisonnées de sel marin",
    price: 4.0,
    image: "https://images.pexels.com/photos/3296427/pexels-photo-3296427.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "extras"
  },
  {
    id: 8,
    name: "Jus Tropical Frais",
    description: "Mélange d'ananas, d'orange et de fruit de la passion",
    price: 4.5,
    image: "https://images.pexels.com/photos/3651045/pexels-photo-3651045.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "drinks"
  },
  {
    id: 9,
    name: "Eau de Coco",
    description: "Eau de coco pure, servie fraîche",
    price: 3.5,
    image: "https://images.pexels.com/photos/1138991/pexels-photo-1138991.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "drinks"
  }
];

export const menuCategories = [
  { id: 'signature', name: 'Signature Bowls' },
  { id: 'extras', name: 'Extras' },
  { id: 'drinks', name: 'Drinks' }
];
