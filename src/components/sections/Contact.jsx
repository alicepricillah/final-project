import React from 'react';
import Button from '../common/Button';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-neutral-light text-center">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-neutral-dark">Get in Touch</h2>
        <p className="text-gray-700 mb-8">
          Ready to start your journey with us? Reach out today and let’s create something amazing together.
        </p>
        <Button variant="primary">Contact Us</Button>
      </div>
    </section>
  );
};

export default Contact;



