import React from 'react';

const Guestbook = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Buku Tamu</h1>
      <form className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6">Silakan tinggalkan pesan, kesan, atau saran Anda untuk kami.</p>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-1">Nama</label>
          <input type="text" id="name" name="name" required className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500" />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium mb-1">Pesan</label>
          <textarea id="message" name="message" rows={5} required className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500"></textarea>
        </div>
        <button type="submit" className="w-full bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors">Kirim Pesan</button>
      </form>
      {/* Display guestbook entries here */}
    </div>
  );
};

export default Guestbook;
