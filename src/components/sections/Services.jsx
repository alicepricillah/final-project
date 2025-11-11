import React from "react";
import CleaningImage from "../../assets/images/cleaning.jpg";
import SprayingImage from "../../assets/images/spraying.jpg";

const Services = () => {
  return (
    <section id="services" className="bg-gray-50 text-gray-800 py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text */}
        <div className="text-left space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-green-600">Our Services</h2>
          <p className="text-gray-700 text-lg">
            At <span className="font-semibold text-green-600">SoftMax Fumigation</span>, we provide
            top-quality pest control and cleaning services using eco-friendly products.
          </p>
          <p className="text-gray-700 text-lg">
            Our professional team ensures every corner of your space is hygienic and pest-free.
          </p>
        </div>

        {/* Right: Images */}
        <div className="flex justify-center md:justify-start">
          <div className="flex flex-col md:flex-row gap-4 max-w-[480px] w-full mx-auto">
            
            {/* Cleaning Image */}
            <div className="w-full md:w-1/2 px-1">
              <img
                src={CleaningImage}
                alt="Cleaning Service"
                className="rounded-xl shadow-lg w-full h-64 md:h-72 object-cover"
              />
            </div>

            {/* Spraying Image */}
            <div className="w-full md:w-1/2 px-1">
              <img
                src={SprayingImage}
                alt="Spraying Service"
                className="rounded-xl shadow-lg w-full h-64 md:h-72 object-cover"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;