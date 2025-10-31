import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50 text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 text-indigo-600">
          Contact Us
        </h2>
        <p className="text-gray-700 mb-8">
          Ready to start your journey with <span className="font-semibold">Softmax Fumigation</span>?<br />
          Reach out today and let’s keep your environment clean and pest-free.
        </p>

        {/* Contact Information */}
        <div className="space-y-3 text-gray-700 mb-8">
          <p><strong>Phone:</strong> +254 793 880 496</p>
          <p><strong>Email:</strong> info@softmaxfumigation.com</p>
          <p><strong>Location:</strong> Nairobi, Kenya</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-8 text-3xl mt-6">
          <a
            href="https://wa.me/254793880496"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="icon-whatsapp" />
          </a>
          <a
            href="https://facebook.com/alicepricillah"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="icon-facebook" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icon-instagram" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="icon-youtube" />
          </a>
        </div>

        {/* Footer Note */}
        <p className="text-sm text-gray-500 mt-10">
          © {new Date().getFullYear()} Softmax Fumigation. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;




