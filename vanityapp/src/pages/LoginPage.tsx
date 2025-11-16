// src/pages/LoginPage.tsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // 1. Import useAuth

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  // 2. Get the login function from the context
  const { login } = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 3. Call the login function
    // (We're not using email/password for this simulation, but we would in a real app)
    login();
    
    // 4. Send the user to their new dashboard
    navigate('/dashboard');
  };

  // ... (rest of your component is the same)
  return (
    <div className="container mx-auto px-6 lg:px-8 py-12">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        
        <h1 className="text-3xl font-serif font-bold text-zinc-800 text-center mb-6">
          Log in to Vanity
        </h1>

        {/* 4. Make sure your form calls handleLogin */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-zinc-500 focus:border-zinc-500" 
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-zinc-500 focus:border-zinc-500" 
            />
          </div>
          
          <div className="text-right">
            <a href="#" className="text-sm font-medium text-zinc-600 hover:text-zinc-800">
              Forgot your password?
            </a>
          </div>
          
          <div>
            <button 
              type="submit" 
              className="w-full px-6 py-3 bg-zinc-800 text-white font-medium rounded-md text-base hover:bg-zinc-700 transition-colors"
            >
              Log In
            </button>
          </div>
        </form>
        
        {/* ... (rest of the page: Google login, Register link) ... */}
        
      </div>
    </div>
  );
};

export default LoginPage;