import React, { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import type { CartItem, Product } from "../types/product";

type CartContextType = {
  cart: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (product: Product, color?: string, size?: string) => void;
  updateItem: (id: string, item: CartItem) => void;
  removeItem: (id: string) => void;
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
      id: uuidv4(), // unique id for each cart item
    };

    setCart((prev) => [...prev, newItem]);
    setIsOpen(true);

    // Alert message
    alert(`${product.name} added to cart`);
  };

  const updateItem = (id: string, updatedItem: CartItem) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? updatedItem : item)),
    );
  };

  const removeItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
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

// Custom hook
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
};
