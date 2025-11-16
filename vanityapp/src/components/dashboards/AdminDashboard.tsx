// src/components/dashboards/AdminDashboard.tsx

import React from 'react';
// We'll use the same retailer data for this mock,
// but in a real app, this would be an API call for ALL pending products.
import { mockRetailerProducts } from '../../data/mockRetailerData';
import { Check, X } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  
  // 1. Filter the mock data to find only "Pending Approval" products
  const pendingProducts = mockRetailerProducts.filter(
    (product) => product.status === 'Pending Approval'
  );

  return (
    <div className="space-y-8">
      {/* 1. Product Approval Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Pending Product Approvals</h3>
        {pendingProducts.length > 0 ? (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Retailer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {pendingProducts.map(product => (
                <tr key={product.id}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{product.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Jane Doe (Retailer)</td>
                  <td className="px-6 py-4 text-sm text-gray-500">${product.price.toFixed(2)}</td>
                  <td className="px-6 py-4 text-right text-sm font-medium space-x-2">
                    <button className="p-2 bg-green-100 text-green-700 rounded-full hover:bg-green-200">
                      <Check className="h-4 w-4" />
                    </button>
                    <button className="p-2 bg-red-100 text-red-700 rounded-full hover:bg-red-200">
                      <X className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No products are currently pending approval.</p>
        )}
      </div>
      
      {/* 2. User Management (Placeholder) */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">User Management</h3>
        <p>A list of all users (Customers, Retailers, Wholesalers) would go here...</p>
      </div>
    </div>
  );
};

export default AdminDashboard;