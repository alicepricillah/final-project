// src/components/layout/Footer.jsx
import React from 'react';

const FooterLink = ({ children }) => (
  <a href="#" className="text-gray-400 hover:text-primary transition duration-200 block mb-2 text-sm">
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-neutral-dark text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 pb-12">
          
          {/* Column 1: Brand */}
          <div className="col-span-2 lg:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">
              SoftMax Fumigation
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Making your home pest-free with safe, organic solutions. We prioritize your family's health above all.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3 text-2xl">
              <a className="text-secondary hover:text-primary cursor-pointer">🐦</a>
              <a className="text-secondary hover:text-primary cursor-pointer">📘</a>
              <a className="text-secondary hover:text-primary cursor-pointer">📸</a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-1">
              <FooterLink>About Us</FooterLink>
              <FooterLink>Careers</FooterLink>
              <FooterLink>Privacy Policy</FooterLink>
              <FooterLink>Terms of Service</FooterLink>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-1">
              <FooterLink>Termite Control</FooterLink>
              <FooterLink>Rodent Control</FooterLink>
              <FooterLink>Bed Bug Treatment</FooterLink>
              <FooterLink>Emergency Service</FooterLink>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-white">Get in Touch</h4>
            <p className="text-gray-400 text-sm mb-2">
              123 Organic Lane, City, 10001
            </p>
            <p className="text-gray-400 text-sm mb-2">
              (555) 123-PEST
            </p>
            <p className="text-gray-400 text-sm">
              info@softmax.com
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-4 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} SoftMax Fumigation. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
