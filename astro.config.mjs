import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://uncreative-creativity.github.io',
  vite: {
    ssr: {
      external: ["svgo"],
    }
  },
  integrations: [react(), tailwind()]
});