// src/components/sections/Hero.jsx
import React, { memo } from 'react';
import HERO_BACKGROUND_IMAGE from '../../assets/images/image_4937c2.jpg'; 
import LOGO_IMAGE from '../../assets/images/logo.jpg';
import Button from '../common/Button'; 

const Hero = () => {
  return (
    <section 
      // Main section wrapper: fixed height, full width background
      className="relative flex flex-col items-center justify-center h-[450px] sm:h-[550px] lg:h-[700px] bg-cover bg-center overflow-hidden" 
      // 🚨 FIX: Added overflow-hidden to prevent the background image from causing horizontal scroll
      style={{ backgroundImage: `url(${HERO_BACKGROUND_IMAGE})` }} 
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-neutral-dark opacity-70"></div>
      
      {/* Hero Content Wrapper: THIS NOW CONSTRAINS THE CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
          Make Your Home <span className="text-accent">Pest Free</span>
        </h1>

        {/* Logo */}
        <img 
          src={LOGO_IMAGE} 
          alt="SoftMax Fumigation Logo" 
          className="w-48 md:w-64 h-auto object-contain mx-auto mb-6 rounded-xl shadow-2xl" 
        />

        {/* Value Proposition */}
        <p className="text-lg md:text-xl text-neutral-light mb-10 max-w-xl mx-auto">
          Professional cleaning and fumigation services to keep your home and workplace safe from pests and bacteria.
        </p>

        {/* Primary CTA */}
        <Button
          variant="primary" 
          size="lg"
          onClick={() => { /* Handle quote request */ }}
          className="shadow-2xl"
        >
          Get a Free Quote
        </Button>
      </div>
      {/* 🚨 Content is now contained within the standard max-w-7xl container, ensuring padding on all sides. */}


      {/* Stats / Features Bar (This already uses max-w-7xl inside its bg-primary wrapper) */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="bg-primary shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-white">
              <div className="p-2">
                <p className="text-3xl font-bold">7+</p>
                <p className="text-sm opacity-90">Years Experience</p>
              </div>
              <div className="p-2">
                <p className="text-3xl font-bold">2</p>
                <p className="text-sm opacity-90">Certifications</p>
              </div>
              <div className="p-2">
                <p className="text-3xl font-bold">10k+</p>
                <p className="text-sm opacity-90">Homes Treated</p>
              </div>
              <div className="p-2">
                <p className="text-3xl font-bold">250+</p>
                <p className="text-sm opacity-90">Organic Products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);