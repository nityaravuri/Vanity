// src/components/dashboards/CustomerDashboard.tsx

import React from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link
import { useAuth } from '../../context/AuthContext';

const CustomerDashboard: React.FC = () => {
  const { user } = useAuth(); 

  if (!user || !user.orders) {
    return <div>Loading orders...</div>;
  }
  
  const orders = user.orders;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Your Recent Orders</h3>
      <div className="space-y-4">
        {orders.length > 0 ? (
          orders.map(order => (
            // 2. Change the <div> to a <Link>
            <Link
              key={order.orderId}
              to={`/order/${order.orderId}`}
              className="flex justify-between items-center p-4 border rounded-md hover:bg-gray-50 transition-colors"
            >
              <div>
                <p className="font-semibold text-zinc-800">Order #{order.orderId}</p>
                <p className="text-sm text-gray-500">Date: {order.date}</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">${order.total.toFixed(2)}</p>
                <p className={`text-sm text-right font-medium ${
                  order.status === 'Delivered' ? 'text-green-600' : 'text-yellow-600'
                }`}>
                  {order.status}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <p>You have no recent orders.</p>
        )}
      </div>
    </div>
  );
};

export default CustomerDashboard;