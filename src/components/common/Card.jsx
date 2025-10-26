import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
      {Icon && <Icon className="w-12 h-12 text-primary mx-auto mb-4" />}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

Card.propTypes = {
  icon: PropTypes.elementType,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;