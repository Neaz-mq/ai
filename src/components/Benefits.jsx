import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Benefits = () => {
  const images = useMemo(
    () => [
      { src: "https://res.cloudinary.com/dxohwanal/image/upload/v1758778918/2.1_z5yqri.jpg", alt: "Person experiencing virtual reality" },
      { src: "https://res.cloudinary.com/dxohwanal/image/upload/v1758779002/2.2_m4ql3j.jpg", alt: "Person using VR outdoors" },
      { src: "https://res.cloudinary.com/dxohwanal/image/upload/v1758779033/2.3_gkzihy.jpg", alt: "Person enjoying VR on a couch" },    
    ],
    []
  );

useEffect(() => {
  const ctx = gsap.context(() => {
    const cards = gsap.utils.toArray(".gallery-card");

    // hide all except first
    gsap.set(cards, { autoAlpha: 0, yPercent: 20 });
    gsap.set(cards[0], { autoAlpha: 1, yPercent: 0 });

    // Pin wrapper
    ScrollTrigger.create({
      trigger: ".cards-wrapper",
      pin: true,
      start: "top top",
      end: () => `+=${cards.length * window.innerHeight}`,
      scrub: true,
    });

    // Timeline for card sequence
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".cards-wrapper",
        start: "top top",
        end: () => `+=${cards.length * window.innerHeight}`,
        scrub: true,
      },
    });

    cards.forEach((card, i) => {
      if (i === 0) return;

      // fade in current card
      tl.to(card, { autoAlpha: 1, yPercent: 0, duration: 1, ease: "power3.out" }, i * 0.5);

      // fade out previous card
      tl.to(cards[i - 1], { autoAlpha: 0, yPercent: -20, duration: 1, ease: "power3.in" }, i * 0.5);
    });

    ScrollTrigger.refresh();
  });

  return () => ctx.revert();
}, [images]);





  return (
    <section id="benefits" className="relative w-full bg-white text-gray-800 py-16 overflow-hidden">
      <motion.header
        className="text-center mb-12 px-4 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-xl 2xl:text-5xl xl:text-3xl lg:text-3xl md:text-2xl font-light text-gray-700 leading-snug">
          Entering <span className="text-black font-bold">New</span> Worlds Beyond <span className="text-black font-bold">Imagination</span>
        </h2>
        <p className="mt-4 text-gray-500 text-sm md:text-base">
          Explore features that redefine virtual experiences.
        </p>
      </motion.header>

      {/* Cards rendered immediately */}
      <div className="cards-wrapper relative h-[80vh] md:h-screen w-full overflow-hidden">
        {images.map(({ src, alt }, index) => (
          <figure key={index} className="gallery-card absolute inset-0 flex items-center justify-center">
            <img src={src} alt={alt} className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent"></div>
            <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 bg-black/50 px-4 md:px-6 py-2 md:py-3 rounded-xl text-white text-sm md:text-xl font-medium backdrop-blur-sm shadow-lg">
              {alt}
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
