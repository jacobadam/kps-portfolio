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
          © {currentYear} Greenhouse Web Designs. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
