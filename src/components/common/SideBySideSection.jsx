
import React from "react";

// Props:
// title: string
// textContent: array of paragraphs (strings)
// items: array of objects { title, description, image }
// lgTextLeft: boolean (optional, default true) - text on left for LG
const SideBySideSection = React.memo(({ title, textContent = [], items = [], lgTextLeft = true }) => {
  // Text section
  const TextDiv = (
    <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-4 text-left">
      {title && (
        <header>
          <h2 className="text-3xl md:text-4xl font-bold text-green-600">{title}</h2>
        </header>
      )}
      {textContent.map((para, i) => (
        <p key={i} className="text-gray-700 text-lg">{para}</p>
      ))}
    </div>
  );

  // Images / items section
  const ImagesDiv = (
    <div className="w-full lg:w-1/2 flex flex-wrap justify-end gap-6 pr-6">
      {items.map((item, i) => (
        <article
          key={i}
          className="flex-1 max-w-[220px] h-48 rounded-xl shadow-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          {item.image && (
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          )}
          {item.title && <h3 className="sr-only">{item.title}</h3>}
          {item.description && <p className="sr-only">{item.description}</p>}
        </article>
      ))}
    </div>
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
        {lgTextLeft ? (
          <>
            {TextDiv}
            {ImagesDiv}
          </>
        ) : (
          <>
            {ImagesDiv}
            {TextDiv}
          </>
        )}
      </div>
    </section>
  );
});

export default SideBySideSection;
