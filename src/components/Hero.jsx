import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const bgTextRef = useRef(null);
  const textRef = useRef(null);
  const gradientRef = useRef(null);
  const vrImgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background "ARTIFICIAL" animation
      gsap.fromTo(
        bgTextRef.current,
        { opacity: 0, scale: 0.95, y: 60, rotation: -1 },
        {
          opacity: 0.3,
          scale: 1,
          y: 0,
          rotation: 0,
          duration: 2,
          ease: "power3.out",
        }
      );

      // Floating subtle loop for bgText
      gsap.to(bgTextRef.current, {
        y: 10,
        scale: 1.02,
        textShadow: "0px 0px 25px #65D800",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        force3D: true,
      });

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

      // Gradient shimmer loop
      gsap.to(gradientRef.current, {
        backgroundPosition: "-200% center",
        duration: 5,
        ease: "linear",
        repeat: -1,
        force3D: true,
      });

      // VR Image initial rise animation (only once)
      gsap.fromTo(
        vrImgRef.current,
        { opacity: 0, y: 250 },
        { opacity: 1, y: 0, duration: 2.2, ease: "power3.out" }
      );
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
        className="absolute top-0 w-full text-center text-[14vw] md:text-[16vw] lg:text-[17vw] xl:text-[17vw] font-bold text-[#65D800] uppercase opacity-30 select-none pointer-events-none will-change-transform"
      >
        ARTIFICIAL
      </h1>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-12 pointer-events-none">
        {/* VR Image with smooth rise (only on load) */}
        <motion.img
          ref={vrImgRef}
          src="https://res.cloudinary.com/dxohwanal/image/upload/v1758618654/1_xrlp0v.png"
          alt="Person wearing VR headset"
          className="w-[58vw] md:w-[54vw] lg:w-[56vw] object-contain drop-shadow-xl will-change-transform"
        />

        {/* Intelligence Text */}
        <h2
          ref={textRef}
          className="w-full text-center text-[10vw] md:text-[14vw] font-extrabold text-transparent tracking-tight md:mt-[-9vw] mt-[-6vw] relative"
        >
          <span
            ref={gradientRef}
            className="bg-gradient-to-r from-[#65D800] via-[#3a6f0d] to-[#26440c] bg-clip-text inline-block bg-[length:200%_auto] will-change-transform"
          >
            Intelligence
          </span>
        </h2>
      </div>
    </section>
  );
};

export default Hero;
