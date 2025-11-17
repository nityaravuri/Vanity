// src/components/dashboards/OrderManagement.tsx

import React from 'react';
import { mockRetailerOrders } from '../../data/mockRetailerData';
import { Truck } from 'lucide-react';

// In a real app, this would be an API call
// const { orders, setOrders } = useOrders();

const OrderManagement: React.FC = () => {
  const [orders, setOrders] = React.useState(mockRetailerOrders);

  const handleMarkAsShipped = (orderId: string) => {
    // This simulates the API call and updates the local state
    // In a real MERN app:
    // await api.orders.update(orderId, { status: 'Shipped' });
    
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.orderId === orderId ? { ...order, status: 'Shipped' } : order
      )
    );
    alert(`Order ${orderId} marked as shipped!`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Manage Incoming Orders</h3>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {orders.map(order => (
            <tr key={order.orderId}>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">{order.orderId}</td>
              <td className="px-6 py-4 text-sm text-gray-500">{order.customerName}</td>
              <td className="px-6 py-4 text-sm text-gray-500">${order.total.toFixed(2)}</td>
              <td className="px-6 py-4 text-sm">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {order.status}
                </span>
              </td>
              <td className="px-6 py-4 text-right text-sm font-medium">
                {order.status === 'Pending' && (
                  <button
                    onClick={() => handleMarkAsShipped(order.orderId)}
                    className="flex items-center px-3 py-1.5 bg-blue-600 text-white text-xs font-medium rounded-md hover:bg-blue-700"
                  >
                    <Truck className="h-4 w-4 mr-1.5" />
                    Mark as Shipped
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderManagement;