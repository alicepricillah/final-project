
import React from "react";
import EcoImage from "../../assets/images/eco.jpg";
import TeamImage from "../../assets/images/team.jpg";
import SideBySideSection from "../common/SideBySideSection";

const features = [
  {
    title: "Eco-Friendly Products",
    description: "Safe for your family and pets.",
    image: EcoImage,
  },
  {
    title: "Professional Team",
    description: "Trained and certified staff.",
    image: TeamImage,
  },
  {
    title: "24/7 Support",
    description: "We are always available anytime.",
    image: null, // optional
  },
];

const Features = () => {
  return (
    <SideBySideSection
      title="Our Features"
      textContent={features.map((f) => f.description)}
      items={features}
      lgTextLeft={true} // text stays on left for LG
    />
  );
};

export default Features;
