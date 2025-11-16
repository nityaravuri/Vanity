// src/components/dashboards/CustomerDashboard.tsx

import React from 'react';
import { useAuth } from '../../context/AuthContext';
// 1. We no longer need the direct import of mockProfileData
// import { mockProfileData } from '../../assets/mockProfile'; 

const CustomerDashboard: React.FC = () => {
  // 2. This 'user' variable is now used
  const { user } = useAuth(); 

  // 3. Add a loading check
  if (!user || !user.orders) {
    return <div>Loading orders...</div>;
  }
  
  // 4. Get the orders from the dynamic user object
  const orders = user.orders;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Your Recent Orders</h3>
      <div className="space-y-4">
        {orders.length > 0 ? (
          orders.map(order => (
            <div key={order.orderId} className="flex justify-between items-center p-4 border rounded-md">
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
            </div>
          ))
        ) : (
          <p>You have no recent orders.</p>
        )}
      </div>
    </div>
  );
};

export default CustomerDashboard;