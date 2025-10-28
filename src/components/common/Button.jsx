import React from "react";

const ContactButton = () => {
  const handleClick = () => {
    alert("Message sent!");
  };

  return (
    <button
      onClick={handleClick}
      className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition"
    >
      Send Message
    </button>
  );
};

export default ContactButton;





