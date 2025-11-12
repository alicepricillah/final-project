import React from "react";
import EcoImage from "../../assets/images/eco.jpg";
import TeamImage from "../../assets/images/team.jpg";

const features = [
  {
    title: "Eco-Friendly Products",
    description:
      "Our products are safe for your family and pets while keeping your space clean and hygienic.",
    image: EcoImage,
  },
  {
    title: "Professional Team",
    description:
      "Certified and trained experts ensure every service is performed with precision and care.",
    image: TeamImage,
  },
  {
    title: "24/7 Support",
    description: "We are always available to help you maintain a clean and pest-free environment.",
    image: null,
  },
];

const Features = React.memo(() => {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left: Text */}
        <div className="space-y-6 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-green-600">
            Our Features
          </h2>
          {features.map((feature, i) => (
            <article key={i} className="space-y-2">
              <h3 className="text-xl font-semibold text-green-600">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </article>
          ))}
        </div>

        {/* Right: Images side by side */}
        <div className="flex justify-start gap-4 lg:justify-end mt-6 lg:mt-0">
          {features
            .filter((feature) => feature.image)
            .map((feature, i) => (
              <button
                key={i}
                className="w-48 h-48 flex-shrink-0 rounded-xl shadow-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-green-400"
                aria-label={`Feature: ${feature.title}`}
                onClick={() => alert(`${feature.title} clicked!`)} // placeholder action
              >
                <img
                  src={feature.image}
                  alt={`Feature: ${feature.title}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
        </div>
      </div>
    </section>
  );
});

export default Features;
