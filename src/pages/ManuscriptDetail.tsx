import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ManuscriptDetail = () => {
  const { id } = useParams<{ id: string }>();

  // In a real app, you would fetch this data from Supabase based on the ID
  const manuscript = {
    id: id,
    title: `Manuskrip Contoh ${id}`,
    author: `Pengarang ${id}`,
    inventoryCode: `INV00${id}`,
    digitalCode: `DIGI00${id}`,
    status: 'Baik',
    copyist: 'Penyalin Tidak Dikenal',
    copyYear: 'Abad ke-18',
    pageCount: 150,
    ink: 'Tinta hitam',
    category: 'Sejarah',
    language: 'Jawa Kuno',
    script: 'Kawi',
    size: '30x20 cm',
    description: `Ini adalah deskripsi lengkap untuk manuskrip contoh ${id}. Naskah ini berisi tentang catatan sejarah kerajaan lokal pada masanya.`,
    condition: 'Kondisi fisik naskah masih cukup baik dengan beberapa bercak karena usia. Jilidan asli masih utuh.',
    readability: 'Baik',
    colophon: `Kolofon tidak ditemukan pada naskah ${id}.`,
    gdrivePreviewUrl: `https://placehold.co/600x400/38bdf8/1f2937?text=Preview+Naskah\\n${id}`
  };


  return (
    <div>
        <Link to="/katalog" className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline mb-6">
            <ArrowLeft size={20} />
            Kembali ke Katalog
        </Link>
      <h1 className="text-4xl font-bold mb-2">{manuscript.title}</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">{manuscript.author}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Deskripsi</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{manuscript.description}</p>
                 <img src={manuscript.gdrivePreviewUrl} alt={`Preview for ${manuscript.title}`} className="w-full h-auto object-cover rounded-md mb-4" />
                 <p className="text-sm text-center text-gray-500">Preview Naskah (dari Google Drive)</p>
            </div>
        </div>
        <div className="md:col-span-1 space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Detail Naskah</h2>
                <ul className="space-y-2 text-sm">
                    <li><strong>Kode Inventaris:</strong> {manuscript.inventoryCode}</li>
                    <li><strong>Kode Digital:</strong> {manuscript.digitalCode}</li>
                    <li><strong>Kategori:</strong> {manuscript.category}</li>
                    <li><strong>Bahasa:</strong> {manuscript.language}</li>
                    <li><strong>Aksara:</strong> {manuscript.script}</li>
                    <li><strong>Tahun Penyalinan:</strong> {manuscript.copyYear}</li>
                    <li><strong>Jumlah Halaman:</strong> {manuscript.pageCount}</li>
                    <li><strong>Ukuran:</strong> {manuscript.size}</li>
                    <li><strong>Kondisi:</strong> {manuscript.condition}</li>
                    <li><strong>Keterbacaan:</strong> {manuscript.readability}</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ManuscriptDetail;