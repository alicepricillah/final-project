import React from "react";
import PropTypes from "prop-types";

export default function SectionWrapper({ id, children, className = "" }) {
  return (
    <section id={id} className={`py-16 px-6 md:px-8 lg:px-16${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

SectionWrapper.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
