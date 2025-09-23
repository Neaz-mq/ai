import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'   // if using React plugin
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  // other config if needed
})
