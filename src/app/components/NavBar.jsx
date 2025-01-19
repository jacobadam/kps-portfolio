"use client";

import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="bg-portfolio">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-6 px-4 sm:px-6 lg:px-8">
          <a href="/" className="md:invisible" aria-label="Homepage">
            <img src="/ks-logo.svg" alt="Logo" className="h-8 w-8" />
          </a>

          <div className="flex flex-1 items-center justify-center">
            <nav aria-label="Primary navigation" className="hidden md:block">
              <ul className="flex items-center text-sm justify-center">
                <li className="text-center w-20">
                  <Link
                    href="/"
                    className="text-stone-100"
                    aria-label="Go to homepage"
                  >
                    Home
                  </Link>
                </li>
                <li className="text-center w-20">
                  <Link
                    href="/about"
                    className="text-stone-100"
                    aria-label="Go to about page"
                  >
                    About
                  </Link>
                </li>
                <li className="text-center w-20">
                  <Link
                    href="/services"
                    className="text-stone-100"
                    aria-label="Go to services page"
                  >
                    Services
                  </Link>
                </li>
                <li className="text-center w-20">
                  <Link
                    href="/portfolio"
                    className="text-stone-100"
                    aria-label="Go to portfolio page"
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="text-center w-20">
                  <Link
                    href="/contact"
                    className="text-stone-100"
                    aria-label="Go to contact page"
                  >
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
              aria-label="Visit LinkedIn profile"
            >
              <img
                src="/linkedin-logo.svg"
                alt="LinkedIn logo"
                className="h-8 w-8"
              />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="block rounded bg-portfolio p-2.5 text-stone-100 transition md:hidden"
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen ? "true" : "false"}
              aria-controls="mobile-menu"
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
          <div
            id="mobile-menu"
            className="md:hidden bg-portfolio shadow-lg"
            role="region"
            aria-live="assertive"
          >
            <ul
              className="flex flex-col items-center gap-6 text-sm p-4"
              role="navigation"
            >
              <li>
                <Link
                  href="/"
                  className="text-stone-100"
                  onClick={toggleMenu}
                  aria-label="Go to homepage"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-stone-100"
                  onClick={toggleMenu}
                  aria-label="Go to about page"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-stone-100"
                  onClick={toggleMenu}
                  aria-label="Go to services page"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-stone-100"
                  onClick={toggleMenu}
                  aria-label="Go to portfolio page"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-stone-100"
                  onClick={toggleMenu}
                  aria-label="Go to contact page"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default NavBar;
