"use client";

import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      <header className="bg-white">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <div>Katie Shevlin</div>

          <div className="flex flex-1 items-center justify-center">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <ul className="flex flex-col items-center gap-6 text-sm p-4">
              <li>
                <Link href="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" onClick={toggleMenu}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" onClick={toggleMenu}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={toggleMenu}>
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
