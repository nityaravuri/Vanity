// src/components/WholesaleProductCard.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import type { WholesaleProduct } from '../data/b2bTypes'; // 1. Import the new type
import { useB2BCart } from '../context/B2BCartContext'; // 2. Import the new hook

// This interface was here before, we can keep it
interface WholesaleProductCardProps {
  product: WholesaleProduct;
}

const WholesaleProductCard: React.FC<WholesaleProductCardProps> = ({ product }) => {
  
  // 3. Get the new function from the B2B context
  const { addToB2BCart } = useB2BCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    // 4. Call the new function
    addToB2BCart(product);
  };

  return (
    <Link 
      to="#"
      className="group bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl flex flex-col"
    >
      <div className="w-full h-56 overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-zinc-800 truncate">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 mb-2">
          by {product.wholesalerName}
        </p>
        
        <div className="flex justify-between items-baseline mb-3">
          <p className="text-xl font-bold text-zinc-800">
            ${product.pricePerUnit.toFixed(2)}
            <span className="text-xs font-normal text-gray-500"> / unit</span>
          </p>
        </div>
        <p className="text-sm text-gray-600">
          Min. Order: <span className="font-medium">{product.minOrderQty} units</span>
        </p>
        
        {/* 5. This button now works! */}
        <button
          onClick={handleAddToCart}
          className="w-full mt-4 px-4 py-2 bg-blue-700 text-white font-medium rounded-md text-sm hover:bg-blue-800 transition-colors"
        >
          Add to Bulk Order
        </button>
      </div>
    </Link>
  );
};

export default WholesaleProductCard;