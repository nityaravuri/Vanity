// src/pages/AddProductPage.tsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AddProductPage: React.FC = () => {
  const navigate = useNavigate();
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [category, setCategory] = useState('sofas');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real MERN app, this is where you'd call your API:
    // await api.products.create({ productName, price, stock, category, description });
    
    console.log('Submitting new product:', { 
      productName, 
      price, 
      stock, 
      category, 
      description 
    });
    
    alert('Product submitted for approval!');
    navigate('/dashboard'); // Go back to the dashboard
  };

  return (
    <div className="container mx-auto px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif font-bold text-zinc-800 mb-8">
        Add New Product
      </h1>
      
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Product Name */}
          <div>
            <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-zinc-500 focus:border-zinc-500"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Price */}
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Price ($)
              </label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(parseFloat(e.target.value))}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-zinc-500 focus:border-zinc-500"
                required
              />
            </div>
            
            {/* Stock Quantity */}
            <div>
              <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
                Stock Quantity
              </label>
              <input
                type="number"
                id="stock"
                value={stock}
                onChange={(e) => setStock(parseInt(e.target.value))}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-zinc-500 focus:border-zinc-500"
                required
              />
            </div>
          </div>

          {/* Category */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-zinc-500 focus:border-zinc-500"
            >
              <option value="sofas">Sofas</option>
              <option value="tables-chairs">Tables & Chairs</option>
              <option value="cabinets">Cabinets</option>
              <option value="carpets">Carpets</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-zinc-500 focus:border-zinc-500"
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
              Submit for Approval
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductPage;