import React, { createContext, useContext, useState } from "react";
import type { CartItem, Product } from "../types/product";

type CartContextType = {
  cart: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (product: Product, color?: string, size?: string) => void;
  updateItem: (index: number, item: CartItem) => void;
  removeItem: (index: number) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const addToCart = (product: Product, color?: string, size?: string) => {
    const newItem: CartItem = {
      ...product,
      selectedColor: color,
      selectedSize: size,
      quantity: 1,
    };

    setCart((prev) => [...prev, newItem]);
    setIsOpen(true);

    alert(`${product.name} added to cart`);
  };

  const updateItem = (index: number, item: CartItem) => {
    const updated = [...cart];
    updated[index] = item;
    setCart(updated);
  };

  const removeItem = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isOpen,
        openCart,
        closeCart,
        addToCart,
        updateItem,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
};
