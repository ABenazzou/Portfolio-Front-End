import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
    }
  },
  server: {
    proxy: {
      '/api' : {
        target: 'https://portfolio.abenazzou.com/',
        changeOrigin: true,
      }
    }
  }
})
