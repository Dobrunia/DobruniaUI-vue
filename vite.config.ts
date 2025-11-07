import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import { presetAttributify, presetIcons, presetWind3 } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    Components(),
    AutoImport({
      imports: [
        'vue',
        'vue/macros',
        '@vueuse/core',
      ],
      dirs: [],
      vueTemplate: true,
    }),
    UnoCSS({
      shortcuts: {},
      presets: [
        presetWind3(),
        presetAttributify(),
        presetIcons(),
      ],
    }),
  ],
})