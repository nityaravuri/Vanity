// src/pages/LoginPage.tsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // --- Handle Form Submission ---
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to your backend to verify.
    console.log('Logging in with:', { email, password });
    
    // Simulate a successful login
    alert('Login successful! (Simulation)');
    
    // In a real app, you'd save a token and redirect
    // For now, we'll just send them to their profile page.
    navigate('/profile');
  };

  // --- Handle Google Sign-in Simulation ---
  const handleGoogleLogin = () => {
    // In a real app, this would trigger the Google OAuth flow.
    alert('Google Login feature is coming soon!');
  };

  return (
    <div className="container mx-auto px-6 lg:px-8 py-12">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        
        {/* --- Form Title --- */}
        <h1 className="text-3xl font-serif font-bold text-zinc-800 text-center mb-6">
          Log in to Vanity
        </h1>

        {/* --- Login Form --- */}
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

        {/* --- Divider --- */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 flex-shrink text-gray-500">Or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* --- Google Login Button --- */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center px-6 py-3 bg-white border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 hover:bg-gray-50"
        >
          <img 
            className="h-5 w-5 mr-3" 
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
            alt="Google logo"
          />
          Log in with Google
        </button>

        {/* --- Register Link --- */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="font-medium text-zinc-600 hover:text-zinc-800">
              Create an account
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;