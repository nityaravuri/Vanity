// src/pages/AddWholesaleProductPage.tsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AddWholesaleProductPage: React.FC = () => {
  const navigate = useNavigate();
  const [productName, setProductName] = useState('');
  const [wholesalePrice, setWholesalePrice] = useState(0);
  const [minOrderQty, setMinOrderQty] = useState(10); // Wholesalers sell in bulk
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real MERN app, this is where you'd call your API:
    // await api.products.create({ ... });
    
    console.log('Submitting new WHOLESALE product:', { 
      productName, 
      wholesalePrice, 
      minOrderQty, 
      description 
    });
    
    alert('Wholesale product submitted!');
    navigate('/dashboard'); // Go back to the dashboard
  };

  return (
    <div className="container mx-auto px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif font-bold text-zinc-800 mb-8">
        Add New Wholesale Product
      </h1>
      
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Product Name */}
          <div>
            <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
              Product / Material Name
            </label>
            <input
              type="text"
              id="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Wholesale Price (per unit) */}
            <div>
              <label htmlFor="wholesalePrice" className="block text-sm font-medium text-gray-700">
                Wholesale Price (per Unit)
              </label>
              <input
                type="number"
                id="wholesalePrice"
                value={wholesalePrice}
                onChange={(e) => setWholesalePrice(parseFloat(e.target.value))}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                required
              />
            </div>
            
            {/* Minimum Order Quantity */}
            <div>
              <label htmlFor="minOrderQty" className="block text-sm font-medium text-gray-700">
                Minimum Order Quantity (MOQ)
              </label>
              <input
                type="number"
                id="minOrderQty"
                value={minOrderQty}
                onChange={(e) => setMinOrderQty(parseInt(e.target.value))}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                required
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Product Specification / Description
            </label>
            <textarea
              id="description"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            ></textarea>
          </div>
          
          {/* Action Buttons */}
          <div className="flex justify-end space-x-4 pt-4">
            <Link
              to="/dashboard"
              className="px-6 py-2 bg-gray-100 text-gray-700 font-medium rounded-md hover:bg-gray-200"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-6 py-2 bg-zinc-800 text-white font-medium rounded-md hover:bg-zinc-700"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddWholesaleProductPage;