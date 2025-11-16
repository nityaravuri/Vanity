// src/components/dashboards/CustomerQueries.tsx

import React from 'react'; // <-- THIS LINE IS ESSENTIAL
import { mockCustomerQueries } from '../../data/mockRetailerData';
import { MessageSquare } from 'lucide-react';

const CustomerQueries: React.FC = () => {
  const queries = mockCustomerQueries;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <MessageSquare className="h-5 w-5 mr-3 text-zinc-600" />
        Customer Queries
      </h3>
      <div className="space-y-4">
        {queries.map(query => (
          <div key={query.id} className="border p-4 rounded-md">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
                  query.status === 'New' ? 'bg-blue-100 text-blue-800' :
                  query.status === 'Read' ? 'bg-gray-100 text-gray-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {query.status}
                </span>
                <span className="font-semibold">{query.customerName}</span>
                <span className="text-sm text-gray-500">re: {query.productName}</span>
              </div>
              <span className="text-sm text-gray-500">{query.date}</span>
            </div>
            <p className="text-gray-700 mb-3">
              {query.query}
            </p>
            <button className="px-4 py-1.5 bg-zinc-100 text-zinc-700 text-sm font-medium rounded-md hover:bg-zinc-200">
              Reply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerQueries;