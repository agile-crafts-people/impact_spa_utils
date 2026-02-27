import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 9095,
    proxy: {
      '/api': {
        target: 'http://localhost:9094',
        changeOrigin: true
      },
      '/dev-login': {
        target: 'http://localhost:9094',
        changeOrigin: true
      }
    }
  }
})