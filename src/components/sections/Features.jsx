import React from "react";
import { FaBroom, FaCar, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";

// Services data
const services = [
  {
    icon: <FaBroom className="text-indigo-600 w-10 h-10 mb-4" />,
    title: "House Cleaning",
    description: "Professional cleaning services for homes of all sizes.",
  },
  {
    icon: <FaCar className="text-indigo-600 w-10 h-10 mb-4" />,
    title: "Carpet Cleaning",
    description: "Deep carpet cleaning to remove dirt, dust, and stains.",
  },
  {
    icon: <FaTools className="text-indigo-600 w-10 h-10 mb-4" />,
    title: "Other Services",
    description: "Repairs, maintenance, and additional services to keep your property perfect.",
  },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

// Features component
const Features = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Key Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;





