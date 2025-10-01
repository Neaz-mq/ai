import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

const Works = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      const letters = headerRef.current.querySelectorAll(".letter");

      // Initial setup
      gsap.set(letters, {
        yPercent: 0,
        willChange: "transform",
        transform: "translateZ(0)", 
      });

      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      tl.to(letters, {
        yPercent: 15,
        duration: 0.6,
        ease: "sine.inOut",
        stagger: { each: 0.04 },
        force3D: true, 
      });

      return () => {
        tl.kill();
      };
    }
  }, []);

  const cardVariant = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const bottomVariant = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const splitText = (text) =>
    text.split("").map((char, i) => (
      <span
        key={i}
        className="letter inline-block will-change-transform"
        style={{ transform: "translateZ(0)" }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <section
      id="works"
      className="w-full bg-white text-gray-800 py-12 md:py-20"
      aria-labelledby="works-heading"
    >
      {/* Section Header */}
      <header className="text-center mb-12 px-4">
        <h2
          ref={headerRef}
          id="works-heading"
          className="text-xl 2xl:text-5xl xl:text-3xl lg:text-3xl md:text-2xl font-semibold text-gray-800 leading-snug 2xl:pb-6 xl:pb-4 lg:pb-3 md:pb-2 pb-2"
        >
          {splitText("How ")}
          <span className="text-black">{splitText("Artificial")}</span>{" "}
          <span className="text-gray-500 font-light">
            {splitText("Intelligence Works")}
          </span>{" "}
          <span className="text-black">{splitText("(In Simple Terms)")}</span>
        </h2>
      </header>

      {/* Top Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 px-4 md:px-12 mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Stats Card */}
        <motion.article
          className="sm:col-span-2 lg:col-span-2 xl:col-span-2 rounded-2xl border border-gray-700 shadow-md p-4 sm:p-6 flex flex-col justify-center items-center 2xl:min-h-[28vh] xl:min-h-[27vh] lg:min-h-[25vh] md:min-h-[23vh] h-auto"
          variants={cardVariant}
          whileHover={{ scale: 1.05, y: -3 }}
          aria-label="Daily AI-powered interactions"
        >
          <div className="flex flex-col justify-center items-center mb-4 text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 break-words">
              260K+
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm break-words">
              Daily AI-powered interactions
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm text-gray-600 w-full">
            <div className="flex flex-col space-y-2 sm:space-y-3 items-start">
              <div className="flex items-center gap-2 break-words">
                <img src="/arrow.png" alt="" className="w-3 h-3 flex-shrink-0" />
                Human-like chat
              </div>
              <div className="flex items-center gap-2 break-words">
                <img src="/arrow.png" alt="" className="w-3 h-3 flex-shrink-0" />
                Real-time translation
              </div>
            </div>
            <div className="flex flex-col space-y-2 sm:space-y-3 items-end">
              <div className="flex items-center gap-2 break-words">
                <img src="/arrow.png" alt="" className="w-3 h-3 flex-shrink-0" />
                Context-aware predictions
              </div>
              <div className="flex items-center gap-2 break-words">
                <img src="/arrow.png" alt="" className="w-3 h-3 flex-shrink-0" />
                Autonomous decision-making
              </div>
            </div>
          </div>
        </motion.article>

        {/* Input Card */}
        <motion.article
          className="rounded-2xl bg-gray-100 shadow-md flex flex-col items-center justify-center p-3 2xl:h-[28vh] xl:h-[32vh] lg:h-[34vh] md:h-[35vh] h-[30vh]"
          variants={cardVariant}
          whileHover={{ scale: 1.05, y: -3 }}
          aria-label="Input process"
        >
          <img src="/input.png" alt="Input Icon" className="w-8 h-8 mb-1" />
          <h4 className="text-sm sm:text-base font-medium">Input</h4>
        </motion.article>

        {/* Learning Card */}
        <motion.article
          className="rounded-2xl bg-gray-100 shadow-md flex flex-col items-center justify-center p-3 2xl:h-[28vh] xl:h-[32vh] lg:h-[34vh] md:h-[35vh] h-[30vh]"
          variants={cardVariant}
          whileHover={{ scale: 1.05, y: -3 }}
          aria-label="Learning process"
        >
          <img src="/learning.png" alt="Learning Icon" className="w-8 h-8 mb-1" />
          <h4 className="text-sm sm:text-base font-medium">Learning</h4>
        </motion.article>

        {/* Pattern Card */}
        <motion.article
          className="rounded-2xl bg-gray-100 shadow-md flex flex-col items-center justify-center p-3 2xl:h-[28vh] xl:h-[32vh] lg:h-[34vh] md:h-[35vh] h-[30vh]"
          variants={cardVariant}
          whileHover={{ scale: 1.05, y: -3 }}
          aria-label="Pattern recognition and prediction"
        >
          <img src="/pattern.png" alt="Pattern Icon" className="w-8 h-8 mb-1" />
          <h4 className="text-sm sm:text-base font-medium text-center">
            Pattern & Prediction
          </h4>
        </motion.article>

        {/* Output Card */}
        <motion.article
          className="rounded-2xl bg-gray-900 text-white shadow-md flex flex-col items-center justify-center p-3 2xl:h-[28vh] xl:h-[32vh] lg:h-[34vh] md:h-[35vh] h-[30vh]"
          variants={cardVariant}
          whileHover={{ scale: 1.05, y: -3 }}
          aria-label="Output results"
        >
          <img src="/output.png" alt="Output Icon" className="w-8 h-8 mb-1" />
          <h4 className="text-sm sm:text-base font-medium">Output</h4>
        </motion.article>
      </motion.div>

      {/* Bottom Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
      >
        {/* Left Image Card */}
        <motion.article
          className="relative md:col-span-2 rounded-2xl overflow-hidden shadow-lg h-[30vh] sm:h-[35vh] md:h-[43vh] lg:h-[45vh]"
          variants={bottomVariant}
          whileHover={{ scale: 1.03, y: -5, transition: { duration: 0.3 } }}
          aria-label="AI data visualization"
        >
          <img
            src="https://res.cloudinary.com/dxohwanal/image/upload/v1758709005/Picture2_xnfqvo.jpg"
            alt="AI data visualization"
            className="w-full h-full object-cover rounded-2xl will-change-transform"
          />
          <div className="absolute inset-0 bg-[#65D800] opacity-50 mix-blend-multiply rounded-2xl"></div>
        </motion.article>

        {/* Right AI Apps Card */}
        <motion.article
          className="relative rounded-2xl overflow-hidden shadow-lg h-[30vh] sm:h-[35vh] md:h-[43vh] lg:h-[45vh]"
          variants={bottomVariant}
          whileHover={{ scale: 1.03, y: -5, transition: { duration: 0.3 } }}
          aria-label="Popular AI Apps"
        >
          <div
            className="absolute inset-0 bg-[url('https://res.cloudinary.com/dxohwanal/image/upload/v1758709479/Picture3_wlfer9.jpg')] bg-cover bg-center"
            aria-hidden="true"
          ></div>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center gap-4 h-full p-4">
            <div className="flex space-x-4">
              {[
                { src: "/gpt.png", alt: "ChatGPT Logo" },
                { src: "/panda.png", alt: "Panda AI Logo" },
                { src: "/star.png", alt: "Star AI Logo" },
              ].map((icon, i) => (
                <motion.div
                  key={i}
                  className="w-12 h-12 rounded-full flex items-center justify-center p-0.5 bg-[#65D800]"
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 120, damping: 10 }}
                >
                  <div className="w-full h-full rounded-full bg-[#1A3635] flex items-center justify-center">
                    <img
                      src={icon.src}
                      alt={icon.alt}
                      className="w-6 h-6 object-contain will-change-transform"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.p
              className="text-white text-center font-medium text-sm sm:text-base"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              World Most Popular AI Apps
            </motion.p>
          </div>
        </motion.article>
      </motion.div>
    </section>
  );
};

export default Works;
