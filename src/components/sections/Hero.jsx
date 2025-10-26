import React from "react";
import heroImage from "../../assets/images/hero.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-gray-50"
    >
      {/* Left side: text */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          SoftMax Fumigation
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Your Defense Against Unwanted Guests
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition">
          Get Started
        </button>
      </div>

      {/* Right side: image */}
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src={heroImage}
          alt="Fumigation professionals at work"
          className="w-[90%] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-2xl shadow-lg object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;

