// src/pages/ProductListingPage.tsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import type { Product, ProductCategory } from '../data/types';
import { mockProducts } from '../data/mockProducts';
import ProductCard from '../components/ProductCard';

// Helper function to create a nice title from the URL slug
function formatTitle(slug: string | undefined): string {
  if (!slug) return 'Products';
  if (slug === 'tables-chairs') return 'Tables & Chairs';
  return slug.charAt(0).toUpperCase() + slug.slice(1);
}

const ProductListingPage: React.FC = () => {
  // 1. Get the category name (e.g., "sofas") from the URL
  const { categoryName } = useParams<{ categoryName: ProductCategory }>();

  const [products, setProducts] = useState<Product[]>([]);
  const [title, setTitle] = useState('');

  // 2. This runs when the component loads or the categoryName changes
  useEffect(() => {
    if (categoryName) {
      // In a real app, you'd fetch from an API.
      // We are filtering our mock data instead.
      const filteredProducts = mockProducts.filter(
        (product) => product.category === categoryName
      );
      
      setProducts(filteredProducts);
      setTitle(formatTitle(categoryName));
    }
  }, [categoryName]); // Re-run whenever categoryName changes

  return (
    <div className="container mx-auto px-6 lg:px-8 py-12">
      {/* 3. Display the dynamic title */}
      <h1 className="text-4xl font-serif font-bold text-zinc-800 mb-8">
        {title}
      </h1>

      {/* 4. Display the product grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        // Show a message if no products are found
        <div className="text-center text-gray-600">
          <p>No products found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default ProductListingPage;