// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ProfilePage from './pages/ProfilePage';
import TrackOrder from './pages/TrackOrder';
import EditProfilePage from './pages/EditProfilePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="flex flex-col min-h-screen"> {/* Removed bg-gray-50, we'll let pages control it */}
      
      <Header />
      <NavBar />
      
      {/* This 'main' section should WRAP your Routes.
        It will grow to fill the space between the header and footer.
      */}
      <main className="flex-grow">
        <Routes>
          {/* These routes define ALL your pages.
            Only one will be shown at a time based on the URL.
          */}
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/profile/edit" element={<EditProfilePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          
          {/* Placeholders for product pages */}
          <Route path="/products/sofas" element={<div className="container mx-auto p-8">Showing Sofas</div>} />
          <Route path="/products/tables-chairs" element={<div className="container mx-auto p-8">Showing Tables & Chairs</div>} />
          <Route path="/products/cabinets" element={<div className="container mx-auto p-8">Showing Cabinets</div>} />
          <Route path="/products/carpets" element={<div className="container mx-auto p-8">Showing Carpets</div>} />

        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;