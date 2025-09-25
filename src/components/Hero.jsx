import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative w-full flex flex-col items-center justify-center overflow-hidden py-4"
      role="banner"
      aria-label="Artificial Intelligence Hero Section"
    >
      {/* Background "ARTIFICIAL" text */}
      <h1 className="absolute top-0  w-full text-center text-[14vw] md:text-[16vw]  lg:text-[17vw]  xl:text-[17vw]  2xl:text-[17vw]  font-bold text-[#65D800] uppercase opacity-30 select-none pointer-events-none">
        ARTIFICIAL
      </h1>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-12 pointer-events-none">
        {/* VR Image */}
        <motion.img
          src="https://res.cloudinary.com/dxohwanal/image/upload/v1758618654/1_xrlp0v.png"
          alt="Person wearing VR headset"
          className="w-[58vw] md:w-[54vw] lg:w-[56vw] object-contain drop-shadow-xl"
          loading="lazy"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        />

        {/* "Intelligence" text moved higher above the image */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="w-full text-center text-[10vw]  md:text-[14vw] font-extrabold text-transparent tracking-tight md:mt-[-9vw] mt-[-6vw] relative"
        >
          <motion.span
            className="bg-gradient-to-r from-[#65D800] via-[#3a6f0d] to-[#26440c] bg-clip-text inline-block bg-[length:200%_auto]"
            initial={{ backgroundPosition: "200% center" }}
            animate={{ backgroundPosition: "0% center" }}
            transition={{ duration: 2, ease: "linear" }}
          >
            Intelligence
          </motion.span>
        </motion.h2>
      </div>
    </section>
  );
};

export default Hero;
