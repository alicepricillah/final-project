// src/components/common/SectionWrapper.jsx
import React from 'react';
import PropTypes from 'prop-types';

const SectionWrapper = ({ children, className = '', isDark = false }) => {
  // Define consistent vertical padding and max-width container
  // bg-neutral-light or bg-white are defaults. isDark prop changes context.
  const bgClass = isDark ? 'bg-neutral-dark text-white' : 'bg-white';
  
  return (
    <section className={`py-20 lg:py-24 ${bgClass} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

SectionWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isDark: PropTypes.bool,
};

export default SectionWrapper;