import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: ['mern-contact-book-production-0efa.up.railway.app'],
  },
})