export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  colors?: string[];
  sizes?: string[];
};

export type CartItem = Product & {
  selectedColor?: string;
  selectedSize?: string;
  quantity: number;
};
