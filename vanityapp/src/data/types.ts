// src/data/types.ts

export type ProductCategory = 'sofas' | 'tables-chairs' | 'cabinets' | 'carpets';

// This 'export' keyword is the most important part
export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: ProductCategory;
}