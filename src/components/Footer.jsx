import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white pt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">SoftMax Fumigation</h2>
          <p>Professional cleaning and fumigation services for homes and offices.</p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Subscribe to Newsletter</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded-l w-full text-gray-800"
            />
            <button className="bg-white text-green-600 font-semibold px-4 rounded-r hover:bg-green-100 transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-gray-200 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-200 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-200 transition"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-green-200 mt-10 mb-4 text-sm">
        &copy; {new Date().getFullYear()} SoftMax Fumigation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
