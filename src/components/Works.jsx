import { motion } from "framer-motion";
import { FaDownload, FaBrain, FaChartLine, FaArrowUp } from "react-icons/fa";

const Works = () => {
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
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      className="w-full bg-white text-gray-800 py-12 md:py-20"
      aria-labelledby="works-heading"
    >
      {/* Heading */}
      <header className="text-center mb-12 px-4">
        <motion.h2
          id="works-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 leading-snug"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          How <span className="text-black">Artificial</span>{" "}
          <span className="text-gray-500 font-light">Intelligence Works</span>{" "}
          <span className="text-black">(In Simple Terms)</span>
        </motion.h2>
      </header>

      {/* Top Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6 px-4 md:px-12 mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Stats Card */}
        <motion.article
          className="sm:col-span-2 lg:col-span-2 xl:col-span-2 rounded-2xl border border-gray-700 shadow-md p-6 flex flex-col justify-center
             h-[48vh] sm:h-[50vh] md:h-[45vh] lg:h-[42vh] xl:h-[40vh]"
          variants={cardVariant}
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            260K+
          </h3>
          <p className="text-gray-600 text-sm sm:text-base mb-4">
            Daily AI-powered interactions
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 text-sm text-gray-600">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <img src="/arrow.png" alt="Arrow icon" className="w-4 h-4" />
                Human-like conversation flow
              </div>
              <div className="flex items-center gap-2">
                <img src="/arrow.png" alt="Arrow icon" className="w-4 h-4" />
                Real-time language translation
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <img src="/arrow.png" alt="Arrow icon" className="w-4 h-4" />
                Context-aware predictions
              </div>
              <div className="flex items-center gap-2">
                <img src="/arrow.png" alt="Arrow icon" className="w-4 h-4" />
                Emotion detection & sentiment analysis
              </div>
            </div>
          </div>
        </motion.article>

        {/* Input Card */}
        <motion.article
          className="rounded-2xl bg-gray-100 shadow-md flex flex-col items-center justify-center p-6 h-[25vh] sm:h-[30vh] lg:h-[32vh]"
          variants={cardVariant}
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <img src="/input.png" alt="Input Icon" className="w-12 h-12 mb-3" />
          <h4 className="text-lg font-medium">Input</h4>
        </motion.article>

        {/* Learning Card */}
        <motion.article
          className="rounded-2xl bg-gray-100 shadow-md flex flex-col items-center justify-center p-6 h-[25vh] sm:h-[30vh] lg:h-[32vh]"
          variants={cardVariant}
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <img
            src="/learning.png"
            alt="Learning Icon"
            className="w-12 h-12 mb-3"
          />
          <h4 className="text-lg font-medium">Learning</h4>
        </motion.article>

        {/* Pattern Card */}
        <motion.article
          className="rounded-2xl bg-gray-100 shadow-md flex flex-col items-center justify-center p-6 h-[25vh] sm:h-[30vh] lg:h-[32vh]"
          variants={cardVariant}
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <img
            src="/pattern.png"
            alt="Pattern Icon"
            className="w-12 h-12 mb-3"
          />
          <h4 className="text-lg font-medium text-center">
            Pattern & Prediction
          </h4>
        </motion.article>

        {/* Output Card */}
        <motion.article
          className="rounded-2xl bg-gray-900 text-white shadow-md flex flex-col items-center justify-center p-6 h-[25vh] sm:h-[30vh] lg:h-[32vh]"
          variants={cardVariant}
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <img src="/output.png" alt="Output Icon" className="w-12 h-12 mb-3" />
          <h4 className="text-lg font-medium">Output</h4>
        </motion.article>
      </motion.div>

      {/* Bottom Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left Image Card */}
        <motion.article
          className="relative md:col-span-2 rounded-2xl overflow-hidden shadow-lg h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[30vh]"
          variants={bottomVariant}
          whileHover={{ scale: 1.03, y: -5 }}
        >
          <img
            src="https://res.cloudinary.com/dxohwanal/image/upload/v1758709005/Picture2_xnfqvo.jpg"
            alt="AI data visualization"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-[#65D800] opacity-50 mix-blend-multiply rounded-2xl"></div>
        </motion.article>

        {/* Right AI Apps Card */}
        <motion.article
          className="relative rounded-2xl overflow-hidden shadow-lg h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[30vh]"
          variants={bottomVariant}
          whileHover={{ scale: 1.03, y: -5 }}
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
                <div
                  key={i}
                  className="w-12 h-12 rounded-full flex items-center justify-center p-0.5 bg-[#65D800]"
                >
                  <div className="w-full h-full rounded-full bg-[#1A3635] flex items-center justify-center">
                    <img
                      src={icon.src}
                      alt={icon.alt}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-white text-center font-medium text-sm sm:text-base">
              World Most Popular AI Apps
            </p>
          </div>
        </motion.article>
      </motion.div>
    </section>
  );
};

export default Works;
