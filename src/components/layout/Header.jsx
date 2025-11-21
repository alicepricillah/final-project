// src/components/layout/Header.jsx
import React from 'react';

const Header = () => {
  return (
    // Top utility bar (dark area)
    <div className="bg-neutral-dark text-white text-sm py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
        {/* Navigation links (Right side of the original header) */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-secondary transition duration-200">
            About Us
          </a>
          <a href="#" className="hover:text-secondary transition duration-200">
            Contact
          </a>
          <a href="#" className="hover:text-secondary transition duration-200">
            FAQs
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;