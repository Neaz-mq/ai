import { motion } from "framer-motion";

const cardVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Integration = () => {
  return (
    <section
      id="integration"
      className="w-full bg-white py-16 md:py-24 text-gray-800 overflow-x-hidden"
      aria-labelledby="integration-heading"
    >
      {/* Section Header */}
      <header className="text-center mb-12 px-4">
        <motion.h2
          id="integration-heading"
          className="text-xl 2xl:text-5xl xl:text-3xl lg:text-3xl md:text-2xl font-semibold text-gray-800 leading-snug 2xl:pb-6 xl:pb-4 lg:pb-3 md:pb-2 pb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Explore <span className="text-black">Our</span>{" "}
          <span className="text-gray-500 font-light">Service Plans</span>{" "}
        </motion.h2>
      </header>

      {/* Top Image */}
      <div className="relative w-full mb-20 px-4 md:px-10">
        <div className="relative group rounded-3xl overflow-hidden">
          {/* Banner Image */}
          <img
            src="https://res.cloudinary.com/dxohwanal/image/upload/v1758952246/18_zrqkii.jpg"
            alt="Integration Banner"
            className="w-full h-64 md:h-72 lg:h-80 object-cover"
          />

          {/* Dark Overlay for contrast */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* White Side Overlays Animation */}
          <div className="absolute inset-0 flex justify-between overflow-hidden pointer-events-none">
            <div className="w-0 shrink-0 bg-white/30 backdrop-blur-md h-full transition-all duration-500 ease-out group-hover:w-1/2"></div>
            <div className="w-0 shrink-0 bg-white/30 backdrop-blur-md h-full transition-all duration-500 ease-out group-hover:w-1/2"></div>
          </div>

          {/* Optional Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            AI Services & Pricing
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative -mt-28 px-4 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-10 w-full">
        {/* Left Text */}
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariant}
          className="flex flex-col justify-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
            Services <span className="text-gray-500 font-light">and</span> Price
          </h2>
          <p className="mt-4 text-sm  text-gray-400 max-w-sm">
            Artificial Intelligence (AI) is no longer a futuristic dream—it’s
            here, shaping every aspect of our lives. From smart assistants to
            automated factories, AI is transforming how we live, work, and
            communicate.
          </p>
        </motion.header>

        {/* Pricing Plans */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Basic Plan */}
          <motion.div
            className="bg-teal-900 text-white rounded-3xl p-8 shadow-lg flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariant}
          >
            <img src="/basic.png" alt="icon"  />
            <h3 className="text-3xl font-medium">Basic</h3>
            <p className="text-4xl font-bold my-6">$120</p>
            <p className="text-sm text-center">
              Artificial Intelligence (AI) is no longer a futuristic dream—it’s
              here, shaping every aspect of our lives.
            </p>
            <div className="flex my-4 space-x-1">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <img
                    key={i}
                    src="/review.png"
                    alt="review star"
                    className="w-5 h-5"
                  />
                ))}
            </div>
          </motion.div>

          {/* Standard Plan */}
          <motion.div
            className="bg-gray-100 text-green-600 rounded-3xl p-8 shadow-lg flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariant}
          >
            <img src="/standard.png" alt="icon"  />
            <h3 className="text-3xl font-medium">Standard</h3>
            <p className="text-4xl font-bold my-6">$365</p>
            <p className="text-sm text-center">
              Artificial Intelligence (AI) is no longer a futuristic dream—it’s
              here, shaping every aspect of our lives.
            </p>
           <div className="flex my-4 space-x-1">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <img
                    key={i}
                    src="/review2.png"
                    alt="review star"
                    className="w-5 h-5"
                  />
                ))}
            </div>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            className="bg-[#65D800] text-white rounded-3xl p-8 shadow-lg flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariant}
          >
            <img src="/basic.png" alt="icon"  />
            <h3 className="text-3xl font-medium">Premium</h3>
            <p className="text-4xl font-bold my-6">$968</p>
            <p className="text-sm text-center">
              Artificial Intelligence (AI) is no longer a futuristic dream—it’s
              here, shaping every aspect of our lives.
            </p>
            <div className="flex my-4 space-x-1">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <img
                    key={i}
                    src="/review.png"
                    alt="review star"
                    className="w-5 h-5"
                  />
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
