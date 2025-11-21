// src/components/common/Card.jsx
import React from 'react';

// Card component with destructured props for easy reusability
const Card = ({ title, imageSrc, description, linkText = 'View Solution' }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:shadow-xl transform hover:-translate-y-1">
      
      {/* Image Area - Replicating the aspect ratio of the original design's category images */}
      <div className="h-48 overflow-hidden">
        {/* Recommended image size for these cards is around 800x600, as per requirements */}
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy" // Applying lazy loading
        />
      </div>
      
      {/* Content Area - Consistent padding */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-neutral-dark mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        
        {/* Link/CTA replicating the 'Shop Now' link */}
        <a href="#" className="text-primary hover:text-secondary font-semibold text-sm flex items-center">
          {linkText} →
        </a>
      </div>
    </div>
  );
};

export default Card;