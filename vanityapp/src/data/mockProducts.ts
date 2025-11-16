// src/data/mockProducts.ts
import type { Product } from './types';

export const mockProducts: Product[] = [
  // === SOFAS ===
  {
    id: 's1',
    name: 'Plush Velvet Sofa',
    price: 899.99,
    category: 'sofas',
    imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1740&auto=format&fit=crop',
  },
  {
    id: 's2',
    name: 'Modern Sectional Sofa',
    price: 1299.99,
    category: 'sofas',
    imageUrl: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1740&auto=format&fit=crop',
  },
  {
    id: 's3',
    name: 'Minimalist Loveseat',
    price: 649.99,
    category: 'sofas',
    imageUrl: 'https://images.unsplash.com/photo-1540574163026-643ea20ADE25?q=80&w=1740&auto=format&fit=crop',
  },
  {
    id: 's4',
    name: 'Leather Chesterfield',
    price: 1499.99,
    category: 'sofas',
    imageUrl: 'https://images.unsplash.com/photo-1578500522037-d3c7353f2f63?q=80&w=1740&auto=format&fit=crop',
  },

  // === TABLES & CHAIRS ===
  {
    id: 'tc1',
    name: 'Oak Dining Table',
    price: 799.99,
    category: 'tables-chairs',
    imageUrl: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1740&auto=format&fit=crop',
  },
  {
    id: 'tc2',
    name: 'Eames-Style Lounge Chair',
    price: 349.99,
    category: 'tables-chairs',
    imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1587&auto=format&fit=crop',
  },
  {
    id: 'tc3',
    name: 'Marble Coffee Table',
    price: 499.99,
    category: 'tables-chairs',
    imageUrl: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=1740&auto=format&fit=crop',
  },
  {
    id: 'tc4',
    name: 'Walnut Bar Stool',
    price: 179.99,
    category: 'tables-chairs',
    imageUrl: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1587&auto=format&fit=crop',
  },
  {
    id: 'tc5',
    name: 'Scandinavian Dining Set',
    price: 999.99,
    category: 'tables-chairs',
    imageUrl: 'https://images.unsplash.com/photo-1519947486511-061cbb53c7c2?q=80&w=1740&auto=format&fit=crop',
  },

  // === CABINETS ===
  {
    id: 'c1',
    name: 'Mid-Century Modern Cabinet',
    price: 599.99,
    category: 'cabinets',
    imageUrl: 'https://images.unsplash.com/photo-1588725171738-9eb4b38d313c?q=80&w=1740&auto=format&fit=crop',
  },
  {
    id: 'c2',
    name: 'Walnut Bookshelf',
    price: 449.99,
    category: 'cabinets',
    imageUrl: 'https://images.unsplash.com/photo-1600121848594-d8644e57b80a?q=80&w=1587&auto=format&fit=crop',
  },
  {
    id: 'c3',
    name: 'Farmhouse TV Stand',
    price: 399.99,
    category: 'cabinets',
    imageUrl: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=1587&auto=format&fit=crop',
  },

  // === CARPETS ===
  {
    id: 'r1',
    name: 'Persian Style Rug',
    price: 299.99,
    category: 'carpets',
    imageUrl: 'https://images.unsplash.com/photo-1594894677239-e938f38f710a?q=80&w=1740&auto=format&fit=crop',
  },
  {
    id: 'r2',
    name: 'Modern Shag Carpet',
    price: 199.99,
    category: 'carpets',
    imageUrl: 'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?q=80&w=1587&auto=format&fit=crop',
  },
];