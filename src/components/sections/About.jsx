import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="px-6 md:px-12 lg:px-20 py-16 bg-white text-gray-800"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">
          About SoftMax Fumigation
        </h2>

        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          At <span className="font-semibold text-green-600">SoftMax Fumigation</span>, we
          are committed to creating clean, safe, and healthy environments for
          homes, offices, and commercial spaces. Our mission is to deliver
          top-quality pest control and cleaning services using environmentally
          safe products and modern techniques.
        </p>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          With years of experience in fumigation, disinfection, and deep
          cleaning, our dedicated team ensures that every corner of your space
          is hygienic and pest-free. We believe in professionalism, integrity,
          and customer satisfaction — values that drive everything we do.
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 w-full text-left">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-2xl font-bold text-green-600">+150</h3>
            <p className="text-sm text-gray-500">Happy Clients</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-2xl font-bold text-green-600">10+</h3>
            <p className="text-sm text-gray-500">Years of Experience</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-2xl font-bold text-green-600">100%</h3>
            <p className="text-sm text-gray-500">Satisfaction Guarantee</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;