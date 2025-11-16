// src/components/ProductCard.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../data/types';
import { useCart } from '../context/CartContext'; 

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); 
    addToCart(product);
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className="group bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl flex flex-col"
    >
      {/* Product Image */}
      <div className="w-full h-64 overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      {/* Product Info */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-zinc-800 truncate">
          {product.name}
        </h3>
        
        {/* === THIS IS THE FIX === */}
        <p className="text-base text-gray-600 mt-1">
          ${product.price.toFixed(2)}
        </p> {/* 👈 This was </s.> before, now it's correct. */}
        {/* ===================== */}
        
        <button
          onClick={handleAddToCart}
          className="w-full mt-4 px-4 py-2 bg-zinc-800 text-white font-medium rounded-md text-sm hover:bg-zinc-700 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;