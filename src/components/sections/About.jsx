import React from "react";
import aboutImage from "../../assets/images/cleaning.jpg";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid gap-8 lg:grid-cols-2 items-center">
        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700 mb-4">
            We are a dedicated team providing top-notch pest control and cleaning services.
            Our mission is to ensure homes and businesses are safe, clean, and comfortable.
          </p>
          <p className="text-gray-700 mb-6">
            With years of experience and a commitment to quality, we offer personalized
            solutions that meet your unique needs. Trust us to protect your space and maintain hygiene standards.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
            Learn More
          </button>
        </div>
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={aboutImage}
            alt="About us"
            className="rounded-xl shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;





