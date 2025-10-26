import React from 'react';
import heroImage from '../../assets/images/hero.jpg';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
      <div className="flex flex-col lg:flex-row items-center px-6 lg:px-20 py-12 lg:py-24">

        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
            SoftMax
          </h1>
          <p className="text-lg sm:text-xl lg:text-xl mb-6 text-gray-700">
            Smarter, Simpler Solutions for Modern Workflows
          </p>

          {/* CTA Button */}
          <div className="flex justify-center lg:justify-start space-x-4">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transform hover:scale-105 transition">
              Get Started
            </button>
            {/* Add other buttons from Day 7 if any */}
          </div>

          {/* Any extra Day 7 elements can go here */}
        </div>

        {/* Hero Image */}
        <div className="relative lg:w-1/2 mt-8 lg:mt-0">
          <img
            src={heroImage}
            alt="SoftMax hero image"
            loading="lazy"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
          {/* Subtle overlay for contrast */}
          <div className="absolute inset-0 bg-black opacity-10 rounded-lg"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
