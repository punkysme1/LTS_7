import React from 'react';
import { Link } from 'react-router-dom';
import { sampleManuscripts, sampleGuestbookEntries } from '../data/sampleData';
import { BookOpen, Search, ShieldCheck, Quote } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-700 dark:text-primary-400">Selamat Datang di Galeri Manuskrip Sampurnan</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Menjelajahi kekayaan naskah kuno dan melestarikan warisan budaya untuk generasi mendatang.</p>
      </div>

      {/* Manuscript Preview Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Cuplikan Katalog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleManuscripts.slice(0, 3).map(ms => (
            <div key={ms.id} className="border p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow bg-white dark:bg-gray-800 dark:border-gray-700 flex flex-col">
              <img src={ms.gdrivePreviewUrl} alt={ms.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">{ms.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">{ms.author}</p>
              <Link to={`/katalog/${ms.id}`} className="mt-4 inline-block text-center bg-primary-500 text-white py-2 px-4 rounded hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 transition-colors w-full">
                Lihat Detail
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
            <Link to="/katalog" className="bg-primary-600 text-white px-8 py-3 rounded-md hover:bg-primary-700 transition-colors font-semibold">
              Lihat Semua Katalog
            </Link>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="bg-gray-100 dark:bg-gray-800/50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-8">Keunggulan Galeri Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                  <div className="bg-primary-100 dark:bg-primary-900/50 p-4 rounded-full mb-4">
                      <BookOpen size={32} className="text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Akses Terbuka</h3>
                  <p className="text-gray-600 dark:text-gray-400">Jelajahi koleksi kami secara bebas dari mana saja, kapan saja, untuk tujuan penelitian dan pendidikan.</p>
              </div>
              <div className="flex flex-col items-center">
                   <div className="bg-primary-100 dark:bg-primary-900/50 p-4 rounded-full mb-4">
                      <Search size={32} className="text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Pencarian Canggih</h3>
                  <p className="text-gray-600 dark:text-gray-400">Temukan manuskrip dengan mudah melalui fitur pencarian detail berdasarkan kata kunci, pengarang, atau kategori.</p>
              </div>
              <div className="flex flex-col items-center">
                   <div className="bg-primary-100 dark:bg-primary-900/50 p-4 rounded-full mb-4">
                      <ShieldCheck size={32} className="text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Pelestarian Digital</h3>
                  <p className="text-gray-600 dark:text-gray-400">Kami menggunakan teknologi terbaik untuk mendigitalkan dan menjaga warisan tak ternilai ini untuk generasi mendatang.</p>
              </div>
          </div>
      </section>

      {/* Testimonials Section */}
      <section>
          <h2 className="text-3xl font-bold text-center mb-8">Apa Kata Mereka?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {sampleGuestbookEntries.map(entry => (
                  <div key={entry.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col">
                      <Quote className="w-8 h-8 text-primary-300 dark:text-primary-700 mb-4" />
                      <p className="text-gray-600 dark:text-gray-300 italic mb-4 flex-grow">"{entry.message}"</p>
                      <p className="font-semibold text-right">- {entry.name}</p>
                  </div>
              ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/buku-tamu" className="border border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 px-8 py-3 rounded-md hover:bg-primary-50 dark:hover:bg-primary-900/50 transition-colors font-semibold">
              Tulis di Buku Tamu
            </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;