import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative w-full flex flex-col items-center justify-center bg-white overflow-hidden py-14"
      role="banner"
      aria-label="Artificial Intelligence Hero Section"
    >
      {/* Large Background Text for 'Artificial' */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.2, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-1/8 w-full text-[18vw] sm:text-[16vw] md:text-[22vw] font-extrabold text-[#65D800] z-0 select-none leading-none text-center"
      >
        Artificial
      </motion.h1>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        {/* VR Image */}
        <motion.img
          src="https://res.cloudinary.com/dxohwanal/image/upload/v1758618654/1_xrlp0v.png"
          alt="Person wearing VR headset"
          className="w-full max-w-6xl object-contain drop-shadow-xl"
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
          className="w-full text-center text-[12vw] sm:text-[10vw] md:text-[14vw] font-extrabold text-[#26440c] tracking-tight mt-[-19rem] relative"
        >
          <span className="relative inline-block w-full">
            <motion.span
              className="bg-gradient-to-r from-[#65D800] via-[#3a6f0d] to-[#26440c] bg-clip-text text-transparent inline-block bg-[length:200%_auto]"
              initial={{ backgroundPosition: "200% center" }}
              animate={{ backgroundPosition: "0% center" }}
              transition={{ duration: 2, ease: "linear" }}
            >
              Intelligence
            </motion.span>

            {/* Decorative underline */}
            <motion.span
              className="absolute bottom-0 left-0 w-full h-1 bg-[#65D800] rounded-full blur-sm opacity-60"
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
