import React from "react";
import LogoImage from "../../assets/images/logo.jpg"; // Your logo
// Uncomment these if you want images in hero
// import cleaningImg from "../../assets/images/cleaning.jpg";
// import sprayingImg from "../../assets/images/spraying.jpg";

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 lg:px-20 py-24 flex flex-col lg:flex-row items-center justify-center">
        
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1
            className="text-4xl lg:text-6xl font-extrabold mb-6"
            style={{ color: "#2C3E50" }}
          >
            SoftMax Fumigation
          </h1>

          {/* Logo */}
          <div className="mb-8 flex justify-center lg:justify-start">
            <img
              src={LogoImage}
              alt="SoftMax Fumigation Logo"
              className="w-32 h-32 md:w-40 md:h-40 object-contain"
            />
          </div>

          <p className="text-lg lg:text-xl mb-8" style={{ color: "#34495E" }}>
            Professional cleaning and fumigation services to keep your environment safe and pest-free.
          </p>

          <button
            className="px-6 py-3 rounded-lg text-white font-semibold transition duration-300"
            style={{ backgroundColor: "#1ABC9C" }}
          >
            Get Started
          </button>
        </div>

        {/* Optional Images Section */}
        {/* Uncomment if you want side images */}
        {/* 
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end gap-4">
          <img
            src={cleaningImg}
            alt="Cleaning service"
            className="w-1/2 rounded-lg shadow-lg"
          />
          <img
            src={sprayingImg}
            alt="Spraying service"
            className="w-1/2 rounded-lg shadow-lg"
          />
        </div>
        */}

      </div>
    </section>
  );
};

export default Hero;
