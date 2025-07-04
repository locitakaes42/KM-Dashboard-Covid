// locitakaes42/km-dashboard-covid/KM-Dashboard-Covid-9a335753b8924185e55f86bda86eb3ff78072743/vite.config.js
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  optimizeDeps: {
    include: ['bootstrap'], // Ini membantu Vite memahami bootstrap di awal (saat dev)
                            // terkadang membantu di build juga
  },
  build: {
    rollupOptions: {
      // Tambahkan konfigurasi eksternal jika Anda TIDAK ingin Bootstrap dibundel ke dalam JS Anda
      // dan Anda akan menyediakannya secara global melalui tag <script> di index.html.
      // Jika Anda ingin Bootstrap dibundel, JANGAN tambahkan ini.
      // external: ['bootstrap/dist/js/bootstrap.bundle.min.js'],
    }
  }
})