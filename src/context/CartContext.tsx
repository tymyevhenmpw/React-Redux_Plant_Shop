import React, { createContext, useContext, useState } from 'react';
import { Plant, CartItem } from '../types';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (plant: Plant) => void;
  removeFromCart: (plantId: number) => void;
  increaseQuantity: (plantId: number) => void;
  decreaseQuantity: (plantId: number) => void;
  getTotalItems: () => number;
  getTotalCost: () => number;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (plant: Plant) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === plant.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...plant, quantity: 1 }];
    });
  };

  const removeFromCart = (plantId: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== plantId));
  };

  const increaseQuantity = (plantId: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === plantId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (plantId: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === plantId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter((item) => item.quantity > 0)
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalCost = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        getTotalItems,
        getTotalCost,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};