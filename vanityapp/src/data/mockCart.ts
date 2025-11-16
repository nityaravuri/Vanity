// src/data/mockCart.ts
import type { Product } from './types';

export interface CartItem {
  product: Product;
  quantity: number;
}

// We'll just grab some products from our mock data to use
export const mockCart: CartItem[] = [
  {
    // Plush Velvet Sofa (s1)
    product: {
      id: 's1',
      name: 'Plush Velvet Sofa',
      price: 899.99,
      category: 'sofas',
      imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1740&auto=format&fit=crop',
    },
    quantity: 1,
  },
  {
    // Eames-Style Lounge Chair (tc2)
    product: {
      id: 'tc2',
      name: 'Eames-Style Lounge Chair',
      price: 349.99,
      category: 'tables-chairs',
      imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1587&auto=format&fit=crop',
    },
    quantity: 2,
  },
];