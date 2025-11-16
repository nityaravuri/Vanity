// src/components/dashboards/ProductManagement.tsx

import React from 'react';
// 1. Import Link
import { Link } from 'react-router-dom'; 
import { mockRetailerProducts } from '../../data/mockRetailerData';
import { Edit, Trash2, PlusCircle } from 'lucide-react';

const ProductManagement: React.FC = () => {
  const products = mockRetailerProducts; 

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Manage Your Products</h3>
        
        {/* 2. Change this <button> to a <Link> */}
        <Link
          to="/dashboard/products/new"
          className="flex items-center px-4 py-2 bg-zinc-800 text-white text-sm font-medium rounded-md hover:bg-zinc-700"
        >
          <PlusCircle className="h-4 w-4 mr-2" />
          Add New Product
        </Link>
      </div>
      
      {/* Product Table (no changes) */}
      <table className="min-w-full divide-y divide-gray-200">
        {/* ... (table head) ... */}
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map(product => (
            <tr key={product.id}>
              {/* ... (table cells) ... */}
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  product.status === 'Live' ? 'bg-green-100 text-green-800' :
                  product.status === 'Pending Approval' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {product.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${product.price.toFixed(2)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.stock}</td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button className="text-zinc-600 hover:text-zinc-900 mr-4">
                  <Edit className="h-4 w-4" />
                </button>
                <button className="text-red-600 hover:text-red-900">
                  <Trash2 className="h-4 w-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductManagement;