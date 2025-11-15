// src/components/sections/Services.jsx
import React from "react";

function Services() {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-green-700">
          Our Services
        </h2>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          We provide professional fumigation and cleaning services tailored to
          your home and workplace needs.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Service 1 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-bold mb-4 text-green-700">
              Home Fumigation
            </h3>
            <p className="text-gray-600">
              Effective pest treatments to keep your home safe and clean.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-bold mb-4 text-green-700">
              Office Sanitation
            </h3>
            <p className="text-gray-600">
              Maintain a hygienic workplace with our professional cleaning.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-bold mb-4 text-green-700">
              Pest Prevention
            </h3>
            <p className="text-gray-600">
              Long-term pest prevention solutions to protect your property.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
