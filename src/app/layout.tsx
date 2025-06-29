// app/layout.tsx
import type { Metadata } from "next";
// Correctly import your fonts from next/font/google
import { Nunito_Sans, Montserrat, Lusitana, Inter } from "next/font/google";

// Import your global CSS
import "./globals.css";

// Import your UI components
import { AppFooter } from "./ui/app-footer";
import { AppHeader } from "./ui/app-header";

// *** REMOVE THIS LINE: `Head` from 'next/head' is not used here in the App Router. ***
// import Head from 'next/head';

// --- Font Configuration ---
// Define your Google Fonts. 'display: "swap"' is highly recommended for performance.
const nunito = Nunito_Sans({
  variable: "--font-nunito",
  // If you want more weights for Nunito Sans, specify them here:
  // For example, if you need regular (400) and bold (700): weight: ['400', '700'],
  subsets: ["latin"],
  display: "swap", // Recommended for better font loading behavior
});

const lusitana = Lusitana({
  variable: "--font-lusitana",
  weight: '400', // Only the 400 weight will be loaded for Lusitana
  subsets: ["latin"],
  display: "swap", // Recommended
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: '700', // Only the 700 weight will be loaded for Montserrat
  subsets: ["latin"],
  display: "swap", // Recommended
});


const inter = Inter({
  variable: "--font-inter",
  weight: '400', // Only the 700 weight will be loaded for Montserrat
  subsets: ["latin"],
  display: "swap", // Recommended
});



// --- Metadata for the <head> section ---
// In the App Router, you set the page title and other meta tags using this `metadata` export.
export const metadata: Metadata = {
  title: "IRDC", // This correctly sets the <title> tag for your application
  description: "Research and Development Center for MINSUPALA", // Add a relevant description
  icons: {
    icon: [
      {
        url: '/favicon_irdc/favicon.ico', // Relative path to your favicon in /public
      },
      {
        url: '/favicon_irdc/favicon-32x32.png',    // For modern browsers
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/favicon_irdc/apple-touch-icon.png', // For iOS devices
        type: 'image/png',
      },
    ],
  }, 
};

// --- Root Layout Component ---
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Apply all font variable classes to the <html> tag.
    // This makes the CSS custom properties (e.g., --font-nunito) globally available
    // in your CSS files.
    <html
      lang="en"
    >
      {/*
        *** IMPORTANT: Removed the <Head> component here. ***
        In the Next.js App Router, you DO NOT use `Head` from 'next/head'
        in `layout.tsx` or page files to set the title or other meta tags.
        That functionality is replaced by the `export const metadata` object above.
      */}

      <body
        // Apply a base font class to the <body> element.
        // `nunito.className` will make Nunito Sans the default font for your content.
        // `antialiased` is a common utility class (e.g., from Tailwind CSS) for smoother font rendering.
        // If you are not using Tailwind, you can remove `antialiased`.
        className={`${inter.className} antialiased min-h-screen `}
      >
        {/* Your application's header */}
        <AppHeader />
        {/* The main content of your application */}
        {children}
        {/* Your application's footer */}
        <AppFooter />
      </body>
    </html>
  );
}