import React from "react";

const Header = () => (
  <header className="bg-white shadow py-4 fixed w-full top-0 z-50">
    <nav className="max-w-6xl mx-auto flex justify-between px-6">
      <a href="#hero" className="font-bold text-indigo-600 text-xl">Softmax Fumigation</a>
      <div className="space-x-6">
        <a href="#about" className="text-gray-700 hover:text-indigo-600 transition">About</a>
        <a href="#features" className="text-gray-700 hover:text-indigo-600 transition">Services</a>
        <a href="#stats" className="text-gray-700 hover:text-indigo-600 transition">Stats</a>
        <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition">Contact</a>
      </div>
    </nav>
  </header>
);

export default Header;







