export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  colors?: string[];
  sizes?: string[];
};

export type CartItem = Product & {
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
  id: string;
};
