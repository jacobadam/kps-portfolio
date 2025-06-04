import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 mt-auto bg-portfolio" role="contentinfo">
      <div className="mx-auto flex justify-center md:justify-start">
        <span
          className="text-xs sm:text-sm text-stone-100 pl-4"
          aria-live="polite"
        >
          © {currentYear}{" "}
          <a
            href="https://www.greenhousewebdesigns.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-300 transition-colors"
          >
            Greenhouse Web Designs
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
