// src/components/sections/TargetedSolutions.jsx
import React from 'react';
import Card from '../common/Card';

const TargetedSolutions = () => {
  // Define content for four category cards
  const solutions = [
    {
      title: 'Termite Defense',
      description: 'Long-term organic barriers against destructive subterranean pests.',
      imageSrc: '/src/assets/images/termites-card.jpg',
    },
    {
      title: 'Rodent Eradication',
      description: 'Safe, strategic removal of mice and rats using non-toxic methods.',
      imageSrc: '/src/assets/images/rodents-card.jpg',
    },
    {
      title: 'Bed Bug Treatment',
      description: 'Complete organic solutions to eliminate resilient bed bug infestations.',
      imageSrc: '/src/assets/images/bedbugs-card.jpg',
    },
    {
      title: 'Mosquito Control',
      description: 'Seasonal treatment for outdoor areas, reducing disease-carrying pests.',
      imageSrc: '/src/assets/images/mosquito-card.jpg',
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching the original design's style */}
        <h2 className="text-3xl font-extrabold text-neutral-dark mb-4">
          New Solutions In Focus
        </h2>
        
        <p className="text-lg text-gray-600 mb-10">
          Explore our specialized organic programs designed for the most common home invaders.
        </p>

        {/* Card Grid - Replicating the four-column layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              title={solution.title}
              description={solution.description}
              imageSrc={solution.imageSrc}
              linkText="Book Service"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetedSolutions;