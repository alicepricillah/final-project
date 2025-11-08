import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-lg font-bold text-green-600">SoftMax Fumigation</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 font-medium text-gray-700">
          <a href="#hero" className="hover:text-green-600 transition">Home</a>
          <a href="#features" className="hover:text-green-600 transition">Services</a>
          <a href="#about" className="hover:text-green-600 transition">About</a>
          <a href="#contact" className="hover:text-green-600 transition">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <a href="#hero" className="block px-6 py-3 text-gray-700 hover:bg-green-50 transition">Home</a>
          <a href="#features" className="block px-6 py-3 text-gray-700 hover:bg-green-50 transition">Services</a>
          <a href="#about" className="block px-6 py-3 text-gray-700 hover:bg-green-50 transition">About</a>
          <a href="#contact" className="block px-6 py-3 text-gray-700 hover:bg-green-50 transition">Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
