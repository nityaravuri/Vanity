// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ProfilePage from './pages/ProfilePage';
import TrackOrderPage from './pages/TrackOrder';
import EditProfilePage from './pages/EditProfilePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ProductListingPage from './pages/ProductListingPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardPage from './pages/DashboardPage';
import AddProductPage from './pages/AddProductPage';


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <NavBar />
      
      <main className="flex-grow">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          
          {/* === THIS IS THE FIX === */}
          <Route path="/register" element={<RegisterPage />} /> 
          {/* ===================== */}
          
          <Route path="/cart" element={<CartPage />} />

          {/* Product Pages */}
          <Route path="/products/:categoryName" element={<ProductListingPage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          
          {/* User-Specific Pages (some are protected) */}
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/edit" element={<EditProfilePage />} />
          <Route path="/track-order" element={<TrackOrderPage />} />
          
          {/* Protected Dashboard Route */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/dashboard/products/new" 
            element={
              <ProtectedRoute>
                <AddProductPage />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;