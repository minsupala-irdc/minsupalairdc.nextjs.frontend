'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";


export function AppHeader() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleLinkClick = () => {
    setIsDrawerOpen(false);
  };

  return (
    // <header className="sticky top-0 z-50 bg-gray-100 shadow">
    <header className="sticky top-0 z-50 bg-gray-100 ">
      <nav className="w-full py-5">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4">
          {/* Left: Logo */}
        <div className="flex items-center space-x-2">
  <Image
    src="/assets/resources/logo-irdc-lightbulb.png"
    alt="MINSUPALA Innovative Research and Development Consortium"
    // Remove 'fill' when you want the image to have specific dimensions next to other elements.
    // Instead, define 'width' and 'height' or use Tailwind's sizing classes.
    width={40} // Adjust this value as needed for your logo's desired width
    height={40} // Adjust this value as needed for your logo's desired height
    className="object-contain"
    // The 'sizes' prop is still useful for Next.js image optimization
    // as it helps Next.js serve the most appropriate image resolution.
    sizes="(max-width: 768px) 100px, 150px"
  />
  <Link href="/" className="text-lg font-bold">
    Minsupala IRDC
  </Link>
</div>

          {/* Right: Nav links and mobile menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/#home-updates"
                scroll={true}
                className="block px-4 py-2"
              >
                Updates
              </Link>
              <Link
                href="/#home-projects"
                scroll={true}
                className="block px-4 py-2"
              >
                Projects
              </Link>
              <Link
                href="/#home-members"
                scroll={true}
                className="block px-4 py-2"
              >
                Members
              </Link>
              <Link href="/about" className="block px-4 py-2">
                About
              </Link>
            </div>

            {/* Mobile hamburger button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                className="text-gray-700 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 transition-transform duration-300 md:hidden ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black opacity-50"
          onClick={handleLinkClick}
        ></div>

        {/* Drawer */}
        <div className="absolute top-0 left-0 w-3/4 h-screen bg-white p-5 overflow-y-auto">
          <button
            onClick={handleLinkClick}
            className="absolute top-3 right-3 text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="space-y-4 mt-10">
            <Link
              href="/"
              className="block px-4 py-2"
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <a
              href="/#home-updates"
              className="block px-4 py-2"
              onClick={handleLinkClick}
            >
              Updates
            </a>
            <a
              href="/#home-projects"
              className="block px-4 py-2"
              onClick={handleLinkClick}
            >
              Projects
            </a>
            <a
              href="/#home-members"
              className="block px-4 py-2"
              onClick={handleLinkClick}
            >
              Members
            </a>
            <Link
              href="/about"
              className="block px-4 py-2"
              onClick={handleLinkClick}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
