// src/context/AuthContext.tsx

import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
//import { mockProfileData } from '../assets/mockProfile';

const API_URL = 'http://localhost:5001/api/users';

// 1. Update the User interface to be more complete
interface User {
  name: string;
  email: string;
  role: 'Customer' | 'Retailer' | 'Wholesaler' | 'Admin';
  orders: Array<{ // 👈 ADD THIS
    orderId: string;
    date: string;
    total: number;
    status: string;
  }>;
  // ... any other fields
}

interface IAuthContext {
  user: User | null; 
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
  try {
    const cleanedEmail = email.trim();
    const response = await axios.post(`${API_URL}/login`, {
      email: cleanedEmail,     // Correctly sends the user's input email
      password,  // Correctly sends the user's input password
      role: 'Retailer',
    });

    // Extract the token and user object from the successful response
    const { token, user } = response.data;

    // Store the token (needed for secured routes like 'add to cart')
    localStorage.setItem('authToken', token);

    // Update the context state with the real user data
    setUser(user); 
    
    return true; 

  } catch (error) {
    // 1. Check if the error is an Axios error (the most useful kind for APIs)
    if (axios.isAxiosError(error)) {
      // Axios error often has a detailed response object
      console.error('Login failed (Axios Error):', error.response?.data || error.message);
      // You can access error.response.status here if needed
    } 
    // 2. Check if the error is a standard JavaScript Error object
    else if (error instanceof Error) {
      console.error('Login failed (Standard Error):', error.message);
    } 
    // 3. Fallback for any other unknown type
    else {
      console.error('Login failed (Unknown Error):', error);
    }
    
    return false;
  }
};

  const logout = () => {
  setUser(null);
  localStorage.removeItem('authToken'); // CRITICAL: Remove the token!
  // Optional: Redirect user to the login page
};

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};