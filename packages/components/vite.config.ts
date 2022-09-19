import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // build: {
  //   outDir: "dist/",
  //   sourcemap: true,
  //   lib: {
  //     entry: resolve(__dirname, 'src/main.ts'),
  //     name: 'main',
  //     fileName: (format) => `main.${format}.js`,
  //   },
  //   rollupOptions: {
  //     external: ['vue'],
  //     output: {
  //       entryFileNames: `main.js`,
  //       globals: {
  //         vue: 'Vue',
  //       },
  //     },
  //   },
  // }

  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'ruan-components',
      // the proper extensions will be added
      fileName: 'ruan-components'
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
