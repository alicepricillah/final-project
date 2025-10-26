import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const SectionWrapper = ({ children, className, id }) => {
  return (
    <section
      id={id}
      className={clsx(
        'max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24',
        className
      )}
    >
      {children}
    </section>
  );
};

SectionWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default SectionWrapper;