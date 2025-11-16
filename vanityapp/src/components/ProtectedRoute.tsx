// src/components/ProtectedRoute.tsx

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import type { ReactNode } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    // User is not logged in, redirect them to the login page
    return <Navigate to="/login" replace />;
  }

  // User is logged in, show them the page they asked for
  return <>{children}</>;
};

export default ProtectedRoute;