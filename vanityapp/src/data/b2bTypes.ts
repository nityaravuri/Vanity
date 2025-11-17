// src/data/b2bTypes.ts

// This is the shape of a product in the wholesale marketplace
export interface WholesaleProduct {
  id: string;
  name: string;
  wholesalerName: string;
  pricePerUnit: number;
  minOrderQty: number;
  imageUrl: string;
}

// This is the shape of an item in the B2B cart
export interface B2BCartItem {
  product: WholesaleProduct;
  quantity: number;
}