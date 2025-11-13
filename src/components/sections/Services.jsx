import React from "react";
import CleaningImage from "../../assets/images/cleaning.jpg";
import SprayingImage from "../../assets/images/spraying.jpg";
import SideBySideSection from "../common/SideBySideSection";

const services = [
  {
    title: "Cleaning",
    description: "Top-quality cleaning services using eco-friendly methods.",
    image: CleaningImage,
  },
  {
    title: "Spraying",
    description: "Safe and effective pest control for your home or office.",
    image: SprayingImage,
  },
];

const Services = () => {
  return (
    <SideBySideSection
      title="Our Services"
      textContent={[
        "At SoftMax Fumigation, we provide top-quality pest control and cleaning services using eco-friendly products.",
        "Our professional team ensures every corner of your space is hygienic and pest-free.",
      ]}
      items={services}
    />
  );
};

export default Services;

