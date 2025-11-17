// src/components/sections/Hero.jsx
import React, { memo } from "react";
import LogoImage from "../../assets/images/logo.jpg";
import Button from "../common/Button"; // NEW import

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 lg:px-20 py-24 flex flex-col lg:flex-row items-center justify-center">

        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">

          {/* Logo */}
          <div className="mb-8 flex justify-center lg:justify-start">
            <img
              src={LogoImage}
              alt="SoftMax Fumigation Logo"
              className="w-20 h-20 md:w-24 md:h-24 object-contain"
            />
          </div>

          <p className="text-lg lg:text-xl mb-8" style={{ color: "#34495E" }}>
            Professional cleaning and fumigation services to keep your environment safe and pest-free.
          </p>

          {/* NEW: CTA Button Group (Primary + Outline) */}
          <div className="flex justify-center lg:justify-start space-x-4 mt-6">

            {/* Primary CTA */}
            <Button
              variant="primary"
              size="lg"
              onClick={() => console.log("Consultation Clicked")}
              className="shadow-xl"
            >
              GET A FREE CONSULTATION
            </Button>

            {/* Secondary CTA */}
            <Button
              variant="outline"
              size="lg"
              className="bg-white border-white text-black hover:text-primary hover:border-primary"
              onClick={() => console.log("Organic Advantage Clicked")}
            >
              OUR ORGANIC ADVANTAGE
            </Button>

          </div>

        </div>

      </div>
    </section>
  );
};

// Export memoized component for performance optimization
export default memo(Hero);
