import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 mt-auto bg-portfolio" role="contentinfo">
      <div className="mx-auto flex flex-col items-center md:items-start pl-4">
        <span className="text-xs sm:text-sm text-stone-100" aria-live="polite">
          © {currentYear} Katie Shevlin. All Rights Reserved.
        </span>
        <span className="text-xs text-stone-400 mt-1">
          Designed by{" "}
          <a
            href="https://www.greenhousewebdesigns.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-100 transition-colors underline underline-offset-2"
          >
            Greenhouse Web Designs
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
