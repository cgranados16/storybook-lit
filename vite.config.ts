import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { fileURLToPath } from 'url';
import { libInjectCss, scanEntries } from 'vite-plugin-lib-inject-css'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@fontsource/lato";
          @use "@/styles/_colors.scss" as *;
          @use "@/styles/_typography.scss" as *;
        `
      }
    }
  },
  build: {
    ssr: true,
    copyPublicDir: false,
    cssCodeSplit: true,
    lib: {
      fileName: 'index',
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es']
    },
    rollupOptions: {
      external: [/^lit/],
    },
    output: {
      // Put chunk files at <output>/chunks
      chunkFileNames: 'chunks/[name].[hash].js',
      // Put chunk styles at <output>/assets
      assetFileNames: 'assets/[name][extname]',
      entryFileNames: '[name].js',
    },
    sourcemap: true
  },
  plugins: [
    libInjectCss({
      format: ['es'],
      entry: {
        index: 'src/index.ts',
        ...scanEntries([
          'src',
        ])
      },
    }),
    dts({ include: ['src'] }),
  ],
});
