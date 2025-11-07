import type { StorybookConfig } from '@storybook/vue3-vite';
import UnoCSS from 'unocss/vite';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { presetAttributify, presetIcons, presetUno } from 'unocss';

const config: StorybookConfig = {
  stories: ['../src/components/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  viteFinal: async (config) => {
    config.plugins = config.plugins || [];

    // Добавляем плагины из vite.config.ts
    config.plugins.push(
      Components(),
      AutoImport({
        imports: ['vue', 'vue/macros', '@vueuse/core'],
        dirs: [],
        vueTemplate: true,
        dts: false, // Отключаем генерацию типов для Storybook
      }),
      UnoCSS({
        shortcuts: {},
        presets: [presetUno(), presetAttributify(), presetIcons()],
      })
    );

    return config;
  },
};
export default config;
