// src/components/dashboards/RetailerDashboard.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Package, ShoppingBag, Store } from 'lucide-react'; // All 4 are used now
import FinanceDashboard from './FinanceDashboard.tsx';
import OrderManagement from './OrderManagement.tsx';
import ProductManagement from './ProductManagement.tsx';
import CustomerQueries from './CustomerQueries.tsx';

const StatCard: React.FC<{ title: string, value: string, icon: React.ReactNode }> = ({ title, value, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
    <div className="p-3 bg-zinc-100 rounded-full text-zinc-600">
      {icon}
    </div>
    <div className="ml-4">
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <p className="text-2xl font-semibold text-gray-900">{value}</p>
    </div>
  </div>
);

const RetailerDashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      
      {/* 1. Stat Cards & New B2B Button */}
      <div className="flex justify-between items-start">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          {/* These now correctly use the icons */}
          <StatCard title="Total Sales" value="$4,580.00" icon={<DollarSign />} />
          <StatCard title="Active Listings" value="3" icon={<Package />} />
          <StatCard title="Pending Orders" value="2" icon={<ShoppingBag />} />
        </div>
        
        <Link 
          to="/wholesale-marketplace"
          className="flex-shrink-0 ml-8 flex flex-col items-center justify-center h-28 w-40 bg-blue-700 text-white p-4 rounded-lg shadow-md hover:bg-blue-800 transition-colors"
        >
          <Store className="h-8 w-8 mb-2" />
          <span className="font-semibold text-center">Browse Wholesale Marketplace</span>
        </Link>
      </div>

      {/* 2. Finance */}
      <FinanceDashboard />
      
      {/* 3. Order Management */}
      <OrderManagement />
      
      {/* 4. Product Management */}
      <ProductManagement />
      
      {/* 5. Customer Queries */}
      <CustomerQueries />
    </div>
  );
};

export default RetailerDashboard;