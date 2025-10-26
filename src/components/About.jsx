import React from 'react';
import aboutImage from '../../assets/images/about.jpg'; // Add your image

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <img
            src={aboutImage}
            alt="About our brand"
            className="rounded-xl shadow-lg w-full max-w-md mx-auto"
            loading="lazy"
          />
        </div>
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-6 text-neutral-dark">About Us</h2>
          <p className="text-gray-700 mb-4">
            We’re a team of passionate creators, designers, and developers
            dedicated to building impactful digital experiences that inspire
            and empower.
          </p>
          <p className="text-gray-700">
            Our mission is to help brands grow by combining innovation,
            design excellence, and customer-focused strategies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
