import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-4 text-indigo-600">Contact Us</h2>
      <p className="text-gray-700 mb-8">
        Ready to start your journey with us? Reach out today!
      </p>
      <div className="flex justify-center space-x-8 text-3xl text-gray-700">
        <a
          href="https://wa.me/254793880496"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500 transition"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://facebook.com/alicepricillah"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition"
        >
          <FaFacebook />
        </a>
        <a
          href="https://instagram.com/alicepricillah"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-600 transition"
        >
          <FaYoutube />
        </a>
      </div>
    </section>
  );
};

export default Contact;



