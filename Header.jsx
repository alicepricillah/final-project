import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-primary">SoftMax Fumigation</h1>

        <nav className="space-x-6 font-medium text-neutralDark hidden md:flex">
          <a href="#hero" className="hover:text-primary">
            Home
          </a>
          <a href="#features" className="hover:text-primary">
            Services
          </a>
          <a href="#about" className="hover:text-primary">
            About
          </a>
          <a href="#contact" className="hover:text-primary">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;


