// src/pages/OrderDetailPage.tsx

import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { mockRetailerOrders } from '../data/mockRetailerData'; // We'll use this for mock data
import { CheckCircle, Truck, Package } from 'lucide-react';

// --- Mocking a single, detailed order ---
// In a real app, you'd fetch this from '/api/orders/:orderId'
const getMockOrderDetails = (orderId: string) => {
  const summary = mockRetailerOrders.find(o => o.orderId === orderId);
  if (!summary) return null;

  return {
    ...summary,
    shippingAddress: {
      name: summary.customerName,
      line1: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      pincode: '12345',
    },
    items: [
      {
        id: 'p1',
        name: 'Plush Velvet Sofa',
        price: 899.99,
        quantity: 1,
        imageUrl: '/images/products/sofa-1.jpg', // Placeholder image
      }
    ],
    // This history drives the status tracker
    statusHistory: [
      { status: 'Pending', date: '2025-11-15' },
      summary.status === 'Shipped' && { status: 'Shipped', date: '2025-11-16' },
    ].filter(Boolean) as { status: string, date: string }[],
  };
};
// --- End of Mock Data ---


// --- Helper Component: Status Tracker ---
// 



const StatusTracker: React.FC<{ status: string }> = ({ status }) => {
  const statuses = ['Pending', 'Shipped', 'Delivered'];
  const currentStatusIndex = statuses.indexOf(status);

  return (
    <div className="flex items-center justify-between w-full my-8">
      {statuses.map((step, index) => (
        <React.Fragment key={step}>
          <div className="flex flex-col items-center text-center">
            <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
              index <= currentStatusIndex ? 'bg-zinc-800 text-white' : 'bg-gray-200 text-gray-500'
            }`}>
              {index === 0 && <Package className="w-5 h-5" />}
              {index === 1 && <Truck className="w-5 h-5" />}
              {index === 2 && <CheckCircle className="w-5 h-5" />}
            </div>
            <p className={`mt-2 font-medium ${
              index <= currentStatusIndex ? 'text-zinc-800' : 'text-gray-500'
            }`}>
              {step}
            </p>
          </div>
          {index < statuses.length - 1 && (
            <div className={`flex-1 h-1 mx-4 ${
              index < currentStatusIndex ? 'bg-zinc-800' : 'bg-gray-200'
            }`}></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};


// --- Main Page Component ---
const OrderDetailPage: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const [order, setOrder] = useState<ReturnType<typeof getMockOrderDetails>>(null);

  useEffect(() => {
    if (orderId) {
      const data = getMockOrderDetails(orderId);
      setOrder(data);
    }
  }, [orderId]);

  if (!order) {
    return <div>Loading order details...</div>; // Or a "Not Found" message
  }

  return (
    <div className="container mx-auto px-6 lg:px-8 py-12">
      <Link to="/dashboard" className="text-sm text-zinc-600 hover:text-zinc-800">
        &larr; Back to Dashboard
      </Link>
      <h1 className="text-4xl font-serif font-bold text-zinc-800 mt-2">
        Order #{order.orderId}
      </h1>
      <p className="text-lg text-gray-600">
        Placed on: {order.date}
      </p>

      {/* 1. The Status Tracker */}
      <div className="bg-white p-6 rounded-lg shadow-md my-8">
        <StatusTracker status={order.status} />
      </div>

      {/* 2. Order Details */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side: Items */}
        <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Items in this Order</h2>
          {order.items.map(item => (
            <div key={item.id} className="flex items-center py-4 border-b">
              <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
              <div className="ml-4 flex-grow">
                <h3 className="text-lg font-semibold text-zinc-800">{item.name}</h3>
                <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
              </div>
              <p className="text-lg font-medium text-zinc-800">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        {/* Right Side: Shipping & Summary */}
        <div className="w-full lg:w-1/3 space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Shipping Address</h2>
            <p>{order.shippingAddress.name}</p>
            <p>{order.shippingAddress.line1}</p>
            <p>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.pincode}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Order Total</h2>
            <p className="text-3xl font-bold text-zinc-800">${order.total.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailPage;