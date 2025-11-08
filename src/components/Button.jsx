import React from "react";
import PropTypes from "prop-types";

const variants = {
  primary: "bg-primary text-white hover:opacity-95",
  secondary: "bg-secondary text-white hover:opacity-95",
  outline: "border border-neutralDark text-neutralDark hover:bg-neutralLight",
};

export default function Button({ children, variant = "primary", onClick, type = "button", className = "" }) {
  const vClass = variants[variant] || variants.primary;
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center px-6 py-3 rounded-2xl font-medium transition ${vClass} ${className}`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "outline"]),
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
};
