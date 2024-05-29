import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from 'next/script'
import "./globals.css";
import fav from './favicon.ico'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Akshat Jaiswal",
  description: "Welcome to Akshat's Portfolio. A digital masterpiece engineered to captivate and delight! Every click and scroll is an adventure, revealing layers of my personality, passions, and professional pursuits. My website isn't just about sharing; it's about engaging you in an interactive experience. From vibrant visuals to compelling content, it's designed to keep you entertained and connected.",
  icons:"./favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="image" content="/skill.png" />
        <meta name="whatsapp:image" content="/skill.png" />
        <Script src="https://kit.fontawesome.com/e822fa5c46.js" crossOrigin="anonymous"></Script>
        <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
        <Script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
        <link href="https://cdn.jsdelivr.net/npm/@coreui/coreui@5.1.0/dist/css/coreui.min.css" rel="stylesheet" integrity="sha384-hazw3X5QZ2q1iOnw6S3SywpZC1h7tIuXVRXTBTvI5a/mNy+BHeenuvDTNgFv12f5" crossOrigin="anonymous"></link>
        <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0&display=optional" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
