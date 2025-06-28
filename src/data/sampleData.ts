import type { Manuscript, GuestbookEntry } from '../types';

// Sample manuscript data
export const sampleManuscripts: Manuscript[] = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: `Manuskrip Contoh ${i + 1}`,
    author: `Pengarang ${i + 1}`,
    inventoryCode: `INV00${i + 1}`,
    digitalCode: `DIGI00${i + 1}`,
    status: 'Baik',
    copyist: 'Penyalin Tidak Dikenal',
    copyYear: `Abad ke-${18 - i}`,
    pageCount: 150 + i * 10,
    ink: 'Tinta hitam',
    category: 'Sejarah',
    language: 'Jawa Kuno',
    script: 'Kawi',
    size: '30x20 cm',
    description: `Ini adalah deskripsi singkat untuk manuskrip contoh ${i + 1}.`,
    condition: 'Kondisi fisik naskah masih cukup baik dengan beberapa bercak.',
    readability: 'Baik',
    colophon: `Kolofon tidak ditemukan pada naskah ${i + 1}.`,
    gdrivePreviewUrl: `https://placehold.co/400x300/a3e635/1f2937?text=Manuskrip\\n${i+1}`
}));

// Sample guestbook data for homepage testimonials
export const sampleGuestbookEntries: GuestbookEntry[] = [
    {
        id: 1,
        name: 'Dr. Anisa Rahmawati',
        date: '20 Juli 2024',
        message: 'Platform ini adalah sumber daya yang luar biasa bagi para peneliti seperti saya. Akses mudah ke manuskrip digital sangat membantu pekerjaan saya. Terima kasih!'
    },
    {
        id: 2,
        name: 'Budi Santoso',
        date: '18 Juli 2024',
        message: 'Sebagai seorang mahasiswa sejarah, saya sangat terkesan dengan koleksi yang tersedia. Sangat mudah untuk dijelajahi dan dipelajari. Teruslah berkarya!'
    }
];