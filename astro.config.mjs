import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: 'https://thewallstrategy.com',
  integrations: [mdx(), svelte()],
  markdown: {
    shikiConfig: {
      theme: 'nord'
    },
    rehypePlugins: [['rehype-external-links', {
      target: '_blank'
    }]]
  }
});
