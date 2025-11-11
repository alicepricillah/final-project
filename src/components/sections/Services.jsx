import React from "react";
import CleaningImage from "../../assets/images/cleaning.jpg";
import SprayingImage from "../../assets/images/spraying.jpg";
import EcoImage from "../../assets/images/eco.jpg";
import TeamImage from "../../assets/images/team.jpg";

const Services = () => {
  return (
    <section
      id="services"
      className="bg-gray-50 text-gray-800 px-6 md:px-12 lg:px-20 py-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-start gap-12">
        {/* Top: Cleaning + Spraying Images */}
        <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start w-full">
          <img
            src={CleaningImage}
            alt="Cleaning Service"
            className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
            loading="lazy"
          />
          <img
            src={SprayingImage}
            alt="Spraying Service"
            className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
            loading="lazy"
          />
        </div>

        {/* About Section */}
        <div className="mt-6 w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">
            About SoftMax Fumigation
          </h2>

          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            At{" "}
            <span className="font-semibold text-green-600">
              SoftMax Fumigation
            </span>
            , we are committed to creating clean, safe, and healthy environments
            for homes, offices, and commercial spaces. Our mission is to deliver
            top-quality pest control and cleaning services using environmentally
            safe products and modern techniques.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            With years of experience in fumigation, disinfection, and deep
            cleaning, our dedicated team ensures that every corner of your space
            is hygienic and pest-free. We believe in professionalism, integrity,
            and customer satisfaction — values that drive everything we do.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 w-full text-left">
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-2xl font-bold text-green-600">+150</h3>
              <p className="text-sm text-gray-500">Happy Clients</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-2xl font-bold text-green-600">10+</h3>
              <p className="text-sm text-gray-500">Years of Experience</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-2xl font-bold text-green-600">100%</h3>
              <p className="text-sm text-gray-500">Satisfaction Guarantee</p>
            </div>
          </div>

          {/* Our Features Section: Each Feature has Text + Image */}
          <div className="mt-12 w-full flex flex-col gap-8">
            {/* Feature 1: Eco-Friendly Products */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex-1 text-left">
                <h4 className="font-semibold text-lg text-green-600">
                  Eco-Friendly Products
                </h4>
                <p className="text-gray-600">Safe for your family and pets.</p>
              </div>
              <div className="flex-1">
                <img
                  src={EcoImage}
                  alt="Eco-Friendly Products"
                  className="rounded-xl shadow-lg w-full h-48 object-cover"
                />
              </div>
            </div>

            {/* Feature 2: Professional Team */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex-1 text-left">
                <h4 className="font-semibold text-lg text-green-600">
                  Professional Team
                </h4>
                <p className="text-gray-600">Trained and certified staff.</p>
              </div>
              <div className="flex-1">
                <img
                  src={TeamImage}
                  alt="Professional Team"
                  className="rounded-xl shadow-lg w-full h-48 object-cover"
                />
              </div>
            </div>

            {/* Feature 3: 24/7 Service (Optional Image) */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex-1 text-left">
                <h4 className="font-semibold text-lg text-green-600">
                  24/7 Service
                </h4>
                <p className="text-gray-600">We are available anytime you need.</p>
              </div>
              <div className="flex-1">
                {/* Optional: Add an image here if desired */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;