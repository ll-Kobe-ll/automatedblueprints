import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://automatedblueprints.com',
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
  output: 'static',
});
