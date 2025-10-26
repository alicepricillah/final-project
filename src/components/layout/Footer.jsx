// src/components/layout/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white shadow-inner mt-auto py-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center text-neutral-dark">
        &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;