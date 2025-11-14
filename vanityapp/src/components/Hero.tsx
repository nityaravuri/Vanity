// src/components/Hero.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react'; // Icon for the button

const Hero: React.FC = () => {
  return (
    <section className="w-full h-[600px] relative">
      {/* Background Image
        We'll use a placeholder from unsplash. 
        Replace this with your own high-quality image.
      */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1974&auto=format&fit=crop')" }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-8 h-full flex flex-col justify-center relative z-10">
        <div className="max-w-xl text-white">
          <h1 className="text-5xl font-serif font-bold mb-4">
            Design Your Dream Space
          </h1>
          <p className="text-lg mb-8">
            Discover our new collection of elegant and modern furniture that 
            will transform your home into a sanctuary of style.
          </p>
          <Link
            to="/products/new-arrivals" // Example link
            className="inline-flex items-center px-8 py-3 bg-white text-zinc-900 font-medium rounded-full text-base hover:bg-gray-200 transition-colors duration-200 group"
          >
            Shop New Arrivals
            <ArrowRight className="h-5 w-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;