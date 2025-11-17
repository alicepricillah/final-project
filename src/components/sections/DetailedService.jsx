// src/components/sections/DetailedService.jsx
import React from 'react';
import CleaningImage from '/src/assets/images/cleaning.jpg';
import SprayingImage from '/src/assets/images/spraying.jpg';

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
          
          {/* IMAGE LEFT (choose cleaning or spraying) */}
          <div className="order-last lg:order-first">
            <img 
              src={SprayingImage}   // You can change to CleaningImage
              alt="SoftMax Professional Spraying Service"
              className="w-full h-auto object-cover rounded-lg shadow-2xl"
              loading="lazy"
            />
          </div>

          {/* TEXT RIGHT */}
          <div className="order-first lg:order-last">
            <h2 className="text-4xl font-extrabold text-neutral-dark mb-6">
              Why SoftMax is the <span className="text-secondary">Safe Choice</span>.
            </h2>

            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              At SoftMax Fumigation, we provide **eco-friendly, professional cleaning and pest control services** that keep your home safe without using harmful chemicals.
            </p>

            <ul className="space-y-6">
              <CheckListItem text="100% Organic and Non-Toxic Treatments" />
              <CheckListItem text="Professional Cleaning & Deep Sanitization" />
              <CheckListItem text="Licensed and Certified Technicians" />
              <CheckListItem text="Fast, Effective & Safe for Kids and Pets" />
              <CheckListItem text="6-Month Pest-Free Guarantee" />
            </ul>

            <a 
              href="#" 
              className="mt-10 inline-block text-lg font-bold text-primary hover:text-accent transition duration-300"
            >
              VIEW OUR SERVICES →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DetailedService;
