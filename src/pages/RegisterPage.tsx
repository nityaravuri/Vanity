// src/pages/RegisterPage.tsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage: React.FC = () => {
  // State for the form inputs
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer'); // Default role
  
  // State for the OTP simulation
  const [formStep, setFormStep] = useState(1); // 1 = Details, 2 = OTP
  const [otp, setOtp] = useState('');
  
  const navigate = useNavigate();

  // --- Step 1: Handle the details form submission ---
  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd call your API here to send the OTP.
    console.log('Registering user:', { firstName, lastName, phone, email, password, role });
    
    // Simulate sending OTP and move to next step
    alert(`Simulating OTP send to ${phone}...`);
    setFormStep(2);
  };

  // --- Step 2: Handle the OTP verification ---
  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd verify the OTP with your backend.
    console.log(`Verifying OTP: ${otp}`);
    
    // Simulate successful registration
    alert('Registration successful! You can now log in.');
    navigate('/login'); // Send them to the login page
  };

  // --- Handle Google Sign-up Simulation ---
  const handleGoogleSignup = () => {
    // In a real app, this would trigger the Google OAuth flow.
    alert('Google Sign-up feature is coming soon!');
  };

  return (
    <div className="container mx-auto px-6 lg:px-8 py-12">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
        
        {/* --- Form Title --- */}
        <h1 className="text-3xl font-serif font-bold text-zinc-800 text-center mb-6">
          Create Your Account
        </h1>

        {/* --- Step 1: Details Form --- */}
        {formStep === 1 && (
          <form onSubmit={handleDetailsSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-zinc-500 focus:border-zinc-500" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-zinc-500 focus:border-zinc-500" />
              </div>
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required placeholder="For OTP verification" className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-zinc-500 focus:border-zinc-500" />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-zinc-500 focus:border-zinc-500" />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-zinc-500 focus:border-zinc-500" />
            </div>
            
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">Register as a</label>
              <select id="role" value={role} onChange={(e) => setRole(e.target.value)} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-zinc-500 focus:border-zinc-500">
                <option value="customer">Customer</option>
                <option value="retailer">Retailer</option>
                <option value="wholesaler">Wholesaler</option>
              </select>
            </div>
            
            <div>
              <button type="submit" className="w-full px-6 py-3 bg-zinc-800 text-white font-medium rounded-md text-base hover:bg-zinc-700 transition-colors">
                Register
              </button>
            </div>
          </form>
        )}

        {/* --- Step 2: OTP Form --- */}
        {formStep === 2 && (
          <form onSubmit={handleOtpSubmit} className="space-y-4">
            <p className="text-center text-gray-600">
              An OTP has been sent to <strong>{phone}</strong>. 
              Please enter it below.
            </p>
            <div>
              <label htmlFor="otp" className="block text-sm font-medium text-gray-700">Enter OTP</label>
              <input type="text" id="otp" value={otp} onChange={(e) => setOtp(e.target.value)} required className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-zinc-500 focus:border-zinc-500" />
            </div>
            <div>
              <button type="submit" className="w-full px-6 py-3 bg-zinc-800 text-white font-medium rounded-md text-base hover:bg-zinc-700 transition-colors">
                Verify & Create Account
              </button>
            </div>
            <button 
              type="button" 
              onClick={() => setFormStep(1)} 
              className="w-full text-sm text-zinc-600 hover:text-zinc-800"
            >
              &larr; Back to details
            </button>
          </form>
        )}

        {/* --- Divider --- */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 flex-shrink text-gray-500">Or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* --- Google Sign-up Button --- */}
        <button
          onClick={handleGoogleSignup}
          className="w-full flex items-center justify-center px-6 py-3 bg-white border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 hover:bg-gray-50"
        >
          <img 
            className="h-5 w-5 mr-3" 
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
            alt="Google logo"
          />
          Sign up with Google
        </button>

        {/* --- Login Link --- */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-zinc-600 hover:text-zinc-800">
              Log in
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default RegisterPage;