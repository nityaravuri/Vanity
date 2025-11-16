// src/components/dashboards/RetailerDashboard.tsx

import React from 'react';
import { DollarSign, Package, ShoppingBag } from 'lucide-react';
import ProductManagement from './ProductManagement.tsx';
import CustomerQueries from './CustomerQueries.tsx';

// Stat Card Component
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
      {/* 1. Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Sales" value="$4,580.00" icon={<DollarSign />} />
        <StatCard title="Active Listings" value="3" icon={<Package />} />
        <StatCard title="Pending Orders" value="12" icon={<ShoppingBag />} />
      </div>

      {/* 2. Product Management Table */}
      <ProductManagement />
      <CustomerQueries />
    </div>
  );
};

export default RetailerDashboard;