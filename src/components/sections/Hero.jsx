import React from "react";
import heroImage from "../../assets/images/hero.jpg";

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      <img
        src={heroImage}
        alt="Hero"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-40">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Service</h1>
        <p className="text-lg md:text-2xl mb-6">Quality cleaning services you can trust</p>
        <button className="bg-indigo-600 px-6 py-3 rounded hover:bg-indigo-500 transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;