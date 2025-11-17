// src/components/dashboards/WholesaleProductManagement.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle } from 'lucide-react';

const WholesaleProductManagement: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Manage Bulk Catalog</h3>
        <Link
          to="/dashboard/wholesale-products/new"
          className="flex items-center px-4 py-2 bg-zinc-800 text-white text-sm font-medium rounded-md hover:bg-zinc-700"
        >
          <PlusCircle className="h-4 w-4 mr-2" />
          Add New Bulk Product
        </Link>
      </div>
      
      {/* A placeholder for the product list */}
      <div className="text-center py-10 border-2 border-dashed border-gray-200 rounded-md">
        <p className="text-gray-500">
          Your wholesale product list will appear here.
        </p>
      </div>
    </div>
  );
};

export default WholesaleProductManagement;