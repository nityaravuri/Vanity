// src/context/AuthContext.tsx

import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { mockProfileData } from '../assets/mockProfile';

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
  login: () => void;  
  logout: () => void;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = () => {
    // This cast to User will now correctly include 'orders'
    const loggedInUser = mockProfileData as User; 
    setUser(loggedInUser);
    alert(`Logged in as ${loggedInUser.name} (${loggedInUser.role})`);
  };

  const logout = () => {
    setUser(null);
    alert('Logged out.');
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