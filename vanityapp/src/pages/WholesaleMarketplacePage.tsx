// src/pages/WholesaleMarketplacePage.tsx

import React from 'react';
import { mockWholesaleProducts } from '../data/mockWholesaleProducts';
import WholesaleProductCard from '../components/WholesaleProductCard';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useB2BCart } from '../context/B2BCartContext'; // 1. Import the B2B cart hook

const WholesaleMarketplacePage: React.FC = () => {
  const products = mockWholesaleProducts;
  const { items } = useB2BCart(); // 2. Get the items from the hook
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="container mx-auto px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-serif font-bold text-zinc-800">
            Wholesale Marketplace
          </h1>
          <p className="text-lg text-gray-600">
            Source materials and products from wholesalers.
          </p>
        </div>
        
        {/* 3. Update the Link to go to the new page and show the count */}
        <Link 
          to="/b2b-cart" 
          className="relative px-6 py-2 bg-blue-700 text-white font-medium rounded-md hover:bg-blue-800 flex items-center"
        >
          <ShoppingBag className="h-5 w-5 mr-2" />
          Bulk Order ({totalItems})
        </Link>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <WholesaleProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default WholesaleMarketplacePage;