// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://rocora.las.cat',
  base: '/blog',
  integrations: [vue()],
  vite: {
    plugins: [tailwindcss()],
  },
});
