import React from "react";

const Navigation = () => {
  return (
    <nav>
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li><a href="#hero" className="hover:text-indigo-600">Home</a></li>
        <li><a href="#features" className="hover:text-indigo-600">Features</a></li>
        <li><a href="#about" className="hover:text-indigo-600">About</a></li>
        <li><a href="#services" className="hover:text-indigo-600">Services</a></li>
        <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
