import React from 'react';
import { Rocket, ShieldCheck, Users } from 'lucide-react'; // Built-in icons
import Card from '../common/Card';

const Features = () => {
  const features = [
    {
      icon: Rocket,
      title: 'Fast Performance',
      description: 'Experience lightning-fast load times and seamless browsing.',
    },
    {
      icon: ShieldCheck,
      title: 'Secure Solutions',
      description: 'Your privacy and data are protected with our secure systems.',
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Our team is here 24/7 to help you achieve your goals.',
    },
  ];

  return (
    <section id="features" className="py-24 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-12 text-neutral-dark">Our Features</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

