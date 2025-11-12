import React from "react";
import CleaningImage from "../../assets/images/cleaning.jpg";
import SprayingImage from "../../assets/images/spraying.jpg";

const Services = () => {
  return (
    <section id="services" className="bg-gray-50 text-gray-800 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 lg:flex lg:items-start lg:gap-12">

        {/* Left: Text */}
        <div className="lg:w-1/2 space-y-4 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-green-600">Our Services</h2>
          <p className="text-gray-700 text-lg">
            At <span className="font-semibold text-green-600">SoftMax Fumigation</span>, we provide
            top-quality pest control and cleaning services using eco-friendly products.
          </p>
          <p className="text-gray-700 text-lg">
            Our professional team ensures every corner of your space is hygienic and pest-free.
          </p>
        </div>

        {/* Right: Images side by side with visible gap */}
        <div className="lg:w-1/2 flex justify-start gap-4 mt-6 lg:mt-0">
          {/* Cleaning Image */}
          <div className="w-48 h-48">
            <img
              src={CleaningImage}
              alt="Cleaning Service"
              className="rounded-xl shadow-lg w-full h-full object-cover"
            />
          </div>

          {/* Spraying Image */}
          <div className="w-48 h-48">
            <img
              src={SprayingImage}
              alt="Spraying Service"
              className="rounded-xl shadow-lg w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
