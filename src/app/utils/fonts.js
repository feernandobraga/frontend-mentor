import { Figtree, Young_Serif } from 'next/font/google';

// 1. we can export the fonts and use the `className` property to apply the font to the element
export const figTree = Figtree({
  subsets: ["latin"],
  variable: '--font-figtree'
});


// 2. or we can export the fonts and use the `variable` property to apply the font to the element,
// but from the layout.js. Then Tailwind will apply the font to the element based on the variable
// export const youngSerif = Young_Serif({
//   subsets: ["latin"],
//   variable: '--font-young-serif',
//   weight: ['400']
// });