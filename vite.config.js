import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
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
    include: [
      // 'bootstrap', // Hapus atau komentari ini jika Anda memuat dari CDN
      // Tambahkan dependensi lain yang mungkin perlu dioptimalkan Vite
    ],
  },
  build: {
    rollupOptions: {
      external: [
        'bootstrap/dist/js/bootstrap.bundle.min.js',
        // Jika Anda juga memuat jQuery dari CDN dan Rollup masih mencoba membundelnya
        'admin-lte/plugins/jquery/jquery.min.js'
      ],
    }
  }
})