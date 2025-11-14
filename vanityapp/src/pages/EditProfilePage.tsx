// src/pages/EditProfilePage.tsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { mockProfileData } from '../assets/mockProfile';

const EditProfilePage: React.FC = () => {
  const navigate = useNavigate();

  // 1. Initialize state from the mock data
  const [formData, setFormData] = useState({
    name: mockProfileData.name,
    phone: mockProfileData.phone,
    email: mockProfileData.email,
    address: mockProfileData.address,
    businessName: mockProfileData.businessName,
    businessCategory: mockProfileData.businessCategory,
  });

  // 2. Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value,
    }));
  };

  // 3. Handle submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // --- SIMULATION ---
    // In a real app, you'd send `formData` to your backend API.
    console.log('Saving updated profile:', formData);
    
    // We'll just show an alert and navigate back to the profile.
    alert('Profile saved successfully!');
    navigate('/profile');
    // --------------------
  };

  return (
    <div className="container mx-auto px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif font-bold text-zinc-800 mb-8">
        Edit Your Profile
      </h1>
      
      <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* --- Personal Section --- */}
          <div>
            <h2 className="text-xl font-semibold text-zinc-800 mb-4">Personal & Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" id="name" value={formData.name} onChange={handleChange} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-zinc-500 focus:border-zinc-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" id="email" value={formData.email} onChange={handleChange} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-zinc-500 focus:border-zinc-500" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="tel" id="phone" value={formData.phone} onChange={handleChange} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-zinc-500 focus:border-zinc-500" />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                <input type="text" id="address" value={formData.address} onChange={handleChange} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-zinc-500 focus:border-zinc-500" />
              </div>
            </div>
          </div>

          {/* --- Business Section --- */}
          <div>
            <h2 className="text-xl font-semibold text-zinc-800 mb-4">Business Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">Business Name</label>
                <input type="text" id="businessName" value={formData.businessName} onChange={handleChange} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-zinc-500 focus:border-zinc-500" />
              </div>
              <div>
                <label htmlFor="businessCategory" className="block text-sm font-medium text-gray-700">Business Category</label>
                <input type="text" id="businessCategory" value={formData.businessCategory} onChange={handleChange} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-zinc-500 focus:border-zinc-500" />
              </div>
            </div>
          </div>
          
          {/* --- Actions --- */}
          <div className="flex justify-end space-x-4 pt-4">
            <Link 
              to="/profile"
              className="px-6 py-2 bg-gray-100 text-gray-700 font-medium rounded-md hover:bg-gray-200"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-6 py-2 bg-zinc-800 text-white font-medium rounded-md hover:bg-zinc-700"
            >
              Save Changes
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default EditProfilePage;