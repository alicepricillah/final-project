import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

export const Button = ({ children, variant = "primary", onClick }) => {
  const base = "px-6 py-3 font-semibold rounded-lg transition-all duration-300";
  const styles = {
    primary: "bg-green-600 hover:bg-green-700 text-white shadow-lg",
    secondary: "bg-white text-green-700 border border-green-700 hover:bg-green-100",
    outline: "border border-white text-white hover:bg-white hover:text-green-700",
  };

  return (
    <button onClick={onClick} className={clsx(base, styles[variant])}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "outline"]),
  onClick: PropTypes.func,
};




