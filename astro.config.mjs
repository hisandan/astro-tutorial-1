// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: "https://astro-tutorial-1-dssh.netlify.app",
  integrations: [react(), preact()]
});