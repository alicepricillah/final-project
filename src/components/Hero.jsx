import React from "react";
import cleaningImg from "../../assets/cleaning.jpg";
import sprayingImg from "../../assets/spraying.jpg";

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 lg:px-20 py-24 flex flex-col lg:flex-row items-center">
        
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-6" style={{ color: "#2C3E50" }}>
            SoftMax Fumigation
          </h1>
          <p className="text-lg lg:text-xl mb-8" style={{ color: "#34495E" }}>
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

        {/* Images Section */}
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

      </div>
    </section>
  );
};

export default Hero;


