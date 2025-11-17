// src/context/B2BCartContext.tsx

import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { B2BCartItem, WholesaleProduct } from '../data/b2bTypes';

// 1. Update the interface
interface IB2BCartContext {
  items: B2BCartItem[];
  addToB2BCart: (product: WholesaleProduct) => void;
  updateB2BQuantity: (productId: string, newQuantity: number) => void;
  removeFromB2BCart: (productId: string) => void;
}

const B2BCartContext = createContext<IB2BCartContext | undefined>(undefined);

interface B2BCartProviderProps {
  children: ReactNode;
}

export const B2BCartProvider: React.FC<B2BCartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<B2BCartItem[]>([]);

  const addToB2BCart = (product: WholesaleProduct) => {
    // ... (This function stays the same)
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.product.id === product.id);
      if (existingItem) {
        alert('Item already in bulk cart. Go to cart to adjust quantity.');
        return prevItems;
      } else {
        alert(`Added ${product.name} to bulk cart (MOQ: ${product.minOrderQty})`);
        return [...prevItems, { product, quantity: product.minOrderQty }];
      }
    });
  };

  // 2. Add the update function
  const updateB2BQuantity = (productId: string, newQuantity: number) => {
    setItems(prevItems =>
      prevItems.map(item => {
        if (item.product.id === productId) {
          // Enforce Minimum Order Quantity
          if (newQuantity < item.product.minOrderQty) {
            alert(`Minimum order is ${item.product.minOrderQty} units.`);
            return { ...item, quantity: item.product.minOrderQty };
          }
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  // 3. Add the remove function
  const removeFromB2BCart = (productId: string) => {
    setItems(prevItems =>
      prevItems.filter(item => item.product.id !== productId)
    );
    alert('Item removed from bulk cart.');
  };

  // 4. Provide the new functions
  return (
    <B2BCartContext.Provider
      value={{
        items,
        addToB2BCart,
        updateB2BQuantity,
        removeFromB2BCart,
      }}
    >
      {children}
    </B2BCartContext.Provider>
  );
};

export const useB2BCart = () => {
  // ... (This hook stays the same)
  const context = useContext(B2BCartContext);
  if (context === undefined) {
    throw new Error('useB2BCart must be used within a B2BCartProvider');
  }
  return context;
};