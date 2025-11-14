import React from "react";
import cleaningImg from "../../assets/images/cleaning.jpg";
import sprayingImg from "../../assets/images/spraying.jpg";
import LogoImage from "../../assets/images/logo.jpg";

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-20 py-16 lg:py-24 flex flex-col-reverse lg:flex-row items-center gap-10">
        
        {/* Left: Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold mb-4 text-[#2C3E50]">
            SoftMax Fumigation
          </h1>

          {/* Logo under title */}
          <div className="mb-6 flex justify-center lg:justify-start">
            <img 
              src={LogoImage} 
              alt="SoftMax Fumigation Logo" 
              className="w-28 sm:w-32 lg:w-40 h-auto object-contain"
            />
          </div>

          <p className="text-base sm:text-lg lg:text-xl mb-8 text-[#34495E] leading-relaxed">
            Professional cleaning and spraying services to keep your environment safe and pest-free.
          </p>
          
          <button
            className="px-6 py-3 rounded-lg transition duration-300 text-white font-semibold"
            style={{ backgroundColor: "#1ABC9C" }}
          >
            Get Started
          </button>
        </div>

        {/* Right: Images Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end gap-4">
          <img
            src={cleaningImg}
            alt="Cleaning service"
            className="w-1/2 sm:w-5/12 lg:w-1/2 rounded-lg shadow-lg object-cover"
          />
          <img
            src={sprayingImg}
            alt="Spraying service"
            className="w-1/2 sm:w-5/12 lg:w-1/2 rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
