import React from "react";
import CleaningImage from "../../assets/images/cleaning.jpg";
import SprayingImage from "../../assets/images/spraying.jpg";

const Services = () => {
  return (
    <section id="services" className="bg-gray-50 text-gray-800 py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center gap-12">

        {/* Left: Text */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-green-600">
            Our Services
          </h2>
          <p className="text-gray-700 text-lg">
            At <span className="font-semibold text-green-600">SoftMax Fumigation</span>, we provide
            top-quality pest control and cleaning services using eco-friendly products.
          </p>
          <p className="text-gray-700 text-lg">
            Our professional team ensures every corner of your space is hygienic and pest-free.
          </p>
        </div>

        {/* Right: Images */}
        <div className="md:w-1/2 flex justify-center md:justify-end gap-4 max-w-xl w-full mx-auto">
          {/* Cleaning */}
          <div className="w-1/2 px-1">
            <div className="relative w-full h-72 md:h-80">
              <img
                src={CleaningImage}
                alt="Cleaning Service"
                className="rounded-xl shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Spraying */}
          <div className="w-1/2 px-1">
            <div className="relative w-full h-72 md:h-80">
              <img
                src={SprayingImage}
                alt="Spraying Service"
                className="rounded-xl shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
