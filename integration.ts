import type { AstroIntegration } from 'astro';

export default {
  name: '3cat-portal',
  hooks: {
    'astro:build:done': ({ dir }) => {
      console.log(`Build completat a ${dir}`);
    },
  },
} satisfies AstroIntegration;
