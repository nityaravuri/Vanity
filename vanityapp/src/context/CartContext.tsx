// src/context/CartContext.tsx

import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Product } from '../data/types'; 

export interface CartItem {
  product: Product;
  quantity: number;
}

// 1. Add updateQuantity to the interface
interface ICartContext {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, newQuantity: number) => void; // 👈 ADD THIS
}

const CartContext = createContext<ICartContext | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode; 
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    // ... (This function stays the same)
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.product.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { product, quantity: 1 }];
      }
    });
    alert(`Added ${product.name} to cart!`);
  };

  const removeFromCart = (productId: string) => {
    // ... (This function stays the same)
    setItems(prevItems => {
      return prevItems.filter(item => item.product.id !== productId);
    });
    alert('Item removed from cart.');
  };

  // 2. Add the new updateQuantity function
  const updateQuantity = (productId: string, newQuantity: number) => {
    setItems(prevItems => {
      // If the new quantity is 0 or less, remove the item
      if (newQuantity <= 0) {
        return prevItems.filter(item => item.product.id !== productId);
      }
      
      // Otherwise, update the quantity for the matching item
      return prevItems.map(item =>
        item.product.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      );
    });
  };

  // 3. Pass the new function to the provider
  return (
    <CartContext.Provider 
      value={{ items, addToCart, removeFromCart, updateQuantity }} // 👈 ADD updateQuantity
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  // ... (This hook stays the same)
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};