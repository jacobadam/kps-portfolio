"use client";

import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      <header className="bg-portfolio">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <img src="/ks-logo.svg" alt="logo" className="h-12 w-12" />
          </a>

          <div className="flex flex-1 items-center justify-center">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link href="/" className="text-stone-100">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-stone-100">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-stone-100">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="text-stone-100">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-stone-100">
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
                src="/linkedin-logo.svg"
                alt="LinkedIn"
                className="h-8 w-8"
              />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="block rounded bg-stone-100 p-2.5 text-portfolio transition hover:text-portfolio md:hidden"
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
          <div className="md:hidden bg-portfolio shadow-lg">
            <ul className="flex flex-col items-center gap-6 text-sm p-4">
              <li>
                <Link href="/" className="text-stone-100" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-stone-100"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-stone-100"
                  onClick={toggleMenu}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-stone-100"
                  onClick={toggleMenu}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-stone-100"
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
