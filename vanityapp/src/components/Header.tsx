// src/components/Header.tsx

import React from 'react';
// 1. Import useNavigate
import { Link, useNavigate } from 'react-router-dom'; 
// 2. Import LogOut icon
import { Search, User, ShoppingCart, LogOut } from 'lucide-react'; 
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext'; // 3. Import useAuth

const Header: React.FC = () => {
  const { items } = useCart();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  
  // 4. Get the user and logout function
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // 5. Create a logout handler
  const handleLogout = () => {
    logout(); // Call the logout function from context
    navigate('/'); // Redirect to homepage
  };

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 lg:px-8 py-4 flex justify-between items-center">
        
        {/* === Left Side: Logo === */}
        <Link to="/" className="text-3xl font-serif font-bold text-zinc-800">
          Vanity
        </Link>
        
        {/* === Middle: Search Bar === */}
        <div className="w-full max-w-md">
          <div className="relative">
            <input 
              type="search" 
              placeholder="Search for furniture..." 
              className="w-full px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400"
            />
            <button className="absolute right-0 top-0 h-full px-4 text-gray-500 hover:text-zinc-800">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* === Right Side: Navigation & Icons === */}
        <div className="flex items-center space-x-6">
          <Link 
            to="/contact" 
            className="text-base text-gray-600 hover:text-zinc-800 font-medium transition-colors duration-200"
          >
            Contact Us
          </Link>
          
          {/* Cart Icon (always visible) */}
          <Link 
            to="/cart" 
            className="relative text-gray-600 hover:text-zinc-800 transition-colors duration-200"
          >
            <ShoppingCart className="h-6 w-6" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 h-5 w-5 bg-red-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          
          {/* 6. DYNAMIC AUTH SECTION */}
          {user ? (
            // --- USER IS LOGGED IN ---
            <>
              <Link 
                to="/profile" 
                className="flex items-center text-gray-600 hover:text-zinc-800 transition-colors duration-200"
              >
                <User className="h-6 w-6" />
                <span className="ml-2 text-base font-medium">Profile</span>
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center text-gray-600 hover:text-zinc-800 transition-colors duration-200"
              >
                <LogOut className="h-6 w-6" />
                <span className="ml-2 text-base font-medium">Logout</span>
              </button>
            </>
          ) : (
            // --- USER IS LOGGED OUT ---
            <>
              <Link 
                to="/login" 
                className="text-base text-gray-600 hover:text-zinc-800 font-medium transition-colors duration-200"
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="text-base text-gray-600 hover:text-zinc-800 font-medium transition-colors duration-200"
              >
                Register
              </Link>
            </>
          )}
          
        </div>
      </nav>
    </header>
  );
};

export default Header;