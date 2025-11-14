import React from "react";
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 px-6 lg:px-20 bg-gray-100 flex justify-start"
    >
      {/* Card: fixed width, left-aligned */}
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-xl w-full">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4 text-green-600">
          Contact Us
        </h2>
        <p className="mb-6 text-gray-700">
          Have questions or need a quote? Reach out to us and we’ll respond promptly.
        </p>

        {/* Form */}
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            placeholder="Your Message"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none h-32"
          />
          <button
            type="submit"
            className="bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mb-6 mt-6 text-left">
          <div>
            <h4 className="font-semibold text-lg">Email</h4>
            <p className="text-gray-700">info@softmax.com</p>
          </div>
          <div className="mt-2">
            <h4 className="font-semibold text-lg">Phone</h4>
            <p className="text-gray-700">+123 456 7890</p>
          </div>
        </div>

        {/* Social Icons: Tailwind arbitrary colors, parent does not override */}
        <div className="flex gap-4 mt-4 text-inherit">
          <a href="#" aria-label="Facebook">
            <FaFacebookF size={24} className="text-[#1877F2]" />
          </a>
          <a href="#" aria-label="WhatsApp">
            <FaWhatsapp size={24} className="text-[#25D366]" />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram size={24} className="text-[#E1306C]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
