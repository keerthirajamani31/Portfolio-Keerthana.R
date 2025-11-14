import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  // Remove the base path or set it to empty
  base: '/',
  server: {
    host: true,
    port: 5173
  }
})