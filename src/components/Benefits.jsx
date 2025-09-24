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

  const containerVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const featureVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const galleryVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section
      className="w-full bg-white text-gray-800 md:py-16 py-4"
      aria-labelledby="benefits-heading"
    >
      {/* Section Heading */}
      <motion.header
        className="text-center mb-16 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2
          id="benefits-heading"
          className="text-3xl md:text-4xl font-light text-gray-700"
        >
          Entering <span className="text-black font-bold">New</span> Worlds Beyond{" "}
          <span className="text-black font-bold">Imagination</span>
        </h2>
        <p className="mt-4 text-gray-500">
          Explore features that redefine virtual experiences.
        </p>
      </motion.header>

      {/* Features Grid */}
      <motion.div
        className="w-full px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {features.map((feature, index) => (
          <motion.article
            key={index}
            className="bg-[#65D800] rounded-3xl flex flex-col items-center justify-center text-white text-center shadow-lg hover:shadow-2xl cursor-pointer h-[30vh] "
            variants={featureVariant}
            whileHover={{ scale: 1.05, rotate: 1 }}
            aria-label={feature.title}
            role="region"
          >
            <img
              src={feature.src}
              alt={feature.alt}
              className="h-16 w-16 mb-4 object-contain"
              loading="lazy"
              width={64}
              height={64}
            />
            <h3 className="text-xl md:text-lg font-semibold">{feature.title}</h3>
          </motion.article>
        ))}
      </motion.div>

      {/* Image Gallery */}
      <motion.div
        className="w-full px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {placeholderImages.map((image, index) => (
          <motion.figure
            key={index}
            className="overflow-hidden rounded-3xl  hover:shadow-xl cursor-pointer h-[30vh] "
            variants={galleryVariant}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300"
              loading="lazy"
              width={400}
              height={300}
            />
          </motion.figure>
        ))}
      </motion.div>
    </section>
  );
};

export default Benefits;
