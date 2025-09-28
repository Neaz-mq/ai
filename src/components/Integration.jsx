import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      mass: 0.8,
    },
  },
};

// Data for the pricing plans
const pricingPlans = [
  {
    name: "Basic",
    price: "$120",
    colorClass: "bg-teal-900 text-white",
    icon: "/basic.png",
    reviewIcon: "/review.png",
  },
  {
    name: "Standard",
    price: "$365",
    colorClass: "bg-gray-100 text-green-600",
    icon: "/standard.png",
    reviewIcon: "/review2.png",
  },
  {
    name: "Premium",
    price: "$968",
    colorClass: "bg-[#65D800] text-white",
    icon: "/basic.png", // Assuming the same icon as basic, change if needed
    reviewIcon: "/review.png",
  },
];

const Integration = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalCards = pricingPlans.length;

  // Effect to handle automatic cycling of cards
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalCards);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [totalCards]); 

  // Function for manual dot clicks (still works)
  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Explore <span className="text-black">Our</span>{" "}
          <span className="text-gray-500 font-light">Service Plans</span>
        </motion.h2>
      </header>

      {/* Top Image (Unchanged) */}
      <div className="relative w-full mb-20 px-4 md:px-10">
        <div className="relative group rounded-3xl overflow-hidden">
          <img
            src="https://res.cloudinary.com/dxohwanal/image/upload/v1758952246/18_zrqkii.jpg"
            alt="Integration Banner"
            className="w-full h-64 md:h-72 lg:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex justify-between overflow-hidden pointer-events-none">
            <div className="w-0 shrink-0 bg-white/30 backdrop-blur-md h-full transition-all duration-500 ease-out group-hover:w-1/2"></div>
            <div className="w-0 shrink-0 bg-white/30 backdrop-blur-md h-full transition-all duration-500 ease-out group-hover:w-1/2"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            AI Services & Pricing
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative 2xl:-mt-28 xl:-mt-28 lg:-mt-10 px-4 md:px-12 grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-10 w-full">
        {/* Left Text (Unchanged) */}
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariant}
          className="flex flex-col justify-center items-center text-center xl:items-start xl:text-left 2xl:items-start 2xl:text-left"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
            Services <span className="text-gray-500 font-light">and</span> Price
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-400 max-w-sm">
            Artificial Intelligence (AI) is no longer a futuristic dream—it’s
            here, shaping every aspect of our lives. From smart assistants to
            automated factories, AI is transforming how we live, work, and
            communicate.
          </p>
        </motion.header>

        {/* Pricing Plans Swiper for Mobile, Grid for Tablet/Desktop */}
        <motion.div
          className="2xl:col-span-2 xl:col-span-2 lg:col-span-3 grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3  gap-6"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Mobile Swiper Implementation - Hidden on Tablet/Desktop */}
          <div className="2xl:hidden xl:hidden lg:hidden  flex flex-col items-center">
            <motion.div
              key={activeIndex} // Key change forces re-render and animation
              className={`${pricingPlans[activeIndex].colorClass} rounded-3xl p-8 shadow-xl flex flex-col items-center w-full`}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, mass: 0.8 }}
            >
              <img
                src={pricingPlans[activeIndex].icon}
                alt={`${pricingPlans[activeIndex].name} Plan Icon`}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-3xl font-medium mb-2">{pricingPlans[activeIndex].name}</h3>
              <p className="text-4xl font-bold my-6">{pricingPlans[activeIndex].price}</p>
              <p className="text-sm text-center mb-2">
                Artificial Intelligence (AI) is no longer a futuristic dream—it’s
                here, shaping every aspect of our lives.
              </p>
              <div className="flex my-8 space-x-1">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <img
                      key={i}
                      src={pricingPlans[activeIndex].reviewIcon}
                      alt="review star"
                      className="w-5 h-5"
                    />
                  ))}
              </div>
            </motion.div>

            {/* Dots Indicator */}
            <div className="flex space-x-2 mt-8">
              {pricingPlans.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out ${
                    index === activeIndex ? "bg-[#65D800] w-6" : "bg-gray-300"
                  }`}
                  aria-label={`Go to ${_.name} plan`}
                />
              ))}
            </div>
          </div>

          {/* Tablet/Desktop Grid Implementation (Hidden on Mobile) */}
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.name} 
              className={`hidden 2xl:flex xl:flex lg:flex ${plan.colorClass} rounded-3xl p-8 shadow-lg flex-col items-center`}
              variants={cardVariant}
            >
              <img
                src={plan.icon}
                alt={`${plan.name} Plan Icon`}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-3xl font-medium mb-2">{plan.name}</h3>
              <p className="text-4xl font-bold my-6">{plan.price}</p>
              <p className="text-sm text-center mb-2">
                Artificial Intelligence (AI) is no longer a futuristic dream—it’s
                here, shaping every aspect of our lives.
              </p>
              <div className="flex my-8 space-x-1">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <img
                      key={i}
                      src={plan.reviewIcon}
                      alt="review star"
                      className="w-5 h-5"
                    />
                  ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Integration;
