import { defineConfig } from 'vite'
import preset from './preset'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [...preset],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
