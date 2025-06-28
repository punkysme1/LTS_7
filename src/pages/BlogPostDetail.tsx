import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BlogPostDetail = () => {
  const { id } = useParams<{ id: string }>();

  // Fetch full blog post data based on id
  const post = {
    id: 1,
    title: "Menyingkap Misteri Naskah Kuno",
    author: "Admin",
    date: "15 Juli 2024",
    content: "<p>Ini adalah konten lengkap dari postingan blog. Di sini kita akan membahas secara mendalam tentang proses penemuan naskah, tantangan yang dihadapi, dan temuan-temuan menarik yang terungkap.</p><p>Setiap goresan tinta pada daun lontar ini menceritakan kisah peradaban yang agung. Kami menggunakan teknik pencitraan multispektral untuk membaca bagian-bagian yang telah pudar dimakan waktu.</p>",
    imageUrl: "https://placehold.co/800x400/f9a8d4/1f2937?text=Blog+Post+1"
  };

  return (
    <div>
        <Link to="/blog" className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline mb-6">
            <ArrowLeft size={20} />
            Kembali ke Blog
        </Link>
      <article className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        <p className="text-md text-gray-500 dark:text-gray-400 mb-6">{post.author} - {post.date}</p>
        <img src={post.imageUrl} alt={post.title} className="w-full h-auto max-h-96 object-cover rounded-md mb-6" />
        <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      
        <div className="mt-12 border-t pt-8">
            <h2 className="text-2xl font-semibold mb-4">Komentar</h2>
            {/* Comment Section Placeholder */}
            <form className="mt-6">
                <label htmlFor="comment" className="block text-sm font-medium mb-1">Tinggalkan Komentar</label>
                <textarea id="comment" rows={4} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 mb-2" placeholder="Tulis komentar Anda..."></textarea>
                <button type="submit" className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700">Kirim</button>
            </form>
            {/* Display existing comments here */}
        </div>
      </article>
    </div>
  );
};

export default BlogPostDetail;
