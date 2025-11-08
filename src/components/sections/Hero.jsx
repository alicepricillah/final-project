import React from "react";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1581579182281-b5a2f90d15ff?auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay for readability */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          SoftmaxFumigation Services
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Professional Cleaning & Pest Control for Homes and Offices
        </p>
        <a
          href="#contact"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded shadow transition"
        >
          Get a Free Quote
        </a>
      </div>
    </section>
  );
};

export default Hero;
