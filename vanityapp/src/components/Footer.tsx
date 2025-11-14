// src/components/Footer.tsx

import React from 'react';
import { Link } from 'react-router-dom';
// No icons needed

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-800 text-gray-300">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="flex space-x-8">
          
          {/* === Left Side: About Us === */}
          {/* This section now takes up more space */}
          <div className="w-2/3"> 
            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              Vanity
            </h3>
            
            {/* === Your "About Us" content goes here === */}
            <p className="text-sm text-gray-400">
              At Vanity, we believe furniture should be more than functional. 
              It should be an expression of your style, a comfort for your home, 
              and a durable piece of your life. We curate and craft modern pieces 
              that blend elegance with everyday living.
            </p>
            {/* === End "About Us" content === */}
            
          </div>
          
          {/* === Right Side: Quick Links === */}
          <div className="w-1/3">
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/profile" className="hover:text-white transition-colors">
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* === "Follow Us" section completely removed === */}
          
        </div>
      </div>
      
      {/* === Bottom Bar: Copyright === */}
      <div className="bg-zinc-900 py-4">
        <div className="container mx-auto px-6 lg:px-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Vanity. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;