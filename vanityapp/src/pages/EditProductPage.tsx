// src/pages/EditProductPage.tsx

import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { mockRetailerProducts } from '../data/mockRetailerData';

const getProductById = (id: string) => {
  return mockRetailerProducts.find(p => p.id === id);
};

const EditProductPage: React.FC = () => {
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>();

  // Form state
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Pending Approval'); // This is now read by the form
  const [loading, setLoading] = useState(true);

  // Fetch product data
  useEffect(() => {
    if (productId) {
      const product = getProductById(productId);
      if (product) {
        setProductName(product.name);
        setPrice(product.price);
        setStock(product.stock);
        setStatus(product.status); // We set the status here
        setDescription('Placeholder description... a real product object would have this.');
        setLoading(false);
      } else {
        alert('Product not found!');
        navigate('/dashboard');
      }
    }
  }, [productId, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Updating product:', { 
      productId,
      productName, 
      price, 
      stock,
      status, // This value is read on submit
      description 
    });
    
    alert('Product updated successfully!');
    navigate('/dashboard'); 
  };

  if (loading) {
    return <div>Loading product data...</div>;
  }

  return (
    <div className="container mx-auto px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif font-bold text-zinc-800 mb-8">
        Edit Product
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

          {/* Price & Stock */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

          {/* === THIS IS THE NEW SECTION === */}
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              id="status"
              value={status} // <-- This "reads" the status variable
              onChange={(e) => setStatus(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-zinc-500 focus:border-zinc-500"
            >
              <option value="Pending Approval">Pending Approval</option>
              <option value="Live">Live</option>
              <option value="Out of Stock">Out of Stock</option>
              <option value="Rejected">Rejected</option>
            </select>
            <p className="text-xs text-gray-500 mt-1">
              "Pending Approval" and "Rejected" statuses are set by an Admin.
            </p>
          </div>
          {/* === END OF NEW SECTION === */}
          
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
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProductPage;