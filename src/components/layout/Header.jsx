import React, { useState } from 'react';
import { Button } from "../common/Button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-primary">Brand</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#hero" className="hover:text-primary cursor-pointer">Home</a>
          <a href="#features" className="hover:text-primary cursor-pointer">Features</a>
          <a href="#about" className="hover:text-primary cursor-pointer">About</a>
          <a href="#contact" className="hover:text-primary cursor-pointer">Contact</a>
          <Button variant="primary">Get Started</Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            <span className="text-2xl">&#9776;</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col gap-4 p-6">
            <a href="#hero">Home</a>
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <Button variant="primary">Get Started</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;




