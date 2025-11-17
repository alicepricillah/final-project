
// src/components/sections/Features.jsx
import React from 'react';

const FeatureItem = ({ icon, title, description }) => (
  <div className="flex space-x-4">
    {/* Icon Placeholder - replicating the small icon/number circle */}
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm mt-1">
      {icon}
    </div>
    
    <div>
      <h3 className="text-xl font-semibold text-neutral-dark mb-1">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const Features = () => {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text & Features */}
          <div>
            <h2 className="text-4xl font-extrabold text-neutral-dark mb-6">
              🌱 We Create Your Home <span className="text-secondary">Pest-Free & Safe</span>.
            </h2>
            
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              SoftMax Fumigation utilizes cutting-edge, <strong>organic compounds</strong> certified safe for humans and pets. We don't just eliminate pests; we restore your peace of mind with a clean, gentle solution.
            </p>

            {/* Feature Items */}
            <div className="space-y-8">
              <FeatureItem
                icon="1"
                title="Certified Organic Formulas"
                description="Our proprietary solutions are derived from natural sources, guaranteeing effectiveness without harmful chemical residues."
              />
              <FeatureItem
                icon="2"
                title="Targeted, Deep Treatment"
                description="We employ precise application techniques that target pest habitats, ensuring total eradication and long-term prevention."
              />
              <FeatureItem
                icon="3"
                title="24/7 Safety Assurance"
                description="Immediate re-entry for your family. We use products with zero re-entry wait time, prioritizing your safety and schedule."
              />
            </div>
            
            {/* CTA Button */}
            <button className="mt-10 px-6 py-3 border-2 border-primary text-primary font-bold rounded-md hover:bg-primary hover:text-white transition duration-300">
              EXPLORE OUR METHODS
            </button>
          </div>
          
          {/* Right Column: Image */}
          <div className="order-first lg:order-last">
            <img 
              src="/src/assets/images/features-side.jpg" 
              alt="SoftMax Organic Fumigation Service" 
              className="w-full h-auto object-cover rounded-lg shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
