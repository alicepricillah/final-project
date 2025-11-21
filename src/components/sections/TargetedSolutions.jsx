// src/components/sections/TargetedSolutions.jsx
import React, { memo } from 'react';
import Card from '../common/Card';

// IMPORT IMAGES — make sure these file names exist exactly in your folder
import termitesImage from '../../assets/images/termite.jpg';
import rodentsImage from '../../assets/images/rodent.jpg';
import bedbugsImage from '../../assets/images/bed bug.jpg';
import mosquitoImage from '../../assets/images/mosquito.jpg';

const TargetedSolutions = () => {
  const solutions = [
    {
      title: 'Termite Defense',
      description: 'Long-term organic barriers against destructive subterranean pests.',
      imageSrc: termitesImage,
    },
    {
      title: 'Rodent Eradication',
      description: 'Safe, strategic removal of mice and rats using non-toxic methods.',
      imageSrc: rodentsImage,
    },
    {
      title: 'Bed Bug Treatment',
      description: 'Complete organic solutions to eliminate resilient bed bug infestations.',
      imageSrc: bedbugsImage,
    },
    {
      title: 'Mosquito Control',
      description: 'Seasonal treatment for outdoor areas, reducing disease-carrying pests.',
      imageSrc: mosquitoImage,
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl font-extrabold text-neutral-dark mb-4">
          New Solutions In Focus
        </h2>

        <p className="text-lg text-gray-600 mb-10">
          Explore our specialized organic programs designed for the most common home invaders.
        </p>

        {/* Card Grid */}
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

export default memo(TargetedSolutions);
