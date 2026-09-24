import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  preview: {
    host: '0.0.0.0',
    port: 8080,
    allowedHosts: ['magnificent-reprieve-production-316c.up.railway.app'],
  },
})