import React from 'react';
import Hero from '../components/Hero';                 // 1. Imports the Hero section
import CategoryShowcase from '../components/CategoryShowcase'; // 2. Imports the Category grid

const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      {/* This is the main Hero section. 
        It's full-width and is the first thing users see.
      */}
      <Hero />
      
      {/* This is the Category Showcase grid. 
        It sits on a white background just below the Hero.
      */}
      <CategoryShowcase />
      
      {/* This is where you can add more sections later, 
        such as "Featured Products".
      */}
    </div>
  );
};

export default HomePage;