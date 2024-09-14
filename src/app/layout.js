import { Inter, Figtree, Young_Serif, Outfit } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const figTree = Figtree({
  subsets: ["latin"],
  variable: '--font-figtree'
});

export const youngSerif = Young_Serif({
  subsets: ["latin"],
  variable: '--font-young-serif',
  weight: ['400']
});

export const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-outfit'
});


export const metadata = {
  title: "Frontend Mentor",
  description: "A portfolio of Frontend Mentor challenges",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${youngSerif.variable} ${outfit.variable} antialiased`}>{children}</body>
    </html>
  );
}
