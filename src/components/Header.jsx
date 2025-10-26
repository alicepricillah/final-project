import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand Name */}
        <h1 className="text-2xl font-extrabold text-green-700">
          SoftMax<span className="text-green-500"> Fumigation</span>
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-semibold">
          <li>
            <a href="#home" className="hover:text-green-700">
              Home
            </a>
          </li>
          <li>
            <a href="#features" className="hover:text-green-700">
              Services
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-green-700">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-green-700">
              Contact
            </a>
          </li>
        </ul>

        {/* CTA Button */}
        <button className="hidden md:block bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition">
          Get Started
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-green-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <ul className="flex flex-col items-center py-4 space-y-4 font-medium text-gray-700">
            <li>
              <a href="#home" onClick={() => setIsOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#features" onClick={() => setIsOpen(false)}>
                Services
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setIsOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;





