import React from "react";
import { FaBug, FaHouseDamage, FaLeaf } from "react-icons/fa";

const Features = () => (
  <section id="features" className="py-16 bg-gray-50 text-center">
    <h2 className="text-3xl font-bold mb-4 text-indigo-600">Our Services</h2>
    <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
      We provide a range of professional services to keep your home and business clean and pest-free.
    </p>

    <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
      
      <div className="flex flex-col items-center">
        <FaBug className="text-indigo-600 text-5xl mb-2" />
        <p className="text-gray-700">Pest Control</p>
      </div>

      <div className="flex flex-col items-center">
        <FaHouseDamage className="text-indigo-600 text-5xl mb-2" />
        <p className="text-gray-700">Home Fumigation</p>
      </div>

      <div className="flex flex-col items-center">
        <FaLeaf className="text-indigo-600 text-5xl mb-2" />
        <p className="text-gray-700">Eco-friendly Cleaning</p>
      </div>

    </div>
  </section>
);

export default Features;









