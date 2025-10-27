import React from "react";
import heroImage from "../../assets/images/hero.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-center items-start text-left min-h-screen bg-gray-900 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 flex justify-center items-center">
        <img
          src={heroImage}
          alt="Fumigation expert spraying inside a modern home"
          className="w-full h-full object-contain md:object-contain scale-90 md:scale-95 opacity-90"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-2xl px-6 md:px-16 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-indigo-300 drop-shadow-md">
          SoftMax Fumigation
        </h1>
        <p className="text-lg md:text-xl mb-6 text-gray-100">
          Your Defense Against Unwanted Guests
        </p>
        <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full shadow-lg transition">
          Get Started
        </button>
      </div>
    </section>
  );
}






