import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';

import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';

import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ManuscriptDetail from './pages/ManuscriptDetail';
import Blog from './pages/Blog';
import BlogPostDetail from './pages/BlogPostDetail';
import Guestbook from './pages/Guestbook';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Donation from './pages/Donation';
import Admin from './pages/Admin';
import Login from './pages/Login';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <HashRouter>
          <Layout>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/katalog" element={<Catalog />} />
              <Route path="/katalog/:id" element={<ManuscriptDetail />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPostDetail />} />
              <Route path="/buku-tamu" element={<Guestbook />} />
              <Route path="/profil" element={<Profile />} />
              <Route path="/kontak" element={<Contact />} />
              <Route path="/donasi" element={<Donation />} />
              <Route path="/login" element={<Login />} />

              {/* Protected Admin Route */}
              <Route 
                path="/admin" 
                element={
                  <ProtectedRoute>
                    <Admin />
                  </ProtectedRoute>
                } 
              />
            </Routes>
          </Layout>
        </HashRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;