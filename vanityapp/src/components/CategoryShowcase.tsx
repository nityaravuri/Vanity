// src/components/CategoryShowcase.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// --- Data for your categories ---
// Using the same paths as your NavBar for consistency.
const categories = [
  {
    name: 'Sofas',
    path: '/products/sofas',
    // Replace with your high-quality images
    imageUrl: 'https://images.unsplash.com/photo-1540574163026-643ea20ADE25?q=80&w=1740&auto=format&fit=crop',
  },
  {
    name: 'Tables & Chairs',
    path: '/products/tables-chairs',
    imageUrl: 'https://images.unsplash.com/photo-1519947486511-061cbb53c7c2?q=80&w=1740&auto=format&fit=crop',
  },
  {
    name: 'Cabinets',
    path: '/products/cabinets',
    imageUrl: 'https://images.unsplash.com/photo-1588725171738-9eb4b38d313c?q=80&w=1740&auto=format&fit=crop',
  },
  {
    name: 'Carpets',
    path: '/products/carpets',
    imageUrl: 'https://images.unsplash.com/photo-1594894677239-e938f38f710a?q=80&w=1740&auto=format&fit=crop',
  },
];

const CategoryShowcase: React.FC = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif font-bold text-zinc-800">
            Shop by Category
          </h2>
          <p className="text-base text-gray-600 mt-2">
            Find the perfect pieces to complete your space.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.name} 
              to={category.path} 
              className="group relative h-96 overflow-hidden rounded-lg shadow-lg"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${category.imageUrl})` }}
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black opacity-40 transition-opacity duration-300 group-hover:opacity-50" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {category.name}
                </h3>
                <div className="flex items-center text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Shop Now
                  <ArrowRight className="h-5 w-5 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default CategoryShowcase;