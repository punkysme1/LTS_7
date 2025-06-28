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
          {/* Tambahkan kelas background dan teks default serta dark mode ke elemen pembungkus utama.
              Ini akan memastikan bahwa seluruh area aplikasi memiliki background dan warna teks yang benar
              berdasarkan tema yang aktif. min-h-screen memastikan div ini setidaknya setinggi layar.
          */}
          <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
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
          </div>
        </HashRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;