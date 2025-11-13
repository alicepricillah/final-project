import React from "react";
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 px-6 lg:px-20 bg-gray-100 flex justify-center"
    >
      {/* Card: fixed width, half on LG, full on smaller screens */}
      <div className="bg-white shadow-lg rounded-xl p-8 w-full lg:w-1/2">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4 text-green-600">Contact Us</h2>
        <p className="mb-6 text-gray-700">
          Have questions or need a quote? Reach out to us and we’ll respond promptly.
        </p>

        {/* Form */}
        <form className="flex flex-col gap-4 mb-6">
          <label htmlFor="name" className="sr-only">Your Name</label>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <label htmlFor="email" className="sr-only">Your Email</label>
          <input
            id="email"
            type="email"
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <label htmlFor="message" className="sr-only">Your Message</label>
          <textarea
            id="message"
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
        <div className="mb-6 text-left space-y-2">
          <div>
            <h4 className="font-semibold text-lg">Email</h4>
            <p className="text-gray-700">info@softmax.com</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Phone</h4>
            <p className="text-gray-700">+123 456 7890</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

