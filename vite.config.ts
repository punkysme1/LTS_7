import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Pastikan base path adalah root. Jika deploy ke subfolder, misal 'my-app', gunakan '/my-app/'
  build: {
    outDir: 'dist', // Direktori output build
  },
});