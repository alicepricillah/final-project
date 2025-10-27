import React from "react";
import aboutImage from "../../assets/images/about.jpg";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">About Us</h2>
        <img src={aboutImage} alt="About" className="mx-auto mb-6 rounded shadow" />
        <p className="text-gray-600 max-w-2xl mx-auto">
          We are committed to providing the best cleaning services for homes and offices.
        </p>
      </div>
    </section>
  );
};

export default About;


