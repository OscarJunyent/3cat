/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'elink':          '#E5322D',
        'elink-dark':     '#C42B27',
        'text-primary':   '#111111',
        'text-secondary': '#666666',
        'bg-light':       '#F8F8F8',
        'bg-dark':        '#111111',
        'border-subtle':  '#E5E5E5',
        'code-bg':        '#F4F4F4',
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1':    ['2.5rem',   { lineHeight: '1.2', fontWeight: '700' }],
        'h2':    ['2rem',     { lineHeight: '1.3', fontWeight: '600' }],
        'h3':    ['1.5rem',   { lineHeight: '1.4', fontWeight: '600' }],
        'h4':    ['1.25rem',  { lineHeight: '1.5', fontWeight: '500' }],
        'body':  ['1rem',     { lineHeight: '1.6', fontWeight: '400' }],
        'small': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        'section':    '5rem',
        'section-sm': '2rem',
      },
    },
  },
  plugins: [],
};
