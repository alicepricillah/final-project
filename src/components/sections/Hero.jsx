import React from "react";
import cleaningImg from "../../assets/images/cleaning.jpg";
import sprayingImg from "../../assets/images/spraying.jpg";


const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-images flex flex-col md:flex-row gap-4">
        <img
          src={cleaningImg}
          alt="Cleaning service"
          className="w-full md:w-1/2 object-cover rounded-lg"
        />
        <img
          src={sprayingImg}
          alt="Spraying service"
          className="w-full md:w-1/2 object-cover rounded-lg"
        />
      </div>
      <div className="hero-text mt-6 text-center">
        <h1 className="text-4xl font-bold">Welcome to Softmax Fumigation</h1>
        <p className="mt-2 text-lg text-gray-700">
          We provide top-notch cleaning and spraying services for your home and office.
        </p>
      </div>
    </section>
  );
};

export default Hero;
