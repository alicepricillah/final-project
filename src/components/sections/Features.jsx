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
    <section id="features" className="py-16 px-6 lg:px-20 bg-gray-50">
      <div className="container mx-auto max-w-7xl flex flex-col gap-12">
        <h2 className="text-3xl font-bold text-green-600 mb-8 text-left">
          Our Features
        </h2>

        {features.map((feature, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row items-center gap-6 bg-white shadow-md p-6 rounded-xl border-l-4 border-green-500 hover:shadow-lg transition`}
          >
            {/* Left: Text */}
            <div className={`${feature.image ? "md:w-1/2" : "w-full"} text-left`}>
              <h3 className="text-xl font-semibold text-green-600 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>

            {/* Right: Image if exists, centered */}
            {feature.image && (
              <div className="md:w-1/2 flex justify-center">
                <div className="w-full max-w-[300px]">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="rounded-xl shadow-lg w-full object-cover h-48 md:h-56"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;