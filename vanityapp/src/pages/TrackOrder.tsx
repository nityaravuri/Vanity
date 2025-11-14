// src/pages/TrackOrder.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const TrackOrder: React.FC = () => {
  // In a real app, this state would be used
  // const [orderId, setOrderId] = useState('');

  const handleTrack = () => {
    // Logic to track order would go here
    alert('Tracking feature coming soon!');
  };

  return (
    <div className="container mx-auto px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif font-bold text-zinc-800 mb-8">
        Track Your Order
      </h1>
      <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
        <p className="text-gray-600 mb-4">
          Enter your order ID below to see its status in real-time.
        </p>
        <div className="flex">
          <input
            type="text"
            // onChange={(e) => setOrderId(e.target.value)}
            placeholder="Enter Order ID (e.g., ord789)"
            className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-zinc-500 focus:border-zinc-500"
          />
          <button
            onClick={handleTrack}
            className="px-6 py-2 bg-zinc-800 text-white font-medium rounded-r-md hover:bg-zinc-700 transition-colors"
          >
            Track
          </button>
        </div>
        
        <div className="mt-6 text-center">
          <Link 
            to="/profile" 
            className="text-sm text-zinc-600 hover:text-zinc-800"
          >
            &larr; Back to Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;