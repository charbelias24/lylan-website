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
    name: "Classic Hawaiian",
    description: "Ahi tuna, sticky rice, avocado, cucumber, edamame, pineapple, and ponzu sauce",
    price: 13.9,
    image: "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "signature",
    tags: ["popular", "spicy"]
  },
  {
    id: 2,
    name: "Tropical Shrimp",
    description: "Marinated shrimp, mango, avocado, red cabbage, coconut flakes, and sriracha mayo",
    price: 14.9,
    image: "https://images.pexels.com/photos/5835353/pexels-photo-5835353.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "signature",
    tags: ["new"]
  },
  {
    id: 3,
    name: "Vegan Delight",
    description: "Tofu, brown rice, avocado, edamame, radish, carrots, and tahini dressing",
    price: 12.9,
    image: "https://images.pexels.com/photos/2862154/pexels-photo-2862154.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "signature",
    tags: ["vegan"]
  },
  {
    id: 4,
    name: "Spicy Salmon",
    description: "Fresh salmon, quinoa, cucumber, jalapeño, coriander, and yuzu sauce",
    price: 14.5,
    image: "https://images.pexels.com/photos/3607083/pexels-photo-3607083.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "signature",
    tags: ["spicy", "popular"]
  },
  {
    id: 5,
    name: "Build Your Own",
    description: "Choose your base, protein, toppings, and sauce for a customized experience",
    price: 13.5,
    image: "https://images.pexels.com/photos/1199027/pexels-photo-1199027.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "custom"
  },
  {
    id: 6,
    name: "Miso Soup",
    description: "Traditional Japanese soup with tofu, seaweed, and green onions",
    price: 3.5,
    image: "https://images.pexels.com/photos/5409015/pexels-photo-5409015.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "extras"
  },
  {
    id: 7,
    name: "Edamame",
    description: "Steamed soybeans lightly seasoned with sea salt",
    price: 4.0,
    image: "https://images.pexels.com/photos/3296427/pexels-photo-3296427.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "extras"
  },
  {
    id: 8,
    name: "Fresh Tropical Juice",
    description: "Blend of pineapple, orange, and passionfruit",
    price: 4.5,
    image: "https://images.pexels.com/photos/3651045/pexels-photo-3651045.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "drinks"
  },
  {
    id: 9,
    name: "Coconut Water",
    description: "Pure coconut water, served chilled",
    price: 3.5,
    image: "https://images.pexels.com/photos/1138991/pexels-photo-1138991.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "drinks"
  }
];

export const menuCategories = [
  { id: 'signature', name: 'Signature Bowls' },
  { id: 'custom', name: 'Build Your Own' },
  { id: 'extras', name: 'Extras' },
  { id: 'drinks', name: 'Drinks' }
];