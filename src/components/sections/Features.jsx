import React from "react";
import { FaBroom, FaCar, FaTools, FaRegSmile } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    icon: "FaBroom",
    title: "House Cleaning",
    description: "Thorough and professional cleaning for your home."
  },
  {
    icon: "FaCar",
    title: "Car Cleaning",
    description: "Full-service car wash and detailing."
  },
  {
    icon: "FaTools",
    title: "Repairs & Maintenance",
    description: "Minor home repairs and maintenance services."
  },
  {
    icon: "FaRegSmile",
    title: "Customer Satisfaction",
    description: "We guarantee happy and satisfied clients."
  }
];

const iconMap = { FaBroom, FaCar, FaTools, FaRegSmile };

const Features = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={index}
                className="p-6 bg-white rounded shadow hover:shadow-lg transition"
                whileHover={{ scale: 1.05 }}
              >
                <Icon className="text-indigo-500 text-4xl mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;







