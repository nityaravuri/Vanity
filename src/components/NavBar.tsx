// src/components/ProductNavBar.tsx

import React from 'react';
import { NavLink } from 'react-router-dom';

// Define your product categories
const categories = [
  { name: 'Sofas', path: '/products/sofas' },
  { name: 'Tables & Chairs', path: '/products/tables-chairs' },
  { name: 'Cabinets', path: '/products/cabinets' },
  { name: 'Carpets', path: '/products/carpets' },
];

const ProductNavBar: React.FC = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-center items-center space-x-8">
          
          {categories.map((category) => (
            <NavLink
              key={category.name}
              to={category.path}
              className={({ isActive }) =>
                `py-4 px-2 text-base font-medium transition-colors duration-200
                ${
                  isActive
                    ? 'text-zinc-900 border-b-2 border-zinc-900' // Active state
                    : 'text-gray-600 hover:text-zinc-800' // Inactive state
                }`
              }
            >
              {category.name}
            </NavLink>
          ))}

        </div>
      </div>
    </nav>
  );
};

export default ProductNavBar;