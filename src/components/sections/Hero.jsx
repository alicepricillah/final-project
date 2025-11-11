import React from "react";
import LogoImage from "../../assets/images/logo.jpg";

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 lg:px-20 py-24 flex flex-col lg:flex-row items-center">
        
        {/* Left: Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1
            className="text-4xl lg:text-6xl font-extrabold mb-4"
            style={{ color: "#2C3E50" }}
          >
            SoftMax Fumigation
          </h1>

          {/* Logo under title */}
          <div className="mb-6 w-full max-w-[250px] mx-auto lg:mx-0">
            <img 
              src={LogoImage} 
              alt="SoftMax Fumigation Logo" 
              className="w-full h-auto object-contain"
            />
          </div>

          <p
            className="text-lg lg:text-xl mb-8"
            style={{ color: "#34495E" }}
          >
            Professional cleaning and spraying services to keep your environment safe and pest-free.
          </p>

          <button
            className="px-6 py-3 rounded-lg transition duration-300"
            style={{
              backgroundColor: "#1ABC9C",
              color: "white",
            }}
          >
            Get Started
          </button>
        </div>

        {/* Right: Empty for now */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          {/* Optional illustration or leave empty */}
        </div>

      </div>
    </section>
  );
};

export default Hero;