import React from "react";
import EcoImage from "../../assets/images/eco.jpg";
import TeamImage from "../../assets/images/team.jpg";

const features = [
  {
    title: "Eco-Friendly Products",
    description: "Safe for your family and pets.",
    image: EcoImage,
  },
  {
    title: "Professional Team",
    description: "Trained and certified staff.",
    image: TeamImage,
  },
  {
    title: "24/7 Service",
    description: "We are available anytime you need.",
    image: null,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text */}
        <div className="space-y-6 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-green-600">
            Our Features
          </h2>
          {features.map((feature, i) => (
            <div key={i} className="space-y-2">
              <h3 className="text-xl font-semibold text-green-600">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Right: Images side by side with equal size and space */}
        <div className="flex justify-end gap-4">
          {features
            .filter((feature) => feature.image)
            .map((feature, i) => (
              <div key={i} className="w-48 h-48">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="rounded-xl shadow-lg w-full h-full object-cover"
                />
              </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
