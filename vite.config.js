const { resolve } = require('path')
const { defineConfig } = require('vite')
import react from '@vitejs/plugin-react'
import { splitVendorChunkPlugin } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  raw: {
    extenstions: ['html', 'txt'],
    glob: ['**.html'] // or glob
  },
  build: {
    minify: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      }
    }
  }
})
