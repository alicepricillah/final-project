import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-indigo-50 min-h-[80vh] flex items-center justify-center text-center px-6"
    >
      <div>
        <h1 className="text-4xl md:text-6xl font-bold text-indigo-700 mb-4">
          Protect Your Home with <span className="text-indigo-500">Softmax Fumigation</span>
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Reliable pest control and fumigation services to keep your environment clean, safe, and pest-free.
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition">
          Get a Free Quote
        </button>
      </div>
    </section>
  );
};

export default Hero;