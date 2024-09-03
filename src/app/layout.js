import { Inter, Figtree } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const figTree = Figtree({
  subsets: ["latin"],
  variable: '--font-figtree'
});

export const metadata = {
  title: "Frontend Mentor",
  description: "A portfolio of Frontend Mentor challenges",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${figTree.className}`}>{children}</body>
    </html>
  );
}
