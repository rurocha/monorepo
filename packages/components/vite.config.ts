import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: "dist/",
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'main',
      fileName: 'main'
    },
    rollupOptions: {
      output: {
        entryFileNames: `main.js`,
      } 
    }
  }
})
