import React from "react";

const Hero = () => (
  <section id="hero" className="py-16 bg-indigo-50">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">

      {/* Text */}
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-600 mb-4">
          Welcome to Softmax Fumigation
        </h1>
        <p className="text-gray-700 mb-6 max-w-md">
          Professional fumigation services for homes, offices, and more.
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition">
          Get Started
        </button>
      </div>

      {/* Images side by side */}
      <div className="md:w-1/2 flex justify-center space-x-4">
        <img src="/assets/images/hero-spraying.jpg" alt="Spraying" className="w-1/2 rounded shadow" />
        <img src="/assets/images/hero-cleaning.jpg" alt="Cleaning" className="w-1/2 rounded shadow" />
      </div>

    </div>
  </section>
);

export default Hero;



