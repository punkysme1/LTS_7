import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-gray-600 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Galeri Manuskrip Sampurnan. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
