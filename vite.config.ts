import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: { port: 4011 },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
