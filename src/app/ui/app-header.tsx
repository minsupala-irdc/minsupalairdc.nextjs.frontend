"use client";
import { useState, useRef, useEffect } from "react";

export function AppHeader() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLinkClick = () => {
    setIsDrawerOpen(false);
    setIsDropdownOpen(false);
  };

  const handleDropdownClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside (desktop)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }

      
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header>
      <nav className="sticky top-0 z-100 w-full py-3 bg-gray-100 shadow">

        <div className="flex items-center justify-between max-w-6xl mx-auto px-4">
          <a className="text-lg font-bold">Minsupala IRDC</a>

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

          {/* Desktop menu */}

        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 transition-transform duration-300 md:hidden ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className="absolute inset-0 bg-black opacity-50"
          onClick={handleLinkClick}
        ></div>

        <div className="absolute top-0 left-0 w-3/4 h-screen bg-white p-5 overflow-y-auto">
          <button
            onClick={() => setIsDrawerOpen(false)}
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
            <a href="#" className="block px-4 py-2" onClick={handleLinkClick}>
              Home
            </a>
            {/* Mobile dropdown */}
            <div className="relative">
              <button
                onClick={handleDropdownClick}
                className="block w-full text-left px-4 py-2"
              >
                Reports
              </button>
              {isDropdownOpen && (
                <div className="ml-4 mt-2 space-y-2 bg-gray-100 rounded">
                  <a
                    href="#"
                    className="block px-4 py-2"
                    onClick={handleLinkClick}
                  >
                    2021
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2"
                    onClick={handleLinkClick}
                  >
                    2022
                  </a>
                </div>
              )}
            </div>

            <a href="#" className="block px-4 py-2" onClick={handleLinkClick}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
