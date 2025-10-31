import React from "react";

const Stats = () => (
  <section id="stats" className="py-16 bg-white text-center">
    <h2 className="text-3xl font-bold mb-4 text-indigo-600">Our Achievements</h2>
    <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
      We take pride in our work and consistently deliver outstanding results.
    </p>

    <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
      
      <div className="flex flex-col items-center">
        <p className="text-4xl font-bold text-indigo-600">500+</p>
        <p className="text-gray-700">Homes Cleaned</p>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-4xl font-bold text-indigo-600">120+</p>
        <p className="text-gray-700">Fumigation Jobs</p>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-4xl font-bold text-indigo-600">10+</p>
        <p className="text-gray-700">Years of Experience</p>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-4xl font-bold text-indigo-600">300+</p>
        <p className="text-gray-700">Satisfied Clients</p>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-4xl font-bold text-indigo-600">24/7</p>
        <p className="text-gray-700">Always available when needed</p>
      </div>

    </div>
  </section>
);

export default Stats;