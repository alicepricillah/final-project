// src/components/sections/DetailedService.jsx
import React from 'react';

const CheckListItem = ({ text }) => (
  <li className="flex items-start space-x-3">
    <span className="flex-shrink-0 text-primary mt-1">✔️</span>
    <p className="text-lg text-gray-700">{text}</p>
  </li>
);

const DetailedService = () => {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT – IMAGE */}
          <div className="order-last lg:order-first space-y-6">

            {/* Main cleaning service image */}
            <img 
              src="/src/assets/images/cleaning.jpg" 
              alt="SoftMax Cleaning Service"
              className="w-full h-auto object-cover rounded-lg shadow-2xl"
              loading="lazy"
            />

            {/* Secondary spraying service image */}
            <img 
              src="/src/assets/images/spraying.jpg"
              alt="SoftMax Spraying Service"
              className="w-full h-auto object-cover rounded-lg shadow-xl"
              loading="lazy"
            />
          </div>

          {/* RIGHT – TEXT */}
          <div className="order-first lg:order-last">
            <h2 className="text-4xl font-extrabold text-neutral-dark mb-6">
              Why Choose <span className="text-secondary">SoftMax Fumigation</span> Services?
            </h2>

            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              We combine organic-safe products and professional spraying techniques 
              to eliminate pests effectively while protecting your home, health, and pets.
            </p>

            <ul className="space-y-6">
              <CheckListItem text="Professional Spraying & Deep Cleaning Services" />
              <CheckListItem text="Eco-Friendly, Non-Toxic Solutions" />
              <CheckListItem text="Advanced Equipment for Accurate Application" />
              <CheckListItem text="Certified & Trained Technicians" />
              <CheckListItem text="24/7 Fast Support and Emergency Response" />
            </ul>

            <a 
              href="#services" 
              className="mt-10 inline-block text-lg font-bold text-primary hover:text-accent transition duration-300"
            >
              VIEW ALL SERVICES →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedService;
