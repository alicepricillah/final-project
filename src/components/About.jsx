import React from "react";
import aboutImage from "../../assets/images/spraying.jpg"; // make sure this image exists

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src={aboutImage}
            alt="About Softmax Fumigation"
            className="rounded-2xl shadow-lg w-full h-auto"
          />
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            About Softmax Fumigation
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We are a professional cleaning and fumigation company dedicated to
            keeping your environment clean, fresh, and pest-free. Our trained
            team uses modern equipment and eco-friendly chemicals to ensure safe
            and effective results for your home, office, or business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;





