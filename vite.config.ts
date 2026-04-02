import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1',  // Key fix for dev containers/port forwarding
    port: 5173,          // Default Vite port (adjust if needed)
  }
})
