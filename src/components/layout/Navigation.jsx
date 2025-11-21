// src/components/layout/Navigation.jsx
import React from 'react';
// Assuming you have icons set up, e.g., using a library like Lucide, or using simple text placeholders.
// For now, we'll use simple text/emoji placeholders.

const NavLink = ({ children }) => (
  <a 
    href="#" 
    className="text-neutral-dark hover:text-primary transition duration-200 font-medium tracking-wide"
  >
    {children}
  </a>
);

const Navigation = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Area (Left) */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-primary">
              SoftMax Fumigation
            </span>
          </div>
          
          {/* Main Navigation Links (Center) - Hidden on smaller screens for now */}
          <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
            <NavLink>Home</NavLink>
            <NavLink>Services</NavLink>
            <NavLink>Organic Advantage</NavLink>
            <NavLink>Testimonials</NavLink>
            <NavLink>Blog</NavLink>
          </div>
          
          {/* Utility Icons / CTA (Right) */}
          <div className="flex items-center space-x-4">
            {/* Icons Placeholder - matching the original design's style */}
            <span className="text-xl text-neutral-dark hover:text-primary cursor-pointer transition">
                🔍
            </span>
            <span className="text-xl text-neutral-dark hover:text-primary cursor-pointer transition">
                👤
            </span>
            
            {/* CTA Button - mimicking the green button style */}
            <button className="hidden lg:inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-accent hover:bg-opacity-90 transition duration-200 shadow-lg">
                GET FREE QUOTE
            </button>
          </div>
          
          {/* Mobile Menu Button Placeholder (For MD/SM breakpoints) */}
          <div className="lg:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-neutral-dark hover:text-primary hover:bg-neutral-light focus:outline-none">
              ☰
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;