"use client";

import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      <header className="bg-[#10172A]">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <div className="text-white">Katie Shevlin</div>

          <div className="flex flex-1 items-center justify-center">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link href="/" className="text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="text-white">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="ml-auto flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/katie-shevlin90/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/linkedin-logo.webp" // Make sure the path is correct
                alt="LinkedIn"
                className="h-6 w-6"
              />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#10172A] shadow-lg">
            <ul className="flex flex-col items-center gap-6 text-sm p-4">
              <li>
                <Link href="/" className="text-white" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white" onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white"
                  onClick={toggleMenu}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-white"
                  onClick={toggleMenu}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};

export default NavBar;
