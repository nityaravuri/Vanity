// src/pages/DashboardPage.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut } from 'lucide-react';

// 1. Import all your REAL dashboard components
import RetailerDashboard from '../components/dashboards/RetailerDashboard';
import CustomerDashboard from '../components/dashboards/CustomerDashboard';
import AdminDashboard from '../components/dashboards/AdminDashboard';
import WholesalerDashboard from '../components/dashboards/WholesalerDashboard'; // <-- Import the new one

// 2. All placeholders are now gone.

// --- The Main Page Component ---
const DashboardPage: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // 3. This switch now renders all 4 real components
  const renderDashboard = () => {
    switch (user?.role) {
      case 'Customer':
        return <CustomerDashboard />;
      case 'Retailer':
        return <RetailerDashboard />;
      case 'Wholesaler':
        return <WholesalerDashboard />; // <-- Now rendering your real component
      case 'Admin':
        return <AdminDashboard />;
      default:
        return <p>Unable to load dashboard.</p>;
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/'); 
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-serif font-bold text-zinc-800">
            Welcome, {user.name}
          </h1>
          <p className="text-lg text-gray-600">Your {user.role} Dashboard</p>
        </div>
        <button
          onClick={handleLogout}
          className="inline-flex items-center px-5 py-2 bg-zinc-700 text-white font-medium rounded-md text-sm hover:bg-zinc-600 transition-colors"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Log Out
        </button>
      </div>

      {renderDashboard()}
    </div>
  );
};

export default DashboardPage;