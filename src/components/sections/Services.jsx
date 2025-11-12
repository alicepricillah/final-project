import React from "react";
import CleaningImage from "../../assets/images/cleaning.jpg";
import SprayingImage from "../../assets/images/spraying.jpg";

const services = [
  {
    title: "Cleaning Service",
    description:
      "Professional cleaning using eco-friendly products, ensuring every corner is spotless and hygienic.",
    image: CleaningImage,
  },
  {
    title: "Spraying Service",
    description:
      "Effective pest control and spraying services to protect your home or office from unwanted pests.",
    image: SprayingImage,
  },
];

const Services = React.memo(() => {
  return (
    <section id="services" className="bg-gray-50 text-gray-800 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 lg:flex lg:items-start lg:gap-12">

        {/* Left: Text */}
        <div className="lg:w-1/2 space-y-4 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-green-600">
            Our Services
          </h2>
          <p className="text-gray-700 text-lg">
            At <span className="font-semibold text-green-600">SoftMax Fumigation</span>, we provide top-quality cleaning and pest control services using eco-friendly products.
          </p>
          <p className="text-gray-700 text-lg">
            Our professional team ensures your home or office is hygienic, safe, and pest-free.
          </p>
        </div>

        {/* Right: Images side by side */}
        <div className="lg:w-1/2 flex justify-start gap-4 mt-6 lg:mt-0">
          {services.map((service, i) => (
            <button
              key={i}
              className="w-48 h-48 flex-shrink-0 rounded-xl shadow-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-green-400"
              aria-label={`Service: ${service.title}`}
              onClick={() => alert(`${service.title} clicked!`)} // placeholder action
            >
              <img
                src={service.image}
                alt={`Service: ${service.title}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Services;
