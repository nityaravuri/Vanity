// src/pages/B2BCartPage.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { useB2BCart } from '../context/B2BCartContext';
import type { B2BCartItem } from '../data/b2bTypes';
import { Trash2, Plus, Minus } from 'lucide-react';

// --- Helper component for the item row ---
const B2BCartItemRow: React.FC<{ item: B2BCartItem }> = ({ item }) => {
  const { updateB2BQuantity, removeFromB2BCart } = useB2BCart();

  return (
    <div className="flex items-center py-4 border-b">
      <img 
        src={item.product.imageUrl} 
        alt={item.product.name} 
        className="w-24 h-24 object-cover rounded-md"
      />
      <div className="ml-4 flex-grow">
        <h3 className="text-lg font-semibold text-zinc-800">{item.product.name}</h3>
        <p className="text-sm text-gray-500">Sold by: {item.product.wholesalerName}</p>
        <p className="text-sm text-gray-500">MOQ: {item.product.minOrderQty} units</p>
        
        <div className="flex items-center mt-2">
          <button 
            onClick={() => updateB2BQuantity(item.product.id, item.quantity - 1)}
            className="p-1 border rounded-md text-gray-600 hover:bg-gray-100"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="mx-3 font-medium text-base">
            {item.quantity}
          </span>
          <button 
            onClick={() => updateB2BQuantity(item.product.id, item.quantity + 1)}
            className="p-1 border rounded-md text-gray-600 hover:bg-gray-100"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="text-right">
        <p className="text-lg font-medium text-zinc-800">
          ${(item.product.pricePerUnit * item.quantity).toFixed(2)}
        </p>
        <p className="text-sm text-gray-500">
          ($${item.product.pricePerUnit.toFixed(2)} / unit)
        </p>
        <button 
          onClick={() => removeFromB2BCart(item.product.id)}
          className="text-sm text-red-600 hover:text-red-800 mt-2"
        >
          <Trash2 className="h-4 w-4 inline-block mr-1" />
          Remove
        </button>
      </div>
    </div>
  );
};

// --- Main B2B Cart Page Component ---
const B2BCartPage: React.FC = () => {
  const { items } = useB2BCart(); 

  const subtotal = items.reduce((sum, item) => 
    sum + (item.product.pricePerUnit * item.quantity), 0);
  
  // You might have different logic for bulk shipping, fees, etc.
  const bulkFee = 150.00; // Example flat fee
  const total = subtotal + bulkFee;

  return (
    <div className="container mx-auto px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif font-bold text-zinc-800 mb-8">
        Your Bulk Order Cart
      </h1>
      
      {items.length === 0 ? (
        <div className="text-center py-20 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Your bulk cart is empty</h2>
          <Link to="/wholesale-marketplace" className="px-6 py-2 bg-blue-700 text-white font-medium rounded-md hover:bg-blue-800 transition-colors">
            Continue Sourcing
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Item List */}
          <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-zinc-800 mb-4">
              Items ({items.length})
            </h2>
            <div className="space-y-4">
              {items.map(item => (
                <B2BCartItemRow key={item.product.id} item={item} />
              ))}
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
              <h2 className="text-2xl font-semibold text-zinc-800 mb-6">
                Bulk Order Summary
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between text-base">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium text-zinc-800">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base">
                  <span className="text-gray-600">Bulk Freight Fee</span>
                  <span className="font-medium text-zinc-800">${bulkFee.toFixed(2)}</span>
                </div>
              </div>
              <div className="border-t my-4"></div>
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className="w-full mt-6 px-6 py-3 bg-blue-700 text-white font-medium rounded-md text-base hover:bg-blue-800 transition-colors">
                Proceed to Bulk Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default B2BCartPage;