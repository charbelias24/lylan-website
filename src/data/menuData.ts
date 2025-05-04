export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'signature' | 'custom' | 'extras' | 'drinks' | 'desserts';
  tags?: string[];
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Anti-Age",
    description: "Riz blanc vinaigré, saumon, avocat, fenouil, wakame, kimchi, furikake, cébette, sauce yuzu ponzu",
    price: 14.9,
    image: "/images/anti age.jpg",
    category: "signature"
  },
  {
    id: 2,
    name: "Energie",
    description: "Quinoa, thon, concombres sunomono, agrumes, edamame, mangue, gingembre, noix de cajou, sauce sésame wasabi",
    price: 14.9,
    image: "/images/energie.jpg",
    category: "signature"
  },
  {
    id: 3,
    name: "Detox",
    description: "Quinoa, tofu, concombres sunomono, chou rouge, carottes au yuzu, mangue, furikake, cébette, sauce 4 huiles",
    price: 14.9,
    image: "/images/detox.jpg",
    category: "signature"
  },
  {
    id: 4,
    name: "Anti-Oxydant",
    description: "Riz noir venere, poulpe, oignons pickles, avocat, edamame, kimchi, baies de goji, coriandre, sauce teriyaki",
    price: 14.9,
    image: "/images/anti age.jpg",
    category: "signature"
  },
  {
    id: 5,
    name: "Créez Votre Poke",
    description: "Créez votre propre bol avec votre choix de base, protéine, garnitures et sauce",
    price: 14.9,
    image: "/images/poke a composer.jpg",
    category: "signature"
  },
  {
    id: 6,
    name: "Thé vert citronnelle et menthe",
    description: "Thé vert bio infusé avec citronnelle et menthe fraîche",
    price: 3.5,
    image: "",
    category: "drinks"
  },
  {
    id: 7,
    name: "Infusion rooibos & hibiscus",
    description: "Infusion bio de rooibos et hibiscus",
    price: 3.5,
    image: "",
    category: "drinks"
  },
  {
    id: 8,
    name: "Citronnade bio",
    description: "Citronnade maison à base de citrons bio",
    price: 3.5,
    image: "",
    category: "drinks"
  },
  {
    id: 9,
    name: "Eau détox",
    description: "Eau infusée aux fruits frais et herbes",
    price: 3.5,
    image: "",
    category: "drinks"
  },
  {
    id: 10,
    name: "Cake du moment",
    description: "Notre cake maison du jour",
    price: 3.5,
    image: "",
    category: "desserts"
  },
  {
    id: 11,
    name: "Banh Bo",
    description: "Dessert vietnamien au pandan (le gâteau vert)",
    price: 3.5,
    image: "",
    category: "desserts"
  },
  {
    id: 12,
    name: "Salade de fruits frais",
    description: "Mélange de fruits de saison frais",
    price: 3.5,
    image: "",
    category: "desserts"
  }
];

export const menuCategories = [
  { id: 'signature', name: 'Nos Poke Bowls' },
  { id: 'drinks', name: 'Boissons' },
  { id: 'desserts', name: 'Desserts' }
];
