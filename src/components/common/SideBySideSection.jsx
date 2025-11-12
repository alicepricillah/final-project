import React from "react";

const SideBySideSection = React.memo(({ title, textContent, items, lgTextLeft = true }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div
        className={`max-w-7xl mx-auto px-6 lg:px-20 ${
          lgTextLeft ? "lg:flex lg:items-start lg:gap-12" : "lg:flex lg:items-start lg:gap-12 lg:flex-row-reverse"
        }`}
      >
        {/* Left / Right: Text */}
        <div className="lg:w-1/2 space-y-4 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-green-600">{title}</h2>
          {textContent.map((para, i) => (
            <p key={i} className="text-gray-700 text-lg">{para}</p>
          ))}
        </div>

        {/* Right / Left: Images */}
        <div className="lg:w-1/2 flex justify-start gap-4 mt-6 lg:mt-0">
          {items
            .filter((item) => item.image)
            .map((item, i) => (
              <button
                key={i}
                className="w-48 h-48 flex-shrink-0 rounded-xl shadow-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-green-400"
                aria-label={item.title}
                onClick={() => alert(`${item.title} clicked!`)} // placeholder action
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
        </div>
      </div>
    </section>
  );
});

export default SideBySideSection;
