import React from 'react';

const Navigation = () => {
  return (
    <nav>
      <ul className="flex space-x-6">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;

