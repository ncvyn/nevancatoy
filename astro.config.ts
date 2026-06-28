import { defineConfig, fontProviders } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Maple Mono',
      cssVariable: '--font-maple-mono',
      fallbacks: ['monospace'],
      styles: ['normal'],
      weights: ['100', '400', '800'],
    },
  ],

  adapter: cloudflare(),
})