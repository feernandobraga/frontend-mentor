/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'qr-code-challenge-bg': '#D5E1EF',
        'blog-preview-card-yellow': '#f4d04e',
        'social-link-profiles-grey-700': 'hsl(0,0,20)',
        'social-link-profiles-grey-800': 'hsl(0,0,12)',
        'social-link-profiles-grey-900': 'hsl(0,0,8)',
        'social-link-profiles-green-500': 'hsl(75,94,57)',
        'recipe-page-stone-100': 'hsl(30, 54, 90)',
        'recipe-page-stone-150': 'hsl(30, 18, 87)',
        'recipe-page-stone-600': 'hsl(30, 10, 34)',
        'recipe-page-stone-900': 'hsl(24, 5, 18)',
        'recipe-page-brown-800': 'hsl(14, 45, 36)',
        'recipe-page-rose-800': 'hsl(332, 51, 32)',
        'recipe-page-rose-50': 'hsl(330, 100%, 98%)',
      },
      fontFamily: {
        'qr-code-challenge': ['Outfit', 'sans-serif'],
        'blog-preview-card': ['var(--font-figtree)'],
        'recipe-page-young': ['var(--font-young-serif)'],
        'recipe-page-outfit': ['var(--font-outfit)'],
      },
    },
  },
  plugins: [],
};
