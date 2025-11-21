// src/components/layout/Navigation.jsx
import React, { useState } from 'react';

const NavLink = ({ children, isMobile = false }) => (
  <a 
    href="#" 
    className={`${isMobile ? 'block py-2 text-xl' : 'text-neutral-dark hover:text-primary transition duration-200 font-medium tracking-wide'}`}
  >
    {children}
  </a>
);

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Home', 'Services', 'Organic Advantage', 'Testimonials', 'Blog'];

  return (
    <nav className="bg-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-primary">
              SoftMax Fumigation
            </span>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
            {navItems.map(item => <NavLink key={item}>{item}</NavLink>)}
          </div>
          
          {/* Utility Icons & CTA */}
          <div className="flex items-center space-x-4">
            <span className="text-xl text-neutral-dark hover:text-primary cursor-pointer transition hidden sm:block">
                🔍
            </span>
            <span className="text-xl text-neutral-dark hover:text-primary cursor-pointer transition hidden sm:block">
                👤
            </span>
            <button className="hidden lg:inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md text-white bg-accent hover:bg-opacity-90 transition duration-200 shadow-lg">
                GET FREE QUOTE
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-dark hover:text-primary hover:bg-neutral-light focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} absolute w-full bg-white shadow-xl`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map(item => (
            <NavLink key={item} isMobile={true}>{item}</NavLink>
          ))}
          <div className="pt-4 pb-2">
            <button className="w-full inline-flex items-center justify-center px-4 py-3 text-lg font-bold rounded-md text-white bg-accent hover:bg-opacity-90 transition duration-200 shadow-md">
                GET FREE QUOTE
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
