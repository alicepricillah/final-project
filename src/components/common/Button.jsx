import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, variant = "primary", onClick, className = "" }) => {
  const baseStyles =
    "px-6 py-3 rounded-full font-semibold transition-all duration-300 focus:outline-none";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-dark focus:ring-2 focus:ring-primary",
    secondary:
      "bg-white text-primary border border-primary hover:bg-primary hover:text-white focus:ring-2 focus:ring-primary",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;




