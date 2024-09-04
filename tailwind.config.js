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
      },
      fontFamily: {
        'qr-code-challenge': ['Outfit', 'sans-serif'],
        'blog-preview-card': ['var(--font-figtree)']
      }
    },
  },
  plugins: [],
};
