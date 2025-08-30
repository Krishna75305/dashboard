import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'   // <-- this is missing in your config

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // <-- maps @ to /src
    },
  },
})
