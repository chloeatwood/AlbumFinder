import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
      host: "127.0.0.1", //Forces vite to use 127.0.0.1 instead of localhost since spotify api does not like localhost
      port: 5173
  }
})
