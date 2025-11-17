// src/pages/CheckoutPage.tsx

import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';

const CheckoutPage: React.FC = () => {
  const { items } = useCart();
  const navigate = useNavigate();

  // Calculate totals from the cart
  const subtotal = items.reduce((sum, item) => 
    sum + (item.product.price * item.quantity), 0);
  const shipping = subtotal > 500 ? 0.00 : 49.99;
  const total = subtotal + shipping;

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    // In a REAL app, you would:
    // 1. Get the Stripe token from the 'PaymentElement'
    // 2. Send the token and cart data to your backend API
    // 3. await api.orders.create({ ... });
    
    alert('Simulating payment... Order placed!');
    // In a real app, you would also clear the cart here
    // clearCart();
    navigate('/dashboard'); // Send them to their dashboard
  };

  return (
    <div className="container mx-auto px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif font-bold text-zinc-800 mb-8">
        Checkout
      </h1>
      
      <div className="flex flex-col lg:flex-row-reverse gap-12">
        
        {/* === Right Side: Order Summary === */}
        <div className="w-full lg:w-1/3">
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
            <h2 className="text-2xl font-semibold text-zinc-800 mb-6">
              Your Order
            </h2>
            <div className="space-y-4 max-h-64 overflow-y-auto mb-4 border-b pb-4">
              {items.map(item => (
                <div key={item.product.id} className="flex items-center gap-4">
                  <img src={item.product.imageUrl} alt={item.product.name} className="w-16 h-16 object-cover rounded-md" />
                  <div className="flex-grow">
                    <h3 className="text-sm font-medium text-zinc-800">{item.product.name}</h3>
                    <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <p className="text-sm font-medium text-zinc-800">${(item.product.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
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
          </div>
        </div>

        {/* === Left Side: Shipping & Payment === */}
        <div className="w-full lg:w-2/3">
          <form onSubmit={handlePayment} className="space-y-8">
            
            {/* 1. Shipping Information */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-zinc-800 mb-6">
                Shipping Address
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                  <input type="text" id="firstName" className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input type="text" id="lastName" className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md" required />
                </div>
                <div className="col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address Line 1</label>
                  <input type="text" id="address" className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md" required />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                  <input type="text" id="city" className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md" required />
                </div>
                <div>
                  <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">Pincode</label>
                  <input type="text" id="pincode" className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md" required />
                </div>
              </div>
            </div>

            {/* 2. Payment Information */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-zinc-800 mb-6">
                Payment Details
              </h2>
              
              {/* === THIS IS THE STRIPE PLACEHOLDER === */}
              <div id="payment-element-placeholder" className="bg-gray-100 p-8 rounded-md border border-gray-200 text-center">
                <p className="text-gray-500">This is where the secure Stripe.js payment element would be mounted.</p>
                <p className="text-sm text-gray-400 mt-2">Your backend will create a "Payment Intent", send a client secret to this page, and this element will use it to render a secure form.</p>
              </div>
              {/* === END OF PLACEHOLDER === */}
              
              <button
                type="submit"
                className="w-full mt-6 px-6 py-3 bg-zinc-800 text-white font-medium rounded-md text-base hover:bg-zinc-700 transition-colors flex items-center justify-center"
              >
                <Lock className="h-4 w-4 mr-2" />
                Pay ${total.toFixed(2)}
              </button>
            </div>
            
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default CheckoutPage;