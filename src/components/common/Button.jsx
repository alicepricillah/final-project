// src/components/common/Button.jsx
import React from "react";
import classNames from "classnames";

const Button = ({ children, variant = "primary", size = "md", className, onClick }) => {
  const baseStyles = "rounded-md font-semibold transition duration-300 focus:outline-none";

  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variantStyles = {
    primary: "bg-accent text-white hover:bg-opacity-90 shadow-lg",
    outline: "bg-transparent border border-accent text-accent hover:bg-accent hover:text-white",
  };

  return (
    <button
      onClick={onClick}
      className={classNames(baseStyles, sizeStyles[size], variantStyles[variant], className)}
    >
      {children}
    </button>
  );
};

export default Button;
