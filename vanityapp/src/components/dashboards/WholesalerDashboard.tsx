// src/components/dashboards/WholesalerDashboard.tsx

import React from 'react';
import { mockBulkOrders } from '../../data/mockWholesalerData';
import { Truck, CheckCircle } from 'lucide-react';

const WholesalerDashboard: React.FC = () => {
  const orders = mockBulkOrders;

  return (
    <div className="space-y-8">
      {/* 1. Bulk Order Management */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Incoming Bulk Orders</h3>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Retailer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map(order => (
              <tr key={order.id}>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{order.id}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{order.retailerName}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{order.date}</td>
                <td className="px-6 py-4 text-sm text-gray-500">${order.total.toFixed(2)}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                    order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right text-sm font-medium space-x-2">
                  {order.status === 'Pending' && (
                    <button className="p-2 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200" title="Mark as Shipped">
                      <Truck className="h-4 w-4" />
                    </button>
                  )}
                  {order.status === 'Shipped' && (
                    <button className="p-2 bg-green-100 text-green-700 rounded-full hover:bg-green-200" title="Mark as Delivered">
                      <CheckCircle className="h-4 w-4" />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 2. Bulk Product Catalog (Placeholder) */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Manage Bulk Catalog</h3>
        <p>A list of your products available for bulk purchase would go here...</p>
      </div>
    </div>
  );
};

export default WholesalerDashboard;