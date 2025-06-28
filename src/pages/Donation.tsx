import React from 'react';
import { Heart } from 'lucide-react';

const Donation = () => {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <Heart className="w-16 h-16 text-red-500 mx-auto mb-4" />
      <h1 className="text-3xl font-bold mb-4">Dukung Misi Kami</h1>
      <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
        Dukungan Anda sangat berarti untuk membantu kami terus melestarikan dan mendigitalkan manuskrip berharga ini. Setiap donasi membantu kami dalam upaya penelitian, konservasi, dan pengembangan platform ini.
      </p>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Transfer Donasi</h2>
        <p className="mb-4">Anda dapat mengirimkan donasi melalui transfer bank ke rekening berikut:</p>
        <div className="font-mono text-left p-4 bg-gray-100 dark:bg-gray-700 rounded-md inline-block">
          <p><strong>Bank Central Asia (BCA)</strong></p>
          <p>No. Rekening: <strong className="text-primary-600 dark:text-primary-400">1234567890</strong></p>
          <p>Atas Nama: <strong>Yayasan Manuskrip Sampurnan</strong></p>
        </div>
        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">Setelah melakukan transfer, mohon konfirmasi melalui halaman kontak kami. Terima kasih atas kemurahan hati Anda.</p>
      </div>
    </div>
  );
};

export default Donation;