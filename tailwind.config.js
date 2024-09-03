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
        'blog-preview-card-yellow': '#f4d04e'
      },
      fontFamily: {
        'qr-code-challenge': ['Outfit', 'sans-serif'],
        'blog-preview-card': ['var(--font-figtree)']
      }
    },
  },
  plugins: [],
};
