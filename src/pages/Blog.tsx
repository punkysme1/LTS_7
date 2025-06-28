import React from 'react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '../types';

const samplePosts: Omit<BlogPost, 'comments' | 'content'>[] = [
    {
        id: 1,
        title: "Menyingkap Misteri Naskah Kuno",
        author: "Admin",
        date: "15 Juli 2024",
        excerpt: "Bergabunglah dengan kami saat kami memulai perjalanan untuk mengungkap rahasia yang tersembunyi di dalam halaman rapuh manuskrip kuno...",
        imageUrl: "https://placehold.co/400x250/f9a8d4/1f2937?text=Blog+Post+1"
    },
    {
        id: 2,
        title: "Teknik Digitalisasi Manuskrip",
        author: "Tim Digital",
        date: "10 Juli 2024",
        excerpt: "Pelajari tentang proses dan teknologi canggih yang kami gunakan untuk melestarikan dan mendigitalkan artefak yang tak ternilai ini untuk generasi mendatang.",
        imageUrl: "https://placehold.co/400x250/fde047/1f2937?text=Blog+Post+2"
    }
];

const Blog = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Blog</h1>
            <div className="space-y-8">
                {samplePosts.map(post => (
                    <div key={post.id} className="flex flex-col md:flex-row gap-6 p-4 border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 shadow-md">
                        <img src={post.imageUrl} alt={post.title} className="w-full md:w-1/3 h-48 object-cover rounded-md" />
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.author} - {post.date}</p>
                            <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">{post.excerpt}</p>
                            <Link to={`/blog/${post.id}`} className="text-primary-600 dark:text-primary-400 hover:underline font-semibold mt-auto self-start">
                                Baca Selengkapnya &rarr;
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;