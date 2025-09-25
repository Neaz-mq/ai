import { motion } from "framer-motion";

const Benefits = () => {
  const images = [
    {
      src: "https://res.cloudinary.com/dxohwanal/image/upload/v1758778918/2.1_z5yqri.jpg",
      alt: "Person experiencing virtual reality",
    },
    {
      src: "https://res.cloudinary.com/dxohwanal/image/upload/v1758779002/2.2_m4ql3j.jpg",
      alt: "Person using VR outdoors",
    },
    {
      src: "https://res.cloudinary.com/dxohwanal/image/upload/v1758779033/2.3_gkzihy.jpg",
      alt: "Person enjoying VR on a couch",
    },
    {
      src: "https://res.cloudinary.com/dxohwanal/image/upload/v1758779060/2.4_osf2xi.jpg",
      alt: "Person using VR indoors",
    },
  ];

  const features = [
    { src: "/Picture1.png", alt: "SpeechCore Icon", title: "SpeechCore" },
    {
      src: "/Picture2.png",
      alt: "360 Experience Icon",
      title: "360° Experience",
    },
    {
      src: "/Picture3.png",
      alt: "Real-Time Interaction Icon",
      title: "Real-Time Interaction",
    },
    { src: "/Picture4.png", alt: "Simulation Icon", title: "Simulation" },
  ];

  const containerVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const galleryVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section id="benefits"
      className="w-full bg-white text-gray-800 py-4 md:py-16"
      aria-labelledby="benefits-heading"
    >
      {/* Section Heading */}
      <motion.header
        className="text-center md:mb-16 mb-8 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2
          id="benefits-heading"
          className="text-xl 2xl:text-5xl xl:text-3xl lg:text-3xl md:text-2xl font-light text-gray-700"
        >
          Entering <span className="text-black font-bold">New</span> Worlds
          Beyond <span className="text-black font-bold">Imagination</span>
        </h2>
        <p className="mt-4 text-gray-500 text-[0.6rem] 2xl:text-lg xl:text-base lg:text-base md:text-sm">
          Explore features that redefine virtual experiences.
        </p>
      </motion.header>

      {/* Features */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-8 mb-12"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {features.map(({ src, alt, title }, index) => (
          <motion.article
            key={index}
            className="relative group rounded-3xl flex flex-col items-center justify-center text-white text-center cursor-pointer h-[23vh] md:h-[23vh] lg:h-[26vh] xl:h-[27vh] 2xl:h-[30vh] overflow-hidden"
            variants={fadeUpVariant}
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
            aria-label={title}
            role="region"
          >
            {/* Animated Gradient Border */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <div className="bg-[#D1F3B2] [background:linear-gradient(90deg,#D1F3B2,#A8FF3E)] [background-size:200%_200%] animate-[gradient_6s_ease_infinite] h-full w-full rounded-3xl">
                <div className="h-full w-full rounded-3xl bg-black/40 backdrop-blur-xl"></div>
              </div>
            </div>

            {/* Glow Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_center,rgba(168,255,62,0.4)_0%,transparent_70%)]"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Floating Icon */}
              <motion.img
                src={src}
                alt={alt}
                className="h-16 w-16 mb-4 object-contain"
                loading="lazy"
                width={64}
                height={64}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
              />

              {/* Title with Sliding Gradient */}
              <motion.h3
                className="text-xl md:text-lg font-semibold tracking-wide text-white bg-clip-text text-transparent inline-block bg-[length:200%_auto]"
                initial={{
                  backgroundPosition: "200% center",
                  opacity: 0,
                  y: 10,
                }}
                animate={{ backgroundPosition: "0% center", opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: "linear", delay: 0.2 }}
              >
                {title}
              </motion.h3>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* Image Gallery */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-8"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {images.map(({ src, alt }, index) => (
          <motion.figure
            key={index}
            className="relative overflow-hidden rounded-3xl cursor-pointer h-[23vh] md:h-[23vh] lg:h-[26vh] xl:h-[27vh] 2xl:h-[30vh] group"
            variants={galleryVariant}
            whileHover={{ scale: 1.04, rotateX: 2, rotateY: -2 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
          >
            {/* Background Image */}
            <motion.img
              src={src}
              alt={alt}
              className="w-full h-full object-cover transition-all duration-700 ease-out rounded-3xl grayscale group-hover:grayscale-0 group-hover:scale-110"
              loading="lazy"
              width={400}
              height={300}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            {/* Animated Caption */}
            <motion.figcaption
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white text-xl font-semibold tracking-wide opacity-0 group-hover:opacity-100"
            >
              {alt}
            </motion.figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </section>
  );
};

export default Benefits;
