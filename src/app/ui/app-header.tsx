"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

export function AppHeader() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleLinkClick = () => {
    setIsDrawerOpen(false);
  };

  const DRAWER_LINKS = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/members", label: "Members" },
    { href: "/articles", label: "News " },
    { href: "/policybriefs", label: "Policy Briefs" },
    { href: "/reports", label: "Reports" },
    { href: "/about", label: "About" },
  ];



  

  return (
    // <header className="sticky top-0 z-50 bg-gray-100 shadow">
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* <div className="w-full mx-auto bg-gradient-to-r from-red-800 to-red-600"> */}



      {/* Hidden on small screens, visible on md and up */}
<div className="hidden md:block w-full py-0 bg-black">
  <div className="flex items-center text-center max-w-7xl mx-auto px-4 text-gray-800">
    <p className="text-sm pl-10 p-3 max-w-6xl text-white/60 text-center md:text-left">
      Mindanao Sulu Palawan - Innovative Research and Development Consortium
    </p>
  </div>
</div>


      <nav className="w-full py-0">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 text-gray-800 font-semibold">
          {/* Left: Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="/assets/resources/logo-irdc-lightbulb.png"
              alt="MINSUPALA Innovative Research and Development Consortium"
              // Remove 'fill' when you want the image to have specific dimensions next to other elements.
              // Instead, define 'width' and 'height' or use Tailwind's sizing classes.
              width={30} // Adjust this value as needed for your logo's desired width
              height={30} // Adjust this value as needed for your logo's desired height
              className="object-contain"
              // The 'sizes' prop is still useful for Next.js image optimization
              // as it helps Next.js serve the most appropriate image resolution.
              sizes="(max-width: 768px) 100px, 150px"
            />
            <Link href="/" className="text-lg ">
              Minsupala IRDC
            </Link>
          </div>

          {/* Right: Nav links and mobile menu */}
          <div className="flex items-center space-x-4 ">
            <div className="hidden md:flex items-center space-x-4">
           
              <Link href="/projects" scroll={true} className="block px-4 py-2">
                Projects
              </Link>
              <Link href="/members" scroll={true} className="block px-4 py-2">
                Members
              </Link>
              <Link href="/articles" scroll={true} className="block px-4 py-2">
                 News
              </Link>
              <Link href="/policybriefs" scroll={true} className="block px-4 py-2">
                Policy Briefs
              </Link>
              <Link href="/reports" scroll={true} className="block px-4 py-2">
                Reports
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
            <h1 className="block px-4 py-3 font-extrabold font-montserrat">Minsupala IRDC</h1>
            <nav>
              {DRAWER_LINKS.map((link) => (
                <Link
                  key={link.href} // It's good practice to provide a unique key for list items
                  href={link.href}
                  className="block px-4 py-3 font-medium text-gray-700 "
                  onClick={handleLinkClick}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            {/* <a
              href="/#home-updates"
              className="block px-4 py-2"
              onClick={handleLinkClick}
            >
              News and Updates
            </a>
            <a
              href="/projects"
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
            </Link> */}
          </div>
        </div>
      </div>
    </header>
  );
}
