import path from 'node:path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@tiendanube': path.resolve(__dirname, './src/tiendanube/packages'),
      '@internal': path.resolve(__dirname, './src/tiendanube/internal'),
    }
  }
})
