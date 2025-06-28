import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { useAuth } from '../hooks/useAuth';
import { Sun, Moon, Search, Menu, X, LogOut } from 'lucide-react';

const baseNavLinks = [
  { name: 'Beranda', path: '/' },
  { name: 'Katalog', path: '/katalog' },
  { name: 'Blog', path: '/blog' },
  { name: 'Buku Tamu', path: '/buku-tamu' },
  { name: 'Profil', path: '/profil' },
  { name: 'Kontak', path: '/kontak' },
  { name: 'Donasi', path: '/donasi' },
];

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClasses = "px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors";
  const activeNavLinkClasses = "bg-primary-500 text-white dark:bg-primary-600";
  
  const handleLogout = () => {
    logout();
    navigate('/');
  }

  // Conditionally add Admin link to navigation
  const navLinks = [...baseNavLinks];
  if (isAuthenticated) {
    navLinks.push({ name: 'Admin', path: '/admin' });
  }

  return (
    <header className="bg-white/90 dark:bg-gray-800/90 shadow-sm backdrop-blur-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 text-xl font-bold text-primary-600 dark:text-primary-400">
              Galeri Manuskrip
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`
                  }
                  end={link.path === '/'}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex items-center space-x-2">
                <button
                    onClick={() => { alert("Search functionality not implemented yet."); }}
                    className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none transition-colors"
                    aria-label="Search"
                >
                    <Search size={20} />
                </button>
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none transition-colors"
                    aria-label="Toggle theme"
                >
                    {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </button>
                 {isAuthenticated && (
                   <button onClick={handleLogout} className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none transition-colors" aria-label="Logout">
                     <LogOut size={20} />
                   </button>
                )}
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? activeNavLinkClasses : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`
                }
                end={link.path === '/'}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-center px-4 gap-4">
                  <button
                      onClick={() => { alert("Search functionality not implemented yet."); setIsMenuOpen(false); }}
                      className="flex-1 p-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none flex items-center justify-center gap-2"
                      aria-label="Search"
                  >
                      <Search size={20} /> Search
                  </button>
                  <button
                      onClick={() => { toggleTheme(); setIsMenuOpen(false); }}
                      className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
                      aria-label="Toggle theme"
                  >
                      {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
                  </button>
                  {isAuthenticated && (
                     <button onClick={() => { handleLogout(); setIsMenuOpen(false); }} className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none" aria-label="Logout">
                       <LogOut size={22} />
                     </button>
                  )}
              </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;