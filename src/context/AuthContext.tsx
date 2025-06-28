import React, { createContext, useState, ReactNode, useMemo, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (user: string, pass: string) => Promise<boolean>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // Initialize state from sessionStorage to persist login across reloads in the same session
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('isAuthenticated') === 'true';
  });

  useEffect(() => {
    // Sync state to sessionStorage
    sessionStorage.setItem('isAuthenticated', isAuthenticated.toString());
  }, [isAuthenticated]);

  const login = async (user: string, pass: string): Promise<boolean> => {
    // Dummy authentication logic
    return new Promise(resolve => {
        setTimeout(() => {
            if (user === 'admin' && pass === 'password') {
                setIsAuthenticated(true);
                resolve(true);
            } else {
                setIsAuthenticated(false);
                resolve(false);
            }
        }, 500); // Simulate network delay
    });
  };

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('isAuthenticated');
  };

  const value = useMemo(() => ({
    isAuthenticated,
    login,
    logout,
  }), [isAuthenticated]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};