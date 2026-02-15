import type { Product } from "../../lib";

export const products: Product[] = [
  {
    id: 1,
    name: "T-Shirt",
    price: 50,
    image: "https://via.placeholder.com/300",
    colors: ["red", "blue", "black"],
    sizes: ["S", "M", "L"],
  },
  {
    id: 2,
    name: "Sneakers",
    price: 120,
    image: "https://via.placeholder.com/300",
    colors: ["white", "black"],
    sizes: ["40", "41", "42"],
  },
];
