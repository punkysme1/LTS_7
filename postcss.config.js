// postcss.config.js
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss, // Ini akan menambahkan plugin Tailwind CSS
    autoprefixer, // Ini akan menambahkan plugin Autoprefixer
  ],
};