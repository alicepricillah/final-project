import React from "react";

const features = [
  { title: "Eco-Friendly Products", description: "Safe for your family and pets." },
  { title: "Professional Team", description: "Trained and certified staff." },
  { title: "24/7 Service", description: "We are available anytime you need." },
];

const Features = () => {
  return (
    <section id="features" className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">Our Features</h2>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {features.map((feature, i) => (
          <div key={i} className="bg-green-100 p-6 rounded-lg shadow-md w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
