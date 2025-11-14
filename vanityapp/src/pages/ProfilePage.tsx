// src/pages/ProfilePage.tsx

import React from 'react';
// 1. Import Link
import { Link } from 'react-router-dom'; 
import { User, Phone, Mail, MapPin, Briefcase, Building, History, Edit } from 'lucide-react';
// 2. Import your new mock data
import { mockProfileData } from '../assets/mockProfile';

const ProfilePage: React.FC = () => {
  // 3. Use the imported data
  const mockProfile = mockProfileData; 

  return (
    <div className="container mx-auto px-6 lg:px-8 py-12">
      
      {/* 4. Updated Header with Edit Button */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-serif font-bold text-zinc-800">
          Your Profile
        </h1>
        <Link 
          to="/profile/edit"
          className="inline-flex items-center px-5 py-2 bg-zinc-800 text-white font-medium rounded-md text-sm hover:bg-zinc-700 transition-colors"
        >
          <Edit className="h-4 w-4 mr-2" />
          Edit Profile
        </Link>
      </div>

      <div className="flex">
        {/* === Left Column: Main Details === */}
        <div className="w-2/3 pr-8">
          
          {/* --- Personal & Contact Info --- */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold text-zinc-800 mb-6 flex items-center">
              <User className="h-6 w-6 mr-3 text-zinc-600" />
              Personal & Contact Details
            </h2>
            {/* ... (rest of the fields use mockProfile) ... */}
            <div className="space-y-4">
              <div className="flex"><strong className="w-1/3 text-gray-700">Full Name:</strong><span className="text-gray-600">{mockProfile.name}</span></div>
              <div className="flex"><strong className="w-1/3 text-gray-700">Email Address:</strong><span className="text-gray-600">{mockProfile.email}</span></div>
              <div className="flex"><strong className="w-1/3 text-gray-700">Phone Number:</strong><span className="text-gray-600">{mockProfile.phone}</span></div>
              <div className="flex"><strong className="w-1/3 text-gray-700">Address:</strong><span className="text-gray-600">{mockProfile.address}</span></div>
            </div>
          </div>

          {/* --- Business Info --- */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-zinc-800 mb-6 flex items-center">
              <Briefcase className="h-6 w-6 mr-3 text-zinc-600" />
              Business Details
            </h2>
            <div className="space-y-4">
              <div className="flex"><strong className="w-1/3 text-gray-700">Business Name:</strong><span className="text-gray-600">{mockProfile.businessName}</span></div>
              <div className="flex"><strong className="w-1/3 text-gray-700">Business Category:</strong><span className="text-gray-600">{mockProfile.businessCategory}</span></div>
            </div>
          </div>
        </div>

        {/* === Right Column: Role & Orders === */}
        {/* ... (This section remains the same, just make sure it uses mockProfile) ... */}
        <div className="w-1/3">
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold text-zinc-800 mb-4">Account Role</h2>
            <span className="inline-block px-4 py-2 text-base font-medium bg-zinc-200 text-zinc-800 rounded-full">{mockProfile.role}</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-zinc-800 flex items-center"><History className="h-6 w-6 mr-3 text-zinc-600" />Order History</h2>
              <Link to="/track-order" className="text-sm font-medium text-zinc-600 hover:text-zinc-800 transition-colors">Track an order &rarr;</Link>
            </div>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {mockProfile.orders.map(order => (
                <div key={order.orderId} className="p-4 border rounded-md">
                  <div className="flex justify-between font-semibold text-zinc-700"><span>Order: {order.orderId}</span><span>${order.total.toFixed(2)}</span></div>
                  <div className="flex justify-between text-sm text-gray-600 mt-1"><span>{order.date}</span><span className={`font-medium ${order.status === 'Delivered' ? 'text-green-600' : 'text-yellow-600'}`}>{order.status}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;