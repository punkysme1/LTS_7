
export interface Manuscript {
  id: number;
  title: string;
  author: string;
  inventoryCode: string;
  digitalCode: string;
  status: 'Baik' | 'Rusak Sebagian' | 'Rusak Berat';
  copyist: string;
  copyYear: string; // Can be a range or century
  pageCount: number;
  ink: string;
  category: string;
  language: string;
  script: string;
  size: string;
  description: string;
  condition: string;
  readability: 'Baik' | 'Sulit' | 'Tidak Terbaca';
  colophon: string;
  gdrivePreviewUrl: string;
}

export interface Comment {
    id: number;
    author: string;
    date: string;
    text: string;
}

export interface BlogPost {
    id: number;
    title: string;
    author: string;
    date: string;
    content: string;
    excerpt: string;
    imageUrl: string;
    comments: Comment[];
}

export interface GuestbookEntry {
    id: number;
    name: string;
    date: string;
    message: string;
}