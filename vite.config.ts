
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  base: '/evidence-x/',

  build: {
    outDir: 'dist',
    sourcemap: true,
    assetsDir: 'assets'
  },

  server: {
    port: 5173,
    open: true
  }
});
