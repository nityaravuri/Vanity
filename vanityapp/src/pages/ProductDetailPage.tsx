// src/pages/ProductDetailPage.tsx

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { Product } from '../data/types';
import { mockProducts } from '../data/mockProducts';
import { useCart } from '../context/CartContext'; // 1. Import useCart

// ... (formatTitle function remains the same)
function formatTitle(slug: string): string {
  if (slug === 'tables-chairs') return 'Tables & Chairs';
  return slug.charAt(0).toUpperCase() + slug.slice(1);
}

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  
  // 2. Get the addToCart function from our context
  const { addToCart } = useCart();

  useEffect(() => {
    if (productId) {
      const foundProduct = mockProducts.find(p => p.id === productId);
      setProduct(foundProduct || null);
    }
  }, [productId]);

  if (!product) {
    return (
      <div className="container mx-auto px-6 lg:px-8 py-12 text-center">
        <h1 className="text-2xl font-bold">Product not found.</h1>
      </div>
    );
  }

  // Helper function to handle the click
  const handleAddToCart = () => {
    // The 'if' check is technically already handled by the return above,
    // but it's good practice.
    if (product) {
      addToCart(product);
    }
  };

  return (
    <div className="container mx-auto px-6 lg:px-8 py-12">
      <div className="flex bg-white p-8 rounded-lg shadow-md">
        
        {/* === Left Side: Product Image === */}
        <div className="w-1/2 pr-8">
          <img 
            src={product.imageUrl} 
            alt={product.name}
            className="w-full h-auto max-h-[600px] object-cover rounded-lg"
          />
        </div>

        {/* === Right Side: Product Info === */}
        <div className="w-1/2 pl-8">
          <Link 
            to={`/products/${product.category}`}
            className="text-sm text-zinc-600 hover:text-zinc-800"
          >
            &larr; Back to {formatTitle(product.category)}
          </Link>
          
          <h1 className="text-4xl font-serif font-bold text-zinc-800 mt-2">
            {product.name}
          </h1>
          
          <p className="text-3xl text-zinc-700 my-4">
            ${product.price.toFixed(2)}
          </p>
          
          <p className="text-gray-600 text-base leading-relaxed mb-8">
            This is a placeholder description...
          </p>
          
          {/* 3. Update the button to use the new onClick handler */}
          <button
            onClick={handleAddToCart}
            className="w-full px-10 py-3 bg-zinc-800 text-white font-medium rounded-md text-base hover:bg-zinc-700 transition-colors"
          >
            Add to Cart
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;