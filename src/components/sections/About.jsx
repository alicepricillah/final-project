import React from "react";

const About = () => {
  const aboutImage = new URL("../../assets/about.jpg", import.meta.url).href;

  return (
    <section
      id="about"
      className="py-20 bg-gray-50 text-gray-800 flex flex-col md:flex-row items-center justify-center gap-10 px-8 md:px-20"
    >
      <div className="md:w-1/2">
        <img
          rc={aboutImage}
  alt="About our brand"
  className="border-4 border-red-600 w-96 h-96 object-cover"
/>
      </div>
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold mb-4 text-indigo-600">About Us</h2>
        <p className="text-lg leading-relaxed mb-4">
          We are passionate about creating innovative solutions that empower
          businesses and individuals to grow. Our team combines creativity,
          technology, and dedication to deliver top-quality results.
        </p>
        <p className="text-lg leading-relaxed">
          From concept to completion, we work closely with our clients to ensure
          that every project reflects their goals and vision.
        </p>
      </div>
    </section>
  );
};

export default About;





