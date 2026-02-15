import type { Product } from "../../lib";

export const products: Product[] = [
  {
    id: 1,
    name: "T-Shirt",
    price: 50,
    image:
      "https://balenciaga.dam.kering.com/m/47b600cea4f08330/Large-850263TTVG91220_F.jpg?v=6",
    colors: ["red", "blue", "black"],
    sizes: ["S", "M", "L"],
  },
  {
    id: 2,
    name: "Sneakers",
    price: 120,
    image:
      "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/AIR+FORCE+1+%2707.png",
    colors: ["white", "black"],
    sizes: ["40", "41", "42"],
  },
];
