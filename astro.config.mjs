// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Hosted on GitHub Pages from the Sanil-Gokarn.github.io repository.
  site: 'https://sanil-gokarn.github.io',
  vite: {
    plugins: [tailwindcss()]
  }
});
