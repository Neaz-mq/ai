import React from 'react';

const Benefits = () => {
  const placeholderImages = [
    { src: "/Picture5.jpg", alt: "Person experiencing virtual reality" },
    { src: "/Picture6.jpg", alt: "Person using VR outdoors" },
    { src: "/Picture7.jpg", alt: "Person enjoying VR on a couch" },
    { src: "/Picture8.jpg", alt: "Person using VR indoors" },
  ];

  const features = [
    { src: "/Picture1.png", alt: "SpeechCore Icon", title: "SpeechCore" },
    { src: "/Picture2.png", alt: "360 Experience Icon", title: "360° Experience" },
    { src: "/Picture3.png", alt: "Real-Time Interaction Icon", title: "Real-Time Interaction" },
    { src: "/Picture4.png", alt: "Simulation Icon", title: "Simulation" },
  ];

  return (
    <section className="py-16 bg-white text-gray-800">
      {/* Section Heading */}
      <header className="max-w-3xl mx-auto text-center mb-14 px-4">
        <h2 className="text-3xl md:text-4xl font-light text-gray-500">
          Entering <span className="text-black font-bold">New</span> Worlds Beyond <span className="text-black font-bold">Imagination</span>
        </h2>
      </header>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {features.map((feature, index) => (
          <article
            key={index}
            className="bg-[#65D800] rounded-3xl p-6 flex flex-col items-center justify-center text-white text-center h-52 transition-transform hover:scale-105"
          >
            <img
              src={feature.src}
              alt={feature.alt}
              className="h-14 w-14 mb-4"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold">{feature.title}</h3>
          </article>
        ))}
      </div>

      {/* Image Gallery */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {placeholderImages.map((image, index) => (
          <figure key={index} className="overflow-hidden rounded-3xl">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
