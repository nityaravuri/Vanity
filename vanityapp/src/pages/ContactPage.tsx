// src/pages/ContactPage.tsx

import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This is just a simulation
    console.log('Feedback Submitted:', { name, email, message });
    alert('Thank you for your message! We will get back to you soon.');

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container mx-auto px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif font-bold text-zinc-800 text-center mb-10">
        Get in Touch
      </h1>

      <div className="flex bg-white p-8 rounded-lg shadow-md">
        
        {/* === Left Side: Contact Info === */}
        <div className="w-1/2 pr-8 border-r border-gray-200">
          <h2 className="text-2xl font-semibold text-zinc-800 mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center text-gray-700">
              <Mail className="h-5 w-5 mr-3 text-zinc-600" />
              <span>support@vanity.com</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Phone className="h-5 w-5 mr-3 text-zinc-600" />
              <span>(123) 456-7890</span>
            </div>
            <div className="flex items-start text-gray-700">
              <MapPin className="h-5 w-5 mr-3 text-zinc-600 flex-shrink-0 mt-1" />
              <span>123 Design Street, Suite 400<br />Furniture City, FS 54321</span>
            </div>
          </div>
        </div>

        {/* === Right Side: Feedback Form === */}
        <div className="w-1/2 pl-8">
          <h2 className="text-2xl font-semibold text-zinc-800 mb-4">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-zinc-500 focus:border-zinc-500"
              />
            </div>
            {/* ... (email and message fields) ... */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-zinc-500 focus:border-zinc-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-zinc-500 focus:border-zinc-500"
                placeholder="How can we help you?"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-zinc-800 text-white font-medium rounded-md text-base hover:bg-zinc-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
