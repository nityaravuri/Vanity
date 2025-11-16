// src/pages/CartPage.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import type { CartItem } from '../context/CartContext';
import { Trash2, Plus, Minus } from 'lucide-react'; // 1. Import Plus and Minus

// --- Helper component (This is where the changes happen) ---
const CartItemRow: React.FC<{ item: CartItem }> = ({ item }) => {
  // 2. Get both functions from the hook
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div className="flex items-center py-4 border-b">
      <img 
        src={item.product.imageUrl} 
        alt={item.product.name} 
        className="w-24 h-24 object-cover rounded-md"
      />
      <div className="ml-4 flex-grow">
        <h3 className="text-lg font-semibold text-zinc-800">{item.product.name}</h3>
        
        {/* 3. Add the quantity controls */}
        <div className="flex items-center mt-2">
          <button 
            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
            className="p-1 border rounded-md text-gray-600 hover:bg-gray-100"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="mx-3 font-medium text-base">
            {item.quantity}
          </span>
          <button 
            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
            className="p-1 border rounded-md text-gray-600 hover:bg-gray-100"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
        
      </div>
      <div className="text-right">
        <p className="text-lg font-medium text-zinc-800">
          ${(item.product.price * item.quantity).toFixed(2)}
        </p>
        
        {/* 4. Fix typo (Id -> id) and wire up the remove button */}
        <button 
          onClick={() => removeFromCart(item.product.id)}
          className="text-sm text-red-600 hover:text-red-800 mt-2"
        >
          <Trash2 className="h-4 w-4 inline-block mr-1" />
          Remove
        </button>
      </div>
    </div>
  );
};

// --- Main Cart Page Component (No changes needed) ---
// ... (The rest of your CartPage.tsx file remains exactly the same)
const CartPage: React.FC = () => {
  const { items } = useCart(); 

  const subtotal = items.reduce((sum, item) => 
    sum + (item.product.price * item.quantity), 0);
  
  const shipping = subtotal > 500 ? 0.00 : 49.99;
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif font-bold text-zinc-800 mb-8">
        Your Shopping Cart
      </h1>
      
      {items.length === 0 ? (
        // ... (Empty cart JSX)
        <div className="text-center py-20 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
          <Link to="/" className="px-6 py-2 bg-zinc-800 text-white font-medium rounded-md hover:bg-zinc-700 transition-colors">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-zinc-800 mb-4">
              Items ({items.length})
            </h2>
            <div className="space-y-4">
              {items.map(item => (
                <CartItemRow key={item.product.id} item={item} />
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/3">
            {/* ... (Order Summary JSX) ... */}
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
              <h2 className="text-2xl font-semibold text-zinc-800 mb-6">
                Order Summary
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between text-base">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium text-zinc-800">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium text-zinc-800">
                    {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
              </div>
              <div className="border-t my-4"></div>
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className="w-full mt-6 px-6 py-3 bg-zinc-800 text-white font-medium rounded-md text-base hover:bg-zinc-700 transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;