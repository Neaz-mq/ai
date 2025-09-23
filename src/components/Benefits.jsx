import React from "react";
import { motion } from "framer-motion";

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

  // Motion Variants
  const containerVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const featureVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const galleryVariant = {
    hidden: { opacity: 0, y: 50 }, // start lower
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }, // animate up
  };

  return (
    <section className="py-16 bg-white text-gray-800">
      {/* Section Heading */}
      <motion.header
        className="max-w-3xl mx-auto text-center mb-16 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-light text-gray-700">
          Entering <span className="text-black font-bold">New</span> Worlds Beyond{" "}
          <span className="text-black font-bold">Imagination</span>
        </h2>
        <p className="mt-4 text-gray-500">
          Explore features that redefine virtual experiences.
        </p>
      </motion.header>

      {/* Features Grid */}
      <motion.div
        className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {features.map((feature, index) => (
          <motion.article
            key={index}
            className="bg-[#65D800] rounded-3xl p-6 flex flex-col items-center justify-center text-white text-center h-64 md:h-56 lg:h-52 shadow-lg hover:shadow-2xl cursor-pointer"
            variants={featureVariant}
            whileHover={{ scale: 1.05, rotate: 1 }}
            aria-label={feature.title}
          >
            <img
              src={feature.src}
              alt={feature.alt}
              className="h-16 w-16 mb-4 object-contain"
              loading="lazy"
            />
            <h3 className="text-xl md:text-lg font-semibold">{feature.title}</h3>
          </motion.article>
        ))}
      </motion.div>

      {/* Image Gallery (slide up animation) */}
      <motion.div
        className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {placeholderImages.map((image, index) => (
          <motion.figure
            key={index}
            className="overflow-hidden rounded-3xl shadow-md hover:shadow-xl cursor-pointer"
            variants={galleryVariant}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 md:h-56 lg:h-48 object-cover transition-transform duration-300"
              loading="lazy"
            />
          </motion.figure>
        ))}
      </motion.div>
    </section>
  );
};

export default Benefits;
