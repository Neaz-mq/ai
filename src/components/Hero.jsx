import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative w-full  flex items-start justify-center bg-white overflow-hidden pt-14 pb-32"
      role="banner"
      aria-label="Artificial Intelligence Hero Section"
    >
      {/* Large Background Text for 'Artificial' */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.2, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute text-[5rem] sm:text-[9rem] md:text-[14rem] font-extrabold text-[#65D800] z-0 select-none leading-none"
      >
        Artificial
      </motion.h1>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        {/* VR Image (slide up from bottom) */}
        <motion.img
          src="https://res.cloudinary.com/dxohwanal/image/upload/v1758618654/1_xrlp0v.png"
          alt="Person wearing VR headset"
          className="h-[18rem] sm:h-[25rem] md:h-[32rem] w-auto object-cover drop-shadow-xl"
          loading="lazy"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        />

        {/* 'Intelligence' Text */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-[#26440c] tracking-tight
          mt-[-1.2rem] sm:mt-[-2rem] md:mt-[-8rem] relative"
        >
          <span className="relative inline-block">
            <motion.span
              className="bg-gradient-to-r from-[#65D800] via-[#3a6f0d] to-[#26440c] bg-clip-text text-transparent inline-block"
              initial={{ backgroundPosition: "200% center" }}
              animate={{ backgroundPosition: "0% center" }}
              transition={{ duration: 2, ease: "linear" }}
              style={{
                backgroundSize: "200% auto",
              }}
            >
              Intelligence
            </motion.span>
            {/* Decorative underline */}
            <motion.span
              className="absolute -bottom-10 left-0 w-full h-1 bg-[#65D800] rounded-full blur-sm opacity-70"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1 }}
              aria-hidden="true"
            ></motion.span>
          </span>
        </motion.h2>
      </div>
    </section>
  );
};

export default Hero;
