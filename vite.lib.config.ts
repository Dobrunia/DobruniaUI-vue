import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      entryRoot: 'src',
      outDir: 'dist',
      insertTypesEntry: true,
      // ВАЖНО: исключаем stories и всё dev
      exclude: [
        '**/*.stories.*',
        '**/*.story.*',
        '**/*.spec.*',
        '**/*.test.*',
        'src/**/__tests__/**',
        'src/**/__mocks__/**',
        '.storybook/**',
        'storybook-static/**',
        'dist/**',
      ],
    }),
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true, // ВАЖНО: чистим dist перед сборкой
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'DobruniaUI',
      formats: ['es', 'cjs'],
      fileName: (format) => (format === 'es' ? 'dobruniaui.mjs' : 'dobruniaui.cjs'),
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'styles.css';
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
});
