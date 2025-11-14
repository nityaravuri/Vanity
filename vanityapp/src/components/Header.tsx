import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User } from 'lucide-react'; // Using lucide-react for clean icons

const Header: React.FC = () => {

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 lg:px-8 py-4 flex justify-between items-center">
        
        {/* === Left Side: Logo === */}
        <div className="flex-shrink-0">
          <Link 
            to="/" 
            className="text-3xl font-bold font-serif text-zinc-800 hover:text-zinc-600 transition-colors duration-200"
          >
            Vanity
          </Link>
        </div>

        {/* === Center: Search Bar === */}
        <div className="flex-1 max-w-lg px-8">
          <div className="relative">
            <input 
              type="search" 
              placeholder="Search for chairs, tables, sofas..."
              className="w-full pl-5 pr-10 py-2 border border-gray-300 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:border-transparent"
            />
            <button className="absolute right-0 top-0 h-full px-4 text-gray-500 hover:text-zinc-800 transition-colors">
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

          {/* --- ADDED REGISTER LINK --- */}
          <Link 
            to="/register" 
            className="text-base text-gray-600 hover:text-zinc-800 font-medium transition-colors duration-200"
          >
            Register
          </Link>
          {/* --- END OF ADDED LINK --- */}

          <Link 
            to="/profile" 
            className="flex items-center text-gray-600 hover:text-zinc-800 transition-colors duration-200"
          >
            <User className="h-6 w-6" />
            <span className="ml-2 text-base font-medium">Profile</span>
          </Link>
        </div>

      </nav>
    </header>
  );
};

export default Header;