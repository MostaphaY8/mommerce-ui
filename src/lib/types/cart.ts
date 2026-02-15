import type { Product } from "./product";

export interface CartItem extends Product {
  quantity: number;
  size?: string;
  color?: string;
}
