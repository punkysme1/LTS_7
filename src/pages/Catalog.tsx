import React from 'react';
import { Link } from 'react-router-dom';
import { sampleManuscripts } from '../data/sampleData';

const Catalog = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Katalog Manuskrip</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleManuscripts.map(ms => (
          <div key={ms.id} className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 dark:border-gray-700 flex flex-col">
            <img src={ms.gdrivePreviewUrl} alt={ms.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold mb-2">{ms.title}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{ms.author}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 flex-grow">{ms.description}</p>
            <Link to={`/katalog/${ms.id}`} className="mt-4 inline-block text-center bg-primary-500 text-white py-2 px-4 rounded hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 transition-colors w-full">
              Lihat Detail
            </Link>
          </div>
        ))}
      </div>
       {/* Pagination would go here */}
    </div>
  );
};

export default Catalog;