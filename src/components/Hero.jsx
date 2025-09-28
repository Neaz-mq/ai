import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const bgTextRef = useRef(null);
  const textRef = useRef(null);
  const gradientRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background "ARTIFICIAL"
      gsap.fromTo(
        bgTextRef.current,
        { opacity: 0, scale: 0.8, y: 60 },
        {
          opacity: 0.3,
          scale: 1,
          y: 0,
          duration: 2,
          ease: "power4.out",
        }
      );

      // Intelligence text reveal
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          delay: 1,
          ease: "power3.out",
        }
      );

      // Gradient shimmer loop ✨
      gsap.to(gradientRef.current, {
        backgroundPosition: "-200% center",
        duration: 5,
        ease: "linear",
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="relative w-full flex flex-col items-center justify-center overflow-hidden py-4"
      role="banner"
      aria-label="Artificial Intelligence Hero Section"
    >
      {/* Background "ARTIFICIAL" text */}
      <h1
        ref={bgTextRef}
        className="absolute top-0 w-full text-center text-[14vw] md:text-[16vw] lg:text-[17vw] xl:text-[17vw] font-bold text-[#65D800] uppercase opacity-30 select-none pointer-events-none"
      >
        ARTIFICIAL
      </h1>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-12 pointer-events-none">
        {/* VR Image with super smooth entrance + subtle float */}
        <motion.img
          src="https://res.cloudinary.com/dxohwanal/image/upload/v1758618654/1_xrlp0v.png"
          alt="Person wearing VR headset"
          className="w-[58vw] md:w-[54vw] lg:w-[56vw] object-contain drop-shadow-xl"
          loading="lazy"
          initial={{ opacity: 0, y: 250 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2.2,
            ease: [0.25, 0.1, 0.25, 1], // smooth cubic-bezier for soft rise
          }}
          whileHover={{ y: -5 }} // subtle lift on hover
        />
        {/* Optional floating animation after load */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-0 w-full h-full"
        />

        {/* Intelligence Text (GSAP controlled) */}
        <h2
          ref={textRef}
          className="w-full text-center text-[10vw] md:text-[14vw] font-extrabold text-transparent tracking-tight md:mt-[-9vw] mt-[-6vw] relative"
        >
          <span
            ref={gradientRef}
            className="bg-gradient-to-r from-[#65D800] via-[#3a6f0d] to-[#26440c] bg-clip-text inline-block bg-[length:200%_auto]"
          >
            Intelligence
          </span>
        </h2>
      </div>
    </section>
  );
};

export default Hero;
